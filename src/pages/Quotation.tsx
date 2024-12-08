import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProductStore } from "../core/services/useProductStore";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../core/components/Button";
import defaultImg from "../img/defaultProductImg.svg";
import Input from "../core/components/Input";
import TextArea from "../core/components/TextArea";
import Modal from "../core/components/Modal";
import ProductDetail from "./partials/ProductDetail";
import { addMetaData } from "../core/seoHelpers";

const Quotation = () => {
  const navigate = useNavigate();

  const quotedProducts = useProductStore((store) => store.quotedProducts);
  const errors = useProductStore((store) => store.errors);
  const setError = useProductStore((store) => store.setError);
  const updateError = useProductStore((store) => store.updateError);
  const clearError = useProductStore((store) => store.clearError);

  const placeQuotationAction = useProductStore((store) => store.placeQuotation);
  const clearCart = useProductStore((store) => store.clearQuote);
  const removeFromQuote = useProductStore((store) => store.removeFromQuote);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openProductModal, setOpenProductModal] = useState(false);

  const recaptcha: any = useRef(null);

  const [data, setData] = useState<NewQuotation>({
    companyName: "",
    contactEmail: "",
    contactPhoneNumber: "",
    name: "",
    note: "",
    productSkus: quotedProducts.map((product) => product.sku),
  });

  // TODO: Add Validations
  const validation = (data: NewQuotation) => {
    var isValid = true;

    if (data?.name?.length < 1) {
      isValid = false;
      updateError("name", "Name is required");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data?.contactEmail)) {
      updateError("contactEmail", "A valid Email address is required");
      isValid = false;
    }

    if (data?.companyName?.length < 1) {
      isValid = false;
      updateError("companyName", "Business/Company is required");
    }

    if (
      data?.contactPhoneNumber?.length !== 11 &&
      data?.contactPhoneNumber?.length !== 13
    ) {
      updateError(
        "contactPhoneNumber",
        "Phone number must be 11 digits or 13 digits",
      );
      isValid = false;
    }

    if (data?.productSkus?.length < 1) {
      updateError("productSkus", "Please add products for quotes");
      isValid = false;
    }

    return isValid;
  };

  const handleFormChange = (e: any) => {
    const { name, value } = e?.target;

    setData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const placeQuote = async (e: any) => {
    e.preventDefault();

    if (!validation(data)) {
      toast.error("Please pass in all required information");
      return;
    }

    const captchaValue = recaptcha!.current?.getValue() ?? false;

    if (!captchaValue) {
      toast.error("Please verify the reCAPTCHA!");
      return;
    }

    clearError();
    var res = await placeQuotationAction(data);

    if (res?.status) {
      navigate("/products");
      clearCart();
      setData({
        companyName: "",
        contactEmail: "",
        contactPhoneNumber: "",
        name: "",
        note: "",
        productSkus: [],
      });
    }
  };

  useEffect(() => {
    quotedProducts?.length < 1 && navigate("/products");

    setError({
      companyName: "",
      contactEmail: "",
      contactPhoneNumber: "",
      name: "",
      note: "",
      productSkus: "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quotedProducts?.length]);

  // TODO: Save customer details for automatic refill

  return (
    <>
      {addMetaData({
        title: "Quotation | StreamFlo - Get Tailored Chemical Pricing",
        description:
          "Request tailored quotations for high-quality chemicals. StreamFlo provides competitive pricing, detailed product information, and expert support for your chemical needs.",
        keywords:
          "StreamFlo quotations, tailored chemical pricing, request quotes, chemical pricing Nigeria",
        path: "quotation",
        locale: "en_NG",
      })}

      <section className="bg-silos flex h-[36vh] w-full">
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-70 text-gray-50">
          <div className="mx-auto mt-[14vh] w-[90%] md:mt-[10vh]">
            <h1 className="font-orbitron text-3xl uppercase">GET QUOTE</h1>
          </div>
        </div>
      </section>

      <form
        className="mx-auto flex w-[90%] flex-col gap-10 py-20 sm:flex-row"
        onSubmit={placeQuote}
      >
        <div className="w-full sm:w-1/2">
          <h5 className="mb-5 text-lg font-extrabold uppercase text-blue-800">
            Company/Personal Information
          </h5>

          <div>
            <Input
              label="Name"
              isRequired
              name="name"
              value={data?.name}
              onChange={handleFormChange}
              error={errors?.name}
              onBlur={() => updateError("name", "")}
            />
            <Input
              label="Company/Business"
              name="companyName"
              value={data?.companyName}
              onChange={handleFormChange}
              isRequired
              instruction={`* if purchase is made on behalf of a business or company`}
              error={errors?.companyName}
              onBlur={() => updateError("companyName", "")}
            />

            <Input
              label="Email"
              isRequired
              name="contactEmail"
              value={data?.contactEmail}
              onChange={handleFormChange}
              error={errors?.contactEmail}
              onBlur={() => updateError("contactEmail", "")}
            />

            <Input
              label="Contact Phone Number"
              name="contactPhoneNumber"
              isNumberOnly
              isRequired
              value={data?.contactPhoneNumber}
              onChange={handleFormChange}
              error={errors?.contactPhoneNumber}
              onBlur={() => updateError("contactPhoneNumber", "")}
            />

            <TextArea
              label="Extra Note"
              name="note"
              value={data?.note}
              onChange={handleFormChange}
            />
          </div>
        </div>

        <div className="w-full rounded-[4px] sm:w-1/2">
          <div className="mb-5">
            <div className="mb-5">
              {quotedProducts?.length > 0 &&
                quotedProducts?.map((item) => (
                  <div
                    key={item?.productId}
                    onClick={() => {
                      setSelectedProduct(item);
                      setOpenProductModal(true);
                    }}
                    className="mb-5 flex items-center justify-between border border-b transition-height duration-500 ease-in-out hover:cursor-pointer hover:bg-blue-50"
                  >
                    <div className="flex w-2/3 items-center gap-3">
                      <img
                        src={item?.images[0]?.url ?? defaultImg}
                        alt={item?.name}
                        className="h-[80px] w-[80px] object-cover"
                      />
                      <p>{item?.name}</p>
                    </div>

                    <button
                      role="button"
                      onClick={(e: any) => {
                        e?.stopPropagation();
                        removeFromQuote(item!.sku);
                      }}
                      className="px-5 py-5"
                    >
                      <span className="oi--delete iconify h-[24px] w-[24px] text-red-700"></span>
                    </button>
                  </div>
                ))}
            </div>
          </div>

          <div className="relative mb-10 mt-5 w-full">
            <ReCAPTCHA
              style={{ width: "100%", margin: "10px 0" }}
              sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY!}
              ref={recaptcha}
            />
          </div>

          <div className="flex flex-col items-center justify-start gap-3 lg:flex-row">
            <Link
              to="/products"
              className="flex w-full items-center justify-center gap-2 border bg-white px-6 py-3 font-mont text-[14px] uppercase text-secondary !opacity-100 transition duration-300 ease-in-out hover:bg-secondary hover:text-white disabled:cursor-not-allowed lg:!w-1/2"
            >
              Return to Shop
            </Link>

            <Button className="!w-full !px-6 !py-3 !font-extrabold lg:!w-1/2">
              Place Quote Request
            </Button>
          </div>
        </div>
      </form>

      {openProductModal && (
        <Modal
          bodyStyle="!w-full !h-[100%] lg:!h-[90%] lg:!w-[80%]"
          onClose={() => {
            setSelectedProduct(null);
            setOpenProductModal(false);
          }}
        >
          <ProductDetail
            boxStyle="!w-[100%] !py-10"
            product={selectedProduct}
            onClose={() => {
              setSelectedProduct(null);
              setOpenProductModal(false);
            }}
            showClose={true}
          />
        </Modal>
      )}
    </>
  );
};

export default Quotation;
