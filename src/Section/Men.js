// import React,{useContext, useState,useEffect} from 'react';
// import Category from '../Components/Category';
// import Banner from '../Components/Banner';
// import { productData } from '../Assets/productData';
// import { Link } from 'react-router-dom';
// import './Sections.css';
// import MyContext from '../Components/MyContext';
// import Navbar from '../Components/Navbar';

// function Men() {
//   const{loggedIn,setLoggedIn,loggedInMsg,setLoggedInMsg,cartItems,setCartItems,login,setLogin} = useContext(MyContext)
  

//   const [selectedSize, setSelectedSize] = useState(null);

//   const[categoryTitle,setCategoryTitle] = useState('')


//   useEffect(()=>{
//     const resetMessage = setTimeout(()=>{
//       setLoggedInMsg('')
//     },3000)
//     return clearTimeout(resetMessage)
//   },[loggedInMsg])


//   const menProducts = productData.filter(
//     (item) => item.gen === 'men' && (!selectedSize || item.size === selectedSize)
//   );

//   const handleSizeClick = (size) => {
//     setSelectedSize(size === selectedSize ? null : size);
//   };
//   const handleAddToCart = (item) => {
//     // Check if the item is already in the cart
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
//     if (existingItem) {

//       setCartItems((prevCartItems) =>
//         prevCartItems.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         )
//       );
//     } else {
   
//       setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
//     }
//   };
     
  
//   return (
//     <>
//     <Navbar/>
//     <Banner/>
//      <div className='men-container'>
//      <Category onSizeClick={handleSizeClick} selectedSize={selectedSize} categoryTitle='Mens' />
//       <Link to='/productdetail' className='section-right'>
//         {menProducts.map((item, i) => (
//           <div key={i} className='item'>
//             <p className='section-name'>{item.name}</p>
//             <img className='section-img' src={item.img} alt={item.name} />
//             <h6 className='section-size'>Size {item.size}</h6>
//            <span className='price-sec'>
//             <h5> {item.oldPrice}</h5><h2>{item.price}</h2>
            
//             </span> 
//             {/* <h4 className='section-price'> {item.price}</h4> */}
//             <button
//               className='section-btn'
//               onClick={() => handleAddToCart(item)}
//             >
//               Add to Cart
//             </button>
         

//           </div>
//         ))}
//       </Link>
//     </div>
//     </>
   
//   );
// }

// export default Men;

import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Category from '../Components/Category';
import Banner from '../Components/Banner';
import { productData } from '../Assets/productData';
import './Sections.css';
import MyContext from '../Components/MyContext';
import Navbar from '../Components/Navbar';

function Men() {
  const {
    loggedIn,
    setLoggedIn,
    loggedInMsg,
    setLoggedInMsg,
    cartItems,
    setCartItems,
    login,
    setLogin,
    setProductDetail, // Import setProductDetail from MyContext
  } = useContext(MyContext);

  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const resetMessage = setTimeout(() => {
      setLoggedInMsg('');
    }, 3000);
    return clearTimeout(resetMessage);
  }, [loggedInMsg]);

  const menProducts = productData.filter(
    (item) => item.gen === 'men' && (!selectedSize || item.size === selectedSize)
  );

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const handleAddToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleItemClick = (item) => {
    // Set the clicked item details to ProductDetail
    setProductDetail([item]);
  };

  return (
    <>
      <Navbar />
      <Banner />
      <div className='men-container'>
        <Category onSizeClick={handleSizeClick} selectedSize={selectedSize} categoryTitle='Mens' />
        <div className='section-right'>
          {menProducts.map((item, i) => (
            <div className='item'>
              {/* Wrap each item with Link and set an onClick handler */}
              <p className='section-name'>{item.name}</p>
              

              <Link  key={i}  onClick={() => handleItemClick(item)} to='/productdetail'><img className='section-img' src={item.img} alt={item.name} /></Link>
              <h6 className='section-size'>Size {item.size}</h6>
              
              <span className='price-sec'>
                <h5> {item.oldPrice}</h5>
                <h2>{item.price}</h2>
              </span>
              
              <button className='section-btn' onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
              </div>
            
          ))}
        </div>
      </div>
    </>
  );
}

export default Men;
