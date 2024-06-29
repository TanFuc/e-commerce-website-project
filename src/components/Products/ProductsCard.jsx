// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Button from "/src/components/Shared/Button.jsx";

const ProductsCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((data) => (
          <div data-aos="fade-up"
          data-aos-delay={data.aosDelay} className="group" key={data.id}>
            <div  className="relative">
              <img
                src={data.img}
                alt={data.title}
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full text-center backdrop-blur-sm  justify-center items-center duration-200">
                <Button text={"Add to cart"} bgColor={"bg-primary"} textColor={"text-white"} />
              </div>
            </div>
            <div className="leading-7 mt-2 text-center">
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">${data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductsCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      aosDelay: PropTypes.string,
    })
  ).isRequired,
};

export default ProductsCard;
