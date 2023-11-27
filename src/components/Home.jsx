import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1="https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjM5M3xpbWFnZS9qcGVnfGltYWdlcy9oYzcvaDE0Lzk0NDMwODM3ODAxMjYuanBnfGUwMGRjNjBhZDVlM2NlMmUyYmFhMTk1MjNmMDM5NTEzMWUzODRhODE0ZjdmOWM2OGEyODBjYjhjMGNlOWExZWY";
const img2="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTLlokMRDLIGxb_HtKpSxqsTgTHj1EYvYaD1g8Gcgr5lj8w5EWbnUk_IlOqN6tgPa-NwAdSUCFzUQow5lYWxurzeJFrTfsKFtmxaQOm_4DEHhNNVob7OEwYp0NHKqh4-pIx8o0WEe-r12E&usqp=CAc";
const img3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoXEEUkHp4Y3tRke237DccQoFTs4slk4JbA&usqp=CAU";
const Home = () => {
    const productList=[
        {
            name:"Mac Book",price:12000,imgSrc:img1,id:"sdfsdfsdf",}
        ,{name:"Black Shoes",
        price:490,
        imgSrc:img2,
        id:"sdfrfdd",
        },
    {
        name:"iphone",
        price:1000,
        imgSrc:img3,
        id:"kfok",
    }];

        const dispatch=useDispatch();

    const addToCartHandler=(options)=>{
        console.log(options);
        dispatch({type:"addToCart",payload:options})
        dispatch({type:"calculatePrice"});
        toast.success("Added to cart");
        
    }
  return (
    <div className='home'>
        {productList.map(i=>(
            <ProductCard key={i.id} imgSrc={i.imgSrc} price={i.price} name={i.name} id={i.id} handler={addToCartHandler}  />
        ))}
    </div>
  )
  };
const ProductCard=({name,id,price,handler,imgSrc})=>(
<div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>Add to Cart</button>
</div>
)

export default Home