// eslint-disable-next-line no-unused-vars
import React from 'react';
import Heading from '../Shared/Heading';
import ProductsCard from './ProductsCard';
// images import
import Img1 from '/src/assets/product/p-1.jpg';
import Img2 from '/src/assets/product/p-2.jpg';
import Img3 from '/src/assets/product/p-3.jpg';
import Img4 from '/src/assets/product/p-4.jpg';
import Img5 from '/src/assets/product/p-5.jpg';
import Img7 from '/src/assets/product/p-7.jpg';
import Img8 from '/src/assets/product/p-1.jpg';
import Img9 from '/src/assets/product/p-9.jpg';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: 'Boat Headphone',
    price: 120,
    aosDelay: '0',
  },
  {
    id: 2,
    img: Img2,
    title: 'Rocky Mountain',
    price: 420,
    aosDelay: '200',
  },
  {
    id: 3,
    img: Img3,
    title: 'Goggles',
    price: 320,
    aosDelay: '400',
  },
  {
    id: 4,
    img: Img4,
    title: 'Printed Shirt',
    price: 220,
    aosDelay: '600',
  },

];
const ProductsData2 =[
  {
    id: 5,
    img: Img5,
    title: 'Leo',
    price: 220,
    aosDelay: '600',
  },
  {
    id: 7,
    img: Img7,
    title: 'Printed Hat',
    price: 220,
    aosDelay: '600',
  },
  {
    id: 8,
    img: Img8,
    title: 'Printed Mug',
    price: 220,
    aosDelay: '600',
  },
  {
    id: 9,
    img: Img9,
    title: 'Printed Bag',
    price: 220,
    aosDelay: '600',
  },
]

const Products = () => {
  const title = 'Our Products';
  const subtitle = 'Check out our latest products';

  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title={title} subtitle={subtitle} />
        {/* Body section */}
        <ProductsCard data={ProductsData} />
        <ProductsCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
