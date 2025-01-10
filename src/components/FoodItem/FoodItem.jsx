import React, { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets';
import "./FoodItem.css"
import { prepareAutoBatched } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/CartSlice';


const FoodItem = ({item}) => {
    

    const {id,name,image,description,category,price} = item;
    const [counter,setCounter] = useState(0)
    const dispatch = useDispatch()
    const food_list = useSelector(state=>state.CartItems)
    console.log(food_list)
  return (
    <div className='food-item'>
        <div className='food-item-image-container'>
            <img src={image} alt="" className="food-item-image" />
           {!food_list.some(each=>each._id===item._id) ? <img src={assets.add_icon_white} onClick={()=>dispatch(addToCart(item))} className='add-icon'/>:<div className='add-icon-container'>
            <img src={assets.remove_icon_red} onClick={()=>dispatch(removeFromCart(item))}/>
            <p>{!food_list.some(each=>each._id===item._id) ? 0 : food_list[food_list.findIndex(each => each._id === item._id)].quantity}</p>
            <img src={assets.add_icon_green} alt="" onClick={()=>dispatch(addToCart(item))}/>

            </div>}
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt=""/>
            </div>
            <p className='food-item-description'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>

    </div>
  )
}

export default FoodItem