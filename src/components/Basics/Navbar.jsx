import React from 'react'

export default function Navbar({filterItems,menuList}) {
  return (
    <>
       <nav className="navbar">
        <div className="btn-group">


         {
            menuList.map((current)=>{
                return (<button className="btn-group__item" onClick={()=>filterItems(current)} >{current}</button>)
            })
         }
        </div>
    </nav> 
    </>
  )
}
