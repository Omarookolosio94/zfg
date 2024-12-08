import { useEffect, useState } from "react";
import Button from "../../core/components/Button";
import { Link } from "react-router-dom";
import { useProductStore } from "../../core/services/useProductStore";
import { cx } from "../../core/helpers";
import defaultImg from "../../img/defaultProductImg.svg";

interface Props {
  product: Product | null;
  boxStyle?: string;
  showClose?: boolean;
  onClose?: any;
}

const ProductDetail = ({
  product = null,
  boxStyle = "",
  showClose = false,
  onClose = () => {},
}: Props) => {
  const quotedProducts = useProductStore((store) => store.quotedProducts);
  const addToQuote = useProductStore((store) => store.addToQuote);
  const removeFromQuote = useProductStore((store) => store.removeFromQuote);

  const [displayedImg, setDisplayedImg] = useState<any>("");

  useEffect(() => {
    setDisplayedImg(product?.images[0]?.url ?? defaultImg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.sku]);

  return (
    <>
      {product !== null && (
        <section
          className={cx(
            "mx-auto flex w-[90%] flex-col gap-5 py-20 lg:flex-row",
            boxStyle,
          )}
        >
          <div className="flex h-[60vh] w-full flex-col-reverse gap-5 sm:flex-row lg:w-3/5">
            <div className="flex w-full justify-center gap-5 sm:block sm:w-[80px]">
              {Array.from({ length: 4 }).map((_, index) => {
                const pic = product?.images?.[index];
                return (
                  <div
                    key={index}
                    className="mb-3 flex h-[80px] w-[80px] flex-row items-center justify-center border hover:cursor-pointer"
                    onClick={() => setDisplayedImg(pic?.url || defaultImg)}
                  >
                    <img
                      src={pic?.url || defaultImg}
                      alt={pic?.name || "default"}
                      className="h-full w-full object-cover"
                    />
                  </div>
                );
              })}
            </div>

            <div className="h-full w-full border">
              <img
                src={displayedImg}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <div>
              <h5 className="mb-5 text-lg font-extrabold uppercase text-blue-800">
                {product?.name}
              </h5>

              <div className="mb-5">
                <h6 className="font-bold text-black">SKU:</h6>
                <p className="mb-2">{product?.sku || "N/A"}</p>
              </div>

              <div className="mb-5">
                <h6 className="font-bold text-black">Units:</h6>
                <p>{product?.units || "N/A"}</p>
              </div>

              <div className="mb-5">
                <h6 className="font-bold text-black">Description:</h6>
                <p className="mb-2">
                  {product.description || "No description available"}
                </p>

                <p>{product?.comments}</p>
              </div>

              <div className="mb-10">
                <h6 className="font-bold text-gray-700">Tags:</h6>
                <div className="flex flex-wrap gap-2">
                  {product?.category != null && (
                    <span className="lowercase bg-gray-200 px-4 py-2 text-sm text-gray-700">
                      {product?.category?.name}
                    </span>
                  )}
                  {product?.tags ? (
                    product?.tags.split(",").map((tag, index) => (
                      <span
                        key={index}
                        className="lowercase bg-gray-200 px-4 py-2 text-sm text-gray-700"
                      >
                        {tag.trim()}
                      </span>
                    ))
                  ) : (
                    <span className="lowercase bg-gray-200 px-4 py-2 text-sm text-gray-700">
                      No Tag Available
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-5 sm:flex-row-reverse">
              <div className="w-full lg:w-2/3">
                {quotedProducts.some((item) => item.sku == product?.sku) ? (
                  <Button
                    onClick={(e: any) => {
                      e?.stopPropagation();
                      removeFromQuote(product!.sku);
                    }}
                    className="!w-full !bg-red-700 !px-6 !py-3 font-extrabold !text-white hover:!bg-red-800"
                  >
                    REMOVE FROM QUOTE
                  </Button>
                ) : (
                  <Button
                    onClick={(e: any) => {
                      e?.stopPropagation();
                      addToQuote(product!);
                    }}
                    className="!w-full !px-6 !py-3 !font-extrabold"
                  >
                    ADD TO QUOTE
                  </Button>
                )}
              </div>

              {showClose ? (
                <button
                  onClick={() => onClose()}
                  className="flex w-full items-center justify-center gap-2 border bg-white px-6 py-3 font-mont text-[14px] uppercase text-secondary !opacity-100 transition duration-300 ease-in-out hover:bg-secondary hover:text-white disabled:cursor-not-allowed lg:w-1/3"
                >
                  Close
                </button>
              ) : (
                <Link
                  to="/products"
                  className="flex w-full items-center justify-center gap-2 border bg-white px-6 py-3 font-mont text-[14px] uppercase text-secondary !opacity-100 transition duration-300 ease-in-out hover:bg-secondary hover:text-white disabled:cursor-not-allowed lg:w-1/3"
                >
                  Back
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
