import Image from "next/image";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { selectItems, selectPrice } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/client";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(process.env.stripe_public_key);

function CheckOut() {
  const items = useSelector(selectItems);
  const [session] = useSession();
  const total = useSelector(selectPrice);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // call the backend function to create checkout session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      email: session.user.email,
      items: items,
    });

    //Redirect customer/user to stripce checkout site
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  function indian(x) {
    return x.toLocaleString("en-IN", { style: "currency", currency: "INR" });
  }

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left  */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="p-10 flex flex-col space-y-10 bg-white">
            <h1 className="text-4xl border-b pb-4">
              {items ? "Your Shopping Cart 🛒" : "Your Cart Is Empty 😟"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                hasPrime={item.hasPrime}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Right  */}
        <div className="flex flex-col bg-white p-10">
          {items.length && (
            <>
              <h1 className="whitespace-nowrap">
                Subtotal ({items.length} items) :
                <span className="font-bold"> {indian(total)}</span>
              </h1>

              <button
                role="link"
                disabled={!session}
                onClick={createCheckoutSession}
                className={`button mt-2 ${
                  !session &&
                  `from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed`
                }`}
              >
                {!session ? "sign in to checkout" : "Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default CheckOut;
