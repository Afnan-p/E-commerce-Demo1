import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import Prodect from '../components/Prodect'
import Cart from '../components/Cart';
import { Wishlist } from '../components/Wishlist';
import toast, { Toaster } from 'react-hot-toast';


// import Cart from '../components/Cart'

function Home() {
   const [data, setData] = useState([]);
  //  const [liked, setLiked] = useState(false);  
   const [cartItems,  setCartItems] = useState([]);  
   const[showCart,setShowCart]=useState(false)
   const[wishlist,setWishlist]=useState([])
   const [showWishlist,setShowWishlist]=useState(false)
   const [likedList, setLikedList] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(res => res.json())
      .then(json => setData(json))
         // .catch(err => console.log('Error fetching data:', err));
  }, []);
  // console.log(data,"dataaaaa");

  function handleAddToCart(id) {
    const result=data.find((value)=>value.id === id)
     const exist=cartItems.some((item)=>item.id===id)
  // console.log(cartItems,"TEEMP"); 

 if(!exist){
  const list=[...cartItems,result] 
  setCartItems(list)
 }else{
  alert("This item is already in your Cart!")
 }

    toast.success('Successfully Added!')
  
  
  }
function hundlewishlist(id) {
 const result=data.find((value)=>value.id === id)
 const exist=wishlist.some((item)=>item.id===id)

 if(!exist){
  const list=[...wishlist,result] 
  setWishlist(list)
 }else{
  alert("This item is already in your wishlist!")
 }
 
  // if (exists) {
  //   // remove from wishlist if already liked
  //   const updatedWishlist = wishlist.filter((item) => item.id !== id)
  //   setWishlist(updatedWishlist)
  // } else {
  //   setWishlist([...wishlist, result])
  // }
 
  // console.log(list,"erthjkl");
 // Toggle liked status
  if (likedList.includes(id)) {
    setLikedList(likedList.filter((itemId) => itemId !== id)); // remove if already liked
  } else {
    setLikedList([...likedList, id]); // add if not liked
  }

}
  


  
  return (
    <>
    <div className='All-home'>

     
    <Header setShowCart={setShowCart} setShowWishlist={setShowWishlist} data={data}/>
    <Prodect/>
    {showCart&&<Cart setShowCart={setShowCart} cartItems={cartItems} setCartItems={setCartItems}/>}
{showWishlist&& <Wishlist wishlist={wishlist} setShowWishlist={setShowWishlist} setWishlist={setWishlist}/>}


<div className='Categories d-flex 'style={{ gap: '100px' }}>
<div className='Categories-h2'><h2 style={{fontSize:'60px'}}>Our Top Categories</h2></div>
<div style={{fontSize:'25px'}}>Sorted By:  <button className='sort-btn '>All Category</button></div>
  </div>


  
  <div className='product-list' style={{position:'relative',width:'auto'}}>
    <div className="container-fluid mt-4">
      <div className="row">
        {data.map((product) => (
          <div className='col-md-3 col-sm-6 mb-3'key={product.id}>
            <div className='card  text-center '>

              <div className='Like-heart' style={{position:'absolute',right:'2px'}}>
                <button className='Like-icon-btn mt-3' onClick={()=>hundlewishlist(product.id)}>
                  <i
    className={`fa-heart ${likedList.includes(product.id) ? 'fa-solid fa-2xl' : 'fa-regular fa-2xl'}`}
    style={{ color: likedList.includes(product.id) ? 'red' : 'black' }}
  ></i>
                  </button>

              </div>
                {/* <div className="text-center mt-3">
      <i
        className={`fa-solid fa-heart fa-2x`}
        style={{ color: liked ? 'red' : 'gray', cursor: 'pointer', transition: '0.3s' }}
        onClick={() => setLiked(!liked)}
      ></i>
    </div> */}


              <img className='cardimage p-3' src={product.image} alt="" style={{ height: '200px', objectFit: 'contain' }} />
              
                 <div className="card-body mb-2">                 
                  <h5 className="card-title">{product.title.slice(0, 20)}...</h5>
                    <p className='product-description'>{product.description.slice(0, 30)}...</p>
                <p className="card-text text-muted">{product.category}</p>
                <h6>Rs {product.price * 20}/-</h6>

                <div className='rating-stars'>
                  {Array.from({length:5}).map((v,i)=>(
                    <i key={i} className="fa-solid fa-star text-warning mx-1"></i>
                  ))}
                </div>
        

                 <button className="btn btn-danger w-100 mt-2 " onClick={()=>handleAddToCart(product.id)}>
  
                  <i className=" fa-solid fa-cart-shopping fa-xl"></i> Add to Cart
                  </button>
             </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  {/* <Cart  cartItems={cartItems} setCartItems={setCartItems}/> */}
</div>
</div>
<Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>
  )
}

export default Home


