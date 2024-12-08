import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { isObjectEmpty } from "../core/helpers";
import { useProductStore } from "../core/services/useProductStore";
import Product from "./partials/Product";
import ProductDetail from "./partials/ProductDetail";
import { addMetaData } from "../core/seoHelpers";

const ProductById = () => {
  const navigate = useNavigate();

  const product = useProductStore((store) => store.product);
  const productList = useProductStore((store) => store.productPagination);
  const getProductById = useProductStore((store) => store.getProductByParam);
  const getProducts = useProductStore((store) => store.getProducts);
  const { productId } = useParams();

  useEffect(() => {
    if (productId == null || productId?.length < 1) {
      navigate("/products");
    } else {
      if (isObjectEmpty(product) || product?.sku !== productId) {
        getProductById(productId);
      }
    }

    getProducts({
      businessId: "",
      categoryId: "",
      listedOnly: true,
      pageNumber: 1,
      pageSize: 4,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);
  return (
    <>
      {addMetaData({
        title: `${productId} - Product Details | StreamFlo`,
        description: `Explore the details of your selected product, including specifications, usage guidelines, and related items from StreamFlo.`,
        keywords:
          "StreamFlo product details, chemical product information, industrial chemicals",
        path: `products/${productId}`,
        locale: "en_NG",
      })}

      <section className="bg-silos flex h-[36vh] w-full">
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-70 text-gray-50">
          <div className="mx-auto mt-[14vh] w-[90%] md:mt-[10vh]">
            <h1 className="font-orbitron text-3xl uppercase">
              <span>Products</span> <br />
              <span className="text-lg">{product && product?.name}</span>
            </h1>
          </div>
        </div>
      </section>

      {product != null ? (
        <>
          <ProductDetail product={product} />
        </>
      ) : (
        <div className="mb-10 flex h-[40vh] flex-col items-center justify-center gap-3 text-gray-500">
          <span className="pepicons--no-entry iconify text-[100px]"></span>
          <p className="font-medium">Product with sku: {productId} not found</p>
        </div>
      )}

      <section className="mx-auto w-[90%] py-10">
        <h5 className="mb-3 text-lg font-extrabold uppercase text-blue-800">
          Related Products
        </h5>
        <div className="w-full">
          {productList?.items?.length > 0 ? (
            <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {productList?.items?.map((product) => (
                <Product
                  key={product?.productId}
                  product={product}
                  allowExpansion={false}
                />
              ))}
            </div>
          ) : (
            <div className="mb-10 flex h-[40vh] flex-col items-center justify-center gap-3 text-gray-500">
              <span className="pepicons--no-entry iconify text-[100px]"></span>
              <p className="font-medium">No products yet</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-hero flex h-[60vh] w-full justify-end">
        <div className="flex w-full flex-col justify-center bg-black bg-opacity-70 p-0 text-white md:w-1/2 md:p-10">
          <div className="mx-auto w-[90%] text-center md:text-start">
            <h1 className="py-5 font-orbitron text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
              Questions?
            </h1>

            <p className="mb-8 mt-5">
              Have questions regarding our products or services? Please contact
              us and we will be happy to assist you.
            </p>

            <Link
              to="/contacts"
              className="inline-block w-full items-center justify-center gap-2 bg-blue-800 px-[26px] py-[10px] font-mont text-[14px] uppercase !opacity-100 transition duration-300 ease-in-out hover:bg-blue-900 disabled:cursor-not-allowed sm:w-2/3 md:flex lg:w-1/3"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductById;
