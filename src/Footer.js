import React from "react";

const Footer = () => {
  function topfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <div className="flex  text-white items-center justify-center  cursorpoinet h-10 bg-slate-500">
        <h2 onClick={topfunction} className="font-semibold cursor-pointer">
          Back to top
        </h2>
      </div>
      <div className="grid grid-cols-3 max-md:text-xs  pt-4 gap-2  grid-rows-1 place-items-center max-sm:place-content-between  ">
        <div>
          <h2 className="font-semibold">Get to Know Us</h2>
          <ul className="text-sm">
            <li>Careers</li>
            <li>About Shopify</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Make $ with us</h2>
          <ul className="text-sm">
            <li>Sell products</li>
            <li>Sell apps</li>
            <li>run ads</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Let Us Help You</h2>
          <ul className="text-sm">
            <li>Your Account</li>
            <li>Shipping Rates</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 max-md:text-sm">
        © 2021-2022, Shopify.com, Inc. or its affiliates
      </div>
    </div>
  );
};

export default Footer;
