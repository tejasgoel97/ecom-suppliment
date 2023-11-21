import Link from "next/link";
import StarRating from "@/components/StarRating";

const ProductCard = (props) => {
  const { product } = props;
  const productUrl = `/product/${product.id}`;
  const productName = `${product.productName}, ${product.variants[0].name}`;
  const SP = product.variants[0].subvariants[0].SP;
  const MRP = product.variants[0].subvariants[0].MRP;
  return (
    <Link href={productUrl} className="col-span-1">
      <div className="relative w-full cursor-pointer rounded-t-lg rounded-b-lg mx-auto shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105">
        <div className="bg-gray-200 rounded-t-lg">
          <div className="flex justify-center overflow-hidden">
            <img
              className=""
              src={product.featureImage}
              style={{ width: "auto", height: "100%" }}
            />
          </div>
        </div>
        <div className="px-3 md:px-5 py-5 border border-gray-200 rounded-b-lg ">
          <div className="md:h-40 ">
            <h5 className="text-base leading-tight font-semibold text-gray-600 mb-2">
              {productName}
            </h5>
            <StarRating rating={3.7} />
            <div className="flex gap-3 mb-3 items-center">
              <div className="font-bold text-green-800 text-lg">₹{SP}</div>
              <div className="line-through align-middle text-#aeb1bd">
                ₹{MRP}
              </div>
              <div className="text-green-500">{product.productDiscount}</div>
            </div>
          </div>
          <div className="">
            <button className="flex items-center gap-3 justify-center border rounded-lg border-secondary bg-primary text-secondary p-3 w-full hover:bg-secondary hover:text-primary hover:border-primary">
              View Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
