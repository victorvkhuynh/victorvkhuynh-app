/* eslint-disable react/jsx-no-undef */
import CoffeeShop from "../../assets/coffee-shop.jpg";
import Image from "next/image";

export default function RestaurantOne() {
  return (
    <>
      <div className="absolute left-0 top-0 -z-10 h-dvh w-full">
        {/* <div className="relative z-0 col-span-4 h-dvh bg-contrast bg-cover opacity-40"> */}
        <Image fill src={CoffeeShop} alt="Coffee Shop" />
        {/* max-w-xs */}
      </div>
      {/* <div className="bg-black h-full w-full overflow-hidden bg-fixed opacity-50"> */}
      <div className="z-10 mx-11 mt-4 grid border-spacing-2 grid-cols-4 gap-4 overflow-hidden">
        <div className="col-span-1 h-96 w-full overflow-hidden bg-accent bg-fixed opacity-80">
          <p className="text-light">Example card</p>
        </div>
        <div className="col-span-2 h-96 w-full overflow-hidden bg-accent bg-fixed opacity-80">
          <p className="text-light">
            Welcome! This is where you would write about your company and any
            feelings of emotion you want to convey to your customers.
            <br />
            <br />
            We are proud to serve you and your family
            <br />
            <br />
            We are hiring
          </p>
        </div>
        <div className="col-span-1 h-96 w-full overflow-hidden bg-accent bg-fixed opacity-80">
          <p className="text-light">Example card</p>
        </div>
        <div className="col-span-2 h-96 w-full overflow-hidden bg-accent bg-fixed opacity-80">
          <p className="text-light">Example card</p>
        </div>
        <div className="col-span-2 h-96 w-full overflow-hidden bg-accent bg-fixed opacity-80">
          <p className="text-light">Example card</p>
        </div>
      </div>
    </>
  );
}

/**
 * Address, Phone Number, Hours
 * Multiple Locations
 * Google My Business: https://www.google.com/intl/en_ca/business/
 * Ordering Information (i.e. SkipTheDishes, UberEats, DoorDash, etc.)
 * Social Media
 * Deals/Specials
 * Menu - Pictures, Prices, Descriptions
 * Make sure it's not a PDF/Im age but a webpage
 * Loyalty Program?
 * E-mail Marketing? Deals?
 * Languages?
 */
