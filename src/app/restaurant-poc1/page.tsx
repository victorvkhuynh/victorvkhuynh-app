/* eslint-disable react/jsx-no-undef */
import CoffeeShop from "../../assets/coffee-shop.jpg";
import Image from "next/image";

export default function RestaurantOne() {
  return (
    <>
      <div className="mx-11 mt-4 grid border-spacing-2 grid-cols-4 gap-4 overflow-hidden">
        <div className="col-span-1">1</div>
        <div className="relative col-span-2 h-96 bg-contrast">
          <Image src={CoffeeShop} alt="Coffee Shop" fill />
        </div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
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
