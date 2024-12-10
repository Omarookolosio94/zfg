import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { cx } from "../core/helpers";
import Select from "../core/components/Select";
import { useProductStore } from "../core/services/useProductStore";
import Pagination from "../core/components/Pagination";
import Product from "./partials/Product";
import Modal from "../core/components/Modal";
import ProductDetail from "./partials/ProductDetail";
import { addMetaData } from "../core/seoHelpers";

const Products = () => {
  const productList = useProductStore((store) => store.productPagination);
  const query = useProductStore((store) => store.query);
  const getProducts = useProductStore((store) => store.getProducts);

  const categories = useProductStore((store) => store.categories);
  const getCategories = useProductStore((store) => store.getCategory);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openProductModal, setOpenProductModal] = useState(false);
  const [searchParams, setSearchParams]: any = useSearchParams();

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setOpenProductModal(true);
  };

  const fetchMore = async (page: number) => {
    getProducts({ ...query, pageNumber: page });
  };

  useEffect(() => {
    var category = searchParams.get("category");

    getProducts({
      ...query,
      categoryId: category != null ? category : "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("category")]);

  useEffect(() => {
    categories?.length < 1 && getCategories();
    getProducts(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {addMetaData({
        title: "Products | StreamFlo - Explore Our Chemical Offerings",
        description:
          "Browse our extensive catalog of high-quality chemicals designed for various industries, including agriculture, manufacturing, and more.",
        keywords:
          "StreamFlo products, chemicals catalog, industrial chemicals, high-quality chemicals",
        path: "products",
        locale: "en_NG",
      })}

      <section className="bg-silos flex h-[36vh] w-full">
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-70 text-gray-50">
          <div className="mx-auto mt-[14vh] w-[90%] md:mt-[10vh]">
            <h1 className="font-orbitron text-3xl uppercase">Products</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-[90%] flex-col justify-between gap-6 py-20 md:flex-row md:gap-5">
          <div className="w-full flex-col text-sm md:flex md:w-1/5">
            <div className="hidden md:flex md:flex-col">
              <Link
                to="/products"
                className={cx(
                  "border-b py-3 hover:border-blue-800 hover:font-extrabold hover:text-blue-800",
                  !query.categoryId
                    ? "!border-blue-800 !font-extrabold !text-blue-800"
                    : "",
                )}
              >
                All
              </Link>

              {categories?.map((cat) => (
                <Link
                  to={`/products?category=${cat?.categoryId}`}
                  className={cx(
                    "border-b py-3 hover:border-blue-800 hover:font-extrabold hover:text-blue-800",
                    query?.categoryId == cat?.categoryId
                      ? "!border-blue-800 !font-extrabold !text-blue-800"
                      : "",
                  )}
                  key={cat?.categoryId}
                >
                  {cat?.name}
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <Select
                options={[
                  ...categories?.map((cat) => ({
                    name: cat?.name,
                    value: cat?.categoryId,
                  })),
                ]}
                defaultName="All"
                defaultValue=""
                value={query?.categoryId}
                onChange={(e) => {
                  setSearchParams({ category: e?.target?.value });
                }}
              />
            </div>
          </div>
          <div className="w-full md:w-4/5">
            {productList?.items?.length > 0 ? (
              <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {productList?.items?.map((product) => (
                  <Product
                    key={product?.productId}
                    product={product}
                    handleOpen={handleViewProduct}
                  />
                ))}
              </div>
            ) : (
              <div className="mb-10 flex h-[40vh] flex-col items-center justify-center gap-3 text-gray-500">
                <span className="iconify text-[100px] pepicons--no-entry"></span>
                <p className="font-medium">No products yet</p>
              </div>
            )}

            <Pagination
              pageSize={query?.pageSize}
              pagination={productList}
              onFetch={fetchMore}
            />
          </div>
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

export default Products;
