// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import headphone from "/src/assets/hero/headphone.png";
import Products from "./components/Products/Products";
import smartwatch2 from "/src/assets/category/smartwatch2-removebg-preview.png";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import LoginPopup from "./components/Login/LoginPopup";
import MiniCart from "./components/MiniCart/MiniCart";
import Cart from "./components/Cart/Cart";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae itaque numquam possimus sed quos odit exercitationem asperiores accusamus tempora iusto, quidem soluta nesciunt.",
  bgColor: "#f42c37",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae itaque numquam possimus sed quos odit exercitationem asperiores accusamus tempora iusto, quidem soluta nesciunt.",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [orderLoginPopup, setLoginPopup] = React.useState(false);
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleLoginPopup = () => {
    setLoginPopup(!orderLoginPopup);
  };
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
  });

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
  });

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      {/* <MiniCart /> */}
      <Navbar
        handleOrderPopup={handleOrderPopup}
        handleLoginPopup={handleLoginPopup}
      />

      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      <LoginPopup
        orderLoginPopup={orderLoginPopup}
        handleLoginPopup={handleLoginPopup}
      />

      {/* <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
     
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      <LoginPopup
        orderLoginPopup={orderLoginPopup}
        handleLoginPopup={handleLoginPopup}
      />
      */}

      <Footer />
    </div>
  );
};

export default App;
