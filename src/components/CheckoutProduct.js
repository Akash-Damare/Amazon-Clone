import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  image,
  title,
  price,
  description,
  category,
  hasPrime,
  rating,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
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
    console.log(id);

    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    console.log(id);
    dispatch(removeFromBasket({ id }));
  };

  function japnese(x) {
    return x.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });
  }
  function indian(x) {
    return x.toLocaleString("en-IN", { style: "currency", currency: "INR" });
  }
  return (
    <div className="grid grid-cols-5">
      {/* Left  */}
      <Image src={image} width={200} height={200} objectFit="contain" />

      {/* Middle  */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-400 mt-1" />
            ))}
        </div>
        <p className="text-xs line-clamp-3 my-2">{description}</p>
        {indian(price)}
        {hasPrime && (
          <div className="flex items-center space-x-2 ">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt="prime"
            />
            <p className="text-sm text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right  */}
      <div className="flex flex-col space-y-2 ml-10 my-auto ">
        <button onClick={addItemToBasket} className="button">
          Add
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Remove
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
