import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id="explore-menu">
        <h2>Explore our menu</h2>
        <p>Discover a world of flavors in our carefully curated menu, crafted to delight every palate. Explore now and savor the perfect bite!</p>
        <div className='explore-menu-list'>
            {menu_list.map((each,index)=>(
                <div className='explore-menu-list-item' key={index} onClick={()=>setCategory(prev=>prev===each.menu_name ? 'All':each.menu_name)}>
                    <img src={each.menu_image} alt="" className={category===each.menu_name ? "active": ''}/>
                    <p>{each.menu_name}</p>
                </div>
            ))}

        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu