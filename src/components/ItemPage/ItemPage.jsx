import React, { useState, useContext } from 'react';
import './ItemPage.scss';
import products from '../data/products.json';
import { useParams } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
// import Product from '../Product/Product';
import { connect } from 'react-redux';
import { addToBasket } from '../../actions';
import FirebaseContext from '../Firebase/context';

const IMAGE_STATE = {
  J: 'J',
  K: 'K',
  L: 'L',
  M: 'M',
};

const ItemPage = (props) => {
  const { id } = useParams();
  const authUser = JSON.parse(localStorage.getItem('authUser'));
  const firebase = useContext(FirebaseContext);
  const [thumbState, setThumbState] = useState({ thumbState: IMAGE_STATE.J });

  const changeImage = (imageId) => {
    imageId === 'J'
      ? setThumbState({ ...thumbState, thumbState: IMAGE_STATE.J })
      : imageId === 'K'
      ? setThumbState({ ...thumbState, thumbState: IMAGE_STATE.K })
      : imageId === 'L'
      ? setThumbState({ ...thumbState, thumbState: IMAGE_STATE.L })
      : setThumbState({ ...thumbState, thumbState: IMAGE_STATE.M });
  };

  // const [errorMessage, setErrorMessage] = useState('');

  const addToFirebase = (value) => {
    // console.log(value);

    if (authUser) {
      firebase.user(authUser.uid + '_cart').set({
        cartItem: value,

        roles: {},
      });
    }
  };

  const [itemQuantity, setItemQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (itemQuantity > 2) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const increaseQuantity = () => {
    setItemQuantity(itemQuantity + 1);
  };

  // let [cart, setCart] = useState([]);

  // let localCart = localStorage.getItem('cart');

  const addItem = (item) => {
    props.addToBasket(item);
    addToFirebase(props.cart);
    // const {cart} = props
    // let cartCopy = [...cart];

    // // //assuming we have an ID field in our item
    // let { productId } = item;
    // let { productSize } = item;

    //look for item in cart array
    // let existingItem = cartCopy.find(
    //   (cartItem) =>
    //     cartItem.productId === Number(productId) &&
    //     cartItem.productSize === productSize
    // );

    // //if item already exists
    // if (existingItem) {
    //   existingItem.productQuantity += item.productQuantity; //update item
    // } else {
    //   //if item doesn't exist, simply add it
    //   cartCopy.push(item);
    //   console.log('new item added');
    // }

    //update app state
    // setCart(cartCopy);

    // console.log(cartCopy);

    //make cart a string and store in local space
    // let stringCart = JSON.stringify(cartCopy);
    // localStorage.setItem('cart', stringCart);
  };

  // useEffect(() => {
  //   localCart = JSON.parse(localCart);
  //   if (localCart) {
  //     setCart(localCart);
  //     addToBasket(localCart);
  //   }
  // }, []);

  let currentProduct = {
    productId: '',
    productName: '',
    productImage: '',
    productSize: '',
    productDescription: '',
    productQuantity: '',
    productPrice: '',
  };

  const selectSize = (size) => {
    currentProduct.productSize = size;
  };

  const filteredProduct = products.filter((product) => {
    return product.id === Number(id);
  });

  // const addToCart = (product) => {
  //   let existing = localStorage.getItem('cart');
  //   existing = existing ? existing.split(',') : [];
  //   existing.push(JSON.stringify(product));
  //   localStorage.setItem('cart', existing.toString());
  // };

  // useEffect(() => {
  //   window.localStorage.setItem('cart', JSON.stringify(cart_state));
  // });
  // eslint-disable-next-line
  filteredProduct.map((product) => {
    currentProduct.productId = product.id;
    currentProduct.productName = product.title;
    currentProduct.productImage = product.image;
    currentProduct.productSize = 'M';
    currentProduct.productDescription = product.description;
    currentProduct.productQuantity = itemQuantity;
    currentProduct.productPrice = product.price;
  });

  console.log(thumbState.thumbState);
  return (
    <div className='row' key={currentProduct.productId}>
      <div className='col-sm-4'>
        <div className='row'>
          <div className='col-sm-2 pt-65'>
            <div>
              <img
                className='product-image-thumbnail'
                src={currentProduct.productImage}
                alt={currentProduct.productName}
                onClick={() => changeImage('J')}
              />
            </div>
            <div>
              <img
                className='product-image-thumbnail'
                src={currentProduct.productImage}
                alt={currentProduct.productName}
                onClick={() => changeImage('K')}
              />
            </div>
            <div>
              <img
                className='product-image-thumbnail'
                src={currentProduct.productImage}
                alt={currentProduct.productName}
                onClick={() => changeImage('L')}
              />
            </div>
            <div>
              <img
                className='product-image-thumbnail'
                src={currentProduct.productImage}
                alt={currentProduct.productName}
                onClick={() => changeImage('M')}
              />
            </div>
          </div>
          <div className='col-sm-10'>
            {thumbState.thumbState === IMAGE_STATE.J && (
              <img
                className='product-image'
                src={currentProduct.productImage}
                alt={currentProduct.productName}
              />
            )}
            {thumbState.thumbState === IMAGE_STATE.K && (
              <>
                <img
                  className='product-image'
                  src={currentProduct.productImage}
                  alt={currentProduct.productName}
                />
              </>
            )}
            {thumbState.thumbState === IMAGE_STATE.L && (
              <>
                <img
                  className='product-image'
                  src={currentProduct.productImage}
                  alt={currentProduct.productName}
                />
              </>
            )}
            {thumbState.thumbState === IMAGE_STATE.M && (
              <>
                <img
                  className='product-image'
                  src={currentProduct.productImage}
                  alt={currentProduct.productName}
                />
              </>
            )}
          </div>
        </div>
      </div>
      <div className='col-sm-8 product-description'>
        <h1>{currentProduct.productName}</h1>
        <p className='m-0'>{currentProduct.productDescription}</p>

        <h3 className='mt-5 ml-4'>Sizes</h3>
        <div className='size-list ml-4'>
          <span className='size' id='xs' onClick={selectSize('XS')}>
            XS
          </span>
          <span className='size' id='s' onClick={selectSize('S')}>
            S
          </span>
          <span className='size selected' id='m' onClick={selectSize('M')}>
            M
          </span>
          <span className='size' id='l' onClick={selectSize('L')}>
            L
          </span>
          <span className='size' id='xl' onClick={selectSize('XL')}>
            XL
          </span>
        </div>

        <div className='mt-3 ml-4'>
          <span>Quantity</span>
          <button
            className='increment-decrement ml-3'
            onClick={decreaseQuantity}
          >
            -
          </button>
          <span className='item-count'>{itemQuantity}</span>
          <button className='increment-decrement' onClick={increaseQuantity}>
            +
          </button>
        </div>
        <button className='add-to-cart' onClick={() => addItem(currentProduct)}>
          <FaShoppingCart className='mr-2' />
          Add to Cart
        </button>

        <button className='add-to-cart'>
          <AiFillHeart className='mr-2' />
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cart: state.cartState.cart,
  };
};

const mapDispatchToProps = { addToBasket };

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
