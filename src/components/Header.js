import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";

function Header() {
  const [session] = useSession();
  return (
    <header>
      {/* Top Header section */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="m-2 pt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search  */}
        <div className="hidden bg-yellow-400 hover:bg-yellow-500 sm:flex items-center h-10 rounded-md cursor-pointer flex-grow">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right hand side section  */}
        <div
          onClick={!session ? signIn : signOut}
          className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap"
        >
          <div className="link">
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            {/* <p>Hello,Milind</p> */}
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <div className="absolute bg-yellow-400 right-0 md:right-10 top-0 h-4 w-4 text-center rounded-full">
              0
            </div>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom Header section */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white">
        <p className="flex">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Todays Deals</p>
        <p className="link hidden lg:inline-flex">Elecotronics</p>
        <p className="link hidden lg:inline-flex">Food</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Tookit</p>
        <p className="link hidden lg:inline-flex">Health & Personal</p>
      </div>
    </header>
  );
}

export default Header;
