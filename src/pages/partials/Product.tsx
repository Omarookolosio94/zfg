import { useNavigate } from "react-router-dom";
import Button from "../../core/components/Button";
import { useProductStore } from "../../core/services/useProductStore";
import defaultImg from "../../img/defaultProductImg.svg";

interface Props {
  product: Product | null;
  handleOpen?: any;
  allowExpansion?: boolean;
}

const Product = ({
  product = null,
  handleOpen = () => {},
  allowExpansion = true,
}: Props) => {
  const navigate = useNavigate();

  const quotedProducts = useProductStore((store) => store.quotedProducts);
  const addToQuote = useProductStore((store) => store.addToQuote);
  const removeFromQuote = useProductStore((store) => store.removeFromQuote);

  return (
    <div
      key={product?.name}
      onClick={() => navigate(`/products/${product?.sku}`)}
      className="h-[300px] overflow-hidden border hover:cursor-pointer sm:h-[360px]"
    >
      <div className="relative h-[58%] w-full border-b sm:h-[65%]">
        {allowExpansion && (
          <div
            className="absolute right-[2px] top-[2px] p-2 hover:cursor-pointer lg:right-[5px] lg:top-[5px]"
            onClick={(e: any) => {
              e?.stopPropagation();
              handleOpen(product);
            }}
          >
            <span className="solar--maximize-square-bold text-secondary iconify h-[32px] w-[32px]" />
          </div>
        )}
        <img
          src={product?.images[0]?.url ?? defaultImg}
          alt={product?.images[0]?.alt ?? product?.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="bg-white p-2">
        <p className="mb-1 font-extrabold text-blue-800">{product?.name}</p>
        <p className="mb-3 line-clamp-2 text-xs">{product?.description}</p>

        <div className="flex justify-end">
          {quotedProducts.some((item) => item.sku == product?.sku) ? (
            <Button
              onClick={(e: any) => {
                e?.stopPropagation();
                removeFromQuote(product!.sku);
              }}
              className="!bg-red-700 !px-3 !py-1 font-extrabold !text-white hover:!bg-red-800"
            >
              REMOVE FROM QUOTE
            </Button>
          ) : (
            <Button
              onClick={(e: any) => {
                e?.stopPropagation();
                addToQuote(product!);
              }}
              className="!px-3 !py-1 !font-extrabold"
            >
              ADD TO QUOTE
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
