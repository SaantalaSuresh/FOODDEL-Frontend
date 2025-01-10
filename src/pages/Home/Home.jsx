import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { useDispatch, useSelector } from 'react-redux'
import FoodItem from '../../components/FoodItem/FoodItem'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
    let food_item_list = useSelector(state=>state.foodMenuList)
console.log(food_item_list)
    const [category, setCategory] = useState('All');
    
    if (category === 'All'){
      food_item_list = food_item_list
    }else{
      food_item_list = food_item_list.filter(item => item.category === category)
    }
    
  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <h2  className='food-display-heading'>Top Dishes Near you</h2>
        <div className='food-item-list-container'>
          {food_item_list.map(item=>(
            <FoodItem item={item} />
          ))}
        </div>
        <AppDownload />
    </div>
  )
}

export default Home