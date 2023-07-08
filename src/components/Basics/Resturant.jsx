import React, { useState } from 'react'
import './Resturant.css'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList =[ ...new Set(Menu.map((curenntElem)=>{
    return curenntElem.category
})
),'All',
]

  
export default function Resturant() {
    const [menuData,setMenuData] = useState(Menu)
    const [menuList,setMenuList] = useState(uniqueList)


    const filterItems = (category)=>{
        if(category === 'All'){
            setMenuData(Menu)
            return;
    }
        let Updatalist  = Menu.filter((current)=>{
            return current.category == category;
        })
        setMenuData(Updatalist)
    }
  return (
    <>
    <Navbar filterItems={filterItems}  menuList={menuList} />
     <MenuCard menuData={menuData} />
    </>
  )
  }