// import React from 'react'
// import './SearchList.css'
// export const SearchList = ({searchList,setSearchList}) => {

//     // console.log(searchList,"seaarch");
    
//   return (
//     <div className='Search-page' >
//             <div className='container-fluid'>
//                 <div className='row'>
//                 <div>SearchList</div>
//                 {searchList.map((products)=>(
//                      <div className='col-md-3 col-sm-6 mb-3'key={products.id}>
//             <div className='card  text-center '>
                
//               <img className='cardimage p-3' src={products.image} alt="" style={{ height: '200px', objectFit: 'contain' }} />
              
//                  <div className="card-body mb-2">                 
//                   <h5 className="card-title">{products.title.slice(0, 20)}...</h5>
//                     <p className='product-description'>{products.description.slice(0, 30)}...</p>
//                 <p className="card-text text-muted">{products.category}</p>
//                 <h6>Rs {products.price * 20}/-</h6>

//                 <div className='rating-stars'>
//                   {Array.from({length:5}).map((v,i)=>(
//                     <i key={i} className="fa-solid fa-star text-warning mx-1"></i>
//                   ))}
//                 </div>
//                  <button className="btn btn-danger w-100 mt-2 " onClick={() => handleAddToCart(products.id)}>

//                         <i className=" fa-solid fa-cart-shopping fa-xl"></i> Add to Cart
//                       </button>
//                 </div>
//                 </div>
//                 </div>
// ))}
                
//             </div>
//         </div>
//         </div>
//   )
// }
