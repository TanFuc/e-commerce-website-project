// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Category2 from "../Category/Category2";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import headphone from "/src/assets/hero/headphone.png";
import Products from "../Products/Products";
import smartwatch2 from "/src/assets/category/smartwatch2-removebg-preview.png";
import Blogs from "../Blogs/Blogs";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import LoginPopup from "../Login/LoginPopup";
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

const Home = () => {
  const [orderLoginPopup, setLoginPopup] = React.useState(false);
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleLoginPopup = () => {
    setLoginPopup(!orderLoginPopup);
  };

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
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Hero handleOrderPopup={handleOrderPopup} />

      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      {/* <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      <LoginPopup
        orderLoginPopup={orderLoginPopup}
        handleLoginPopup={handleLoginPopup}
      /> */}
    </div>
  );
};
export default Home;
