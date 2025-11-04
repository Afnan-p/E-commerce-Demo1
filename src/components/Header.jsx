import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // ensure Bootstrap is imported
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Header = ({setShowCart,setShowWishlist}) => {
    const [showSearch, setShowSearch] = useState(false)
     
  const toggleSearch = (e) => {
   
    setShowSearch(!showSearch)
    // console.log(showSearch,"searchhhh");
    
  }

  return (

  <div className="Header  container-fluid py-3 ">
     <nav className="navbar navbar-expand-lg navbar-light bg-light  d-flex align-items-center justify-content-between border-bottom"> 
        {/* logo>>>>>> */}
        <div className="Header-logo  d-flex flex-column">
          <h1 style={{ color: '#8B3030', margin: 0 }}>Kiddy</h1>  
          <h6 style={{marginLeft:"10px"}}>DRESSES</h6>
        </div>



<button className='navbar-toggler'
type='button'
 data-bs-toggle="collapse"
  data-bs-target="#navbarContent" 
   aria-controls="navbarContent"
   aria-expanded="false"
   aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>

</button>

        

        {/* Icon Section>>>>>>>>> */}
        <div className=" Header-icon  d-flex" style={{ gap: '50px' }} id="navbarContent">
   {showSearch && (
           <form className="d-flex gap-4 "  >
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button className="Header-search-btn btn btn-outline-secondary" type="submit">
                Search
              </button>
       </form>
   )}
   <button onClick={toggleSearch} className="Header-search-btn  " type="button">
    
    <i className="Header-icon fa-solid fa-magnifying-glass fa-xl "></i></button>
         <i className="Header-icon mt-4 fa-solid fa-cart-shopping fa-xl" onClick={()=>setShowCart(true)}></i>
         <i className="Header-icon  mt-4 fa-regular fa-bell  fa-xl"></i>
         <i className="Header-icon mt-4 fa-regular fa-heart fa-xl"onClick={()=>setShowWishlist(true)}></i>
         <i className="Header-icon mt-4 fa-regular fa-user  fa-xl"></i>
        </div>
     
      </nav>

      <div className='Header-Category d-flex justify-content-center gap-5  border-bottom  container-fluid py-3'>
        
           <div className="BABIES">
  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
   BABIES
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">T-SHIRT</a></li>
    <li><a className="dropdown-item" href="#">SHIRT</a></li>
    <li><a className="dropdown-item" href="#">PANT</a></li>
    <li><a className="dropdown-item" href="#">TROUSER</a></li>
  </ul>
</div>
           <div className="BOYS">
  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
   BOYS
  </button>
  <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">T-SHIRT</a></li>
    <li><a className="dropdown-item" href="#">SHIRT</a></li>
    <li><a className="dropdown-item" href="#">PANT</a></li>
    <li><a className="dropdown-item" href="#">TROUSER</a></li>
  </ul>
</div>
           <div className="GIRLS">
  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
   GIRLS
  </button>
  <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">T-SHIRT</a></li>
    <li><a className="dropdown-item" href="#">SHIRT</a></li>
    <li><a className="dropdown-item" href="#">PANT</a></li>
    <li><a className="dropdown-item" href="#">TROUSER</a></li>
  </ul>
</div>   
      </div>
    </div>
   
  )
}
