import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, image, title, price, description, category }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const dispatch = useDispatch();

  const [hasPrime] = useState(Math.random() > 0.1);

  function japnese(x) {
    return x.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });
  }
  function indian(x) {
    return x.toLocaleString("en-IN", { style: "currency", currency: "INR" });
  }

  const addItemToBasket = () => {
    console.log(id);
    const product = {
      id,
      image,
      title,
      price,
      description,
      category,
      hasPrime,
      rating,
    };

    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-10 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-400" />
          ))}
      </div>

      <p className="my-2 text-xs line-clamp-2">{description}</p>
      <div className="mb-5">
        {indian(price)}
        {/* <Currency quantity={price * 70} currency="INR" /> */}
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt="prime"
          />
          <p className="text-sm text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="button">
        Add to Basket
        {console.log(hasPrime)}
      </button>
    </div>
  );
}

export default Product;
