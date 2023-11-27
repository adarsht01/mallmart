import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';

const img1="https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjM5M3xpbWFnZS9qcGVnfGltYWdlcy9oYzcvaDE0Lzk0NDMwODM3ODAxMjYuanBnfGUwMGRjNjBhZDVlM2NlMmUyYmFhMTk1MjNmMDM5NTEzMWUzODRhODE0ZjdmOWM2OGEyODBjYjhjMGNlOWExZWY";
const img2="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTLlokMRDLIGxb_HtKpSxqsTgTHj1EYvYaD1g8Gcgr5lj8w5EWbnUk_IlOqN6tgPa-NwAdSUCFzUQow5lYWxurzeJFrTfsKFtmxaQOm_4DEHhNNVob7OEwYp0NHKqh4-pIx8o0WEe-r12E&usqp=CAc";

const Cart = () => {

    const {cartItems,subTotal,tax,shipping,total} =useSelector(state=>state.cart)
    const dispatch=useDispatch();
    const increment=(id)=>{
        dispatch({
            type:"addToCart",
            payload:{id},
        })
        dispatch({type:"calculatePrice"});

    }
    const decrement=(id)=>{
        dispatch({
            type:"decrement",
            payload:id,
        })
        dispatch({type:"calculatePrice"});
    }
    const deleteHandler=(id)=>{
        dispatch({
            type:"deleteFromCart",
            payload:id,
        })
        dispatch({type:"calculatePrice"});

    }
  return (
    <div className='cart'>
        <main>
        {
            cartItems.length>0?(cartItems.map(i=>(
                <CartItem
                imgSrc={i.imgSrc}
                name={i.name}
                price={i.price}
                qty={i.quantity}
                id={i.id}
                key={i.id} 
                decrement={decrement}
                increment={increment}
                deleteHandler={deleteHandler}
                />
            ))):<h1>cart is empty</h1>
        }
        </main>
        <aside>
            <h2>Subtotal: ${subTotal}</h2>
            <h2>Shipping: ${shipping}</h2>
            <h2>Tax: ${tax}</h2>
            <h2>Total: ${total}</h2>
        </aside>
    </div>
  )
}

const CartItem=({imgSrc,name,price,qty,decrement,increment,deleteHandler,id,})=>(
    <div className="cartItem">
        <img src={imgSrc} alt="Item" />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>
        <div>
            <button onClick={()=>decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=>increment(id)}>+</button>
            <AiFillDelete onClick={()=>deleteHandler(id)}/>
        </div>
    </div>
)

export default Cart