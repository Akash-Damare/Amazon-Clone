import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Header from "../components/Header";

function Success() {
  const router = useRouter();
  return (
    <div>
      <div className="bg-gray-100 h-screen">
        <Header />

        <main className="max-w-screen-lg mx-auto">
          <div className="flex flex-col p-10 bg-white">
            <div className="flex items-center space-x-2 mb-5">
              <CheckCircleIcon className="text-green-500 h-10" />
              <h1 className="text-3xl">
                Thank you, Your order has been confirmed.
              </h1>
            </div>
            <p>
              Thank you for shopping with us. We'll send a confirmation once
              your item has been shipped. If you would like to check the status
              of order(s) Please press the line below.
            </p>
            <button
              className="button mt-8"
              onClick={() => router.push("/Orders")}
            >
              Go to my orders
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Success;
