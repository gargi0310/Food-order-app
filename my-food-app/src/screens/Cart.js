import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer'
import trash from './trash.svg'


export default function Cart() {

    let data = useCart();
    let dispatch = useDispatchCart();
    if(data.length === 0){
        return(
            <div>
                <div className='m-5 w-100 text-center fs-3'>The cart is Empty!</div>
            </div>
        )
    }

    // const handleRemove=(index)=>{
    //     console.log(index)
    //     dispatch({type:"REMOVE", index:index})
    // }

    const handleCheckout = async()=>{
        let userEmail = localStorage.getItem("userEmail");

        let response = await fetch("http://localhost:5000/api/auth/OrderData", {
            //credentials:'include'
            // Origin:"http://localhost:3000/login",
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                order_data:data,
                email:userEmail,
                Order_date:new Date().toDateString()
            })
        });


        console.log("Order RESPONSE:", response)
        if(response.status === 200){
            dispatch({type:"DROP"})
        }
    }

    let totalPrice = data.reduce((total, food)=>total+food.price, 0)
  return (
    <div>
        <div className='container m-auto mt-5 table-responsive table-responsive-sm table responsive-md'>
            <table className='table table-hover'>
                <thread className='text-success fs-4'>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Option</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'></th>
                    </tr>
                </thread>

                <tbody>
                {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td ><button type="button" className="btn p-0"><img src={trash} style={{backgroundColor:"white", borderRadius:"2px"}} alt='delete' onClick={()=>{dispatch({type:"REMOVE", index:index}) }} /></button> </td></tr>
            ))}
                </tbody>
            </table>
            
            <div><h1 className='fs-5'>Total Price:{totalPrice}/-</h1></div>
           
           <div>
            <button className='btn bg-success mt-5' onClick={handleCheckout} >Check out</button>
           </div>
        </div>


    </div>
  )
}
