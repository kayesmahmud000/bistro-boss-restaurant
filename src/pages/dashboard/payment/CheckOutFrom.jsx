import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckOutFrom = () => {
    const [error , setError]= useState("")
    const [clientSecret, setClientSecret]=useState("")
    const [transaction, setTransaction ]= useState("")
    const stripe= useStripe()
    const elements= useElements()
    const {user}= useAuth()
    const navigate=useNavigate()
const axiosSecure= useAxiosSecure()
   const [cart, refetch ]=useCart()
   const price = cart.reduce((total , item)=>total + item.price ,0)

   useEffect(()=>{
   if(price>0){
    axiosSecure.post("/create-payment-intent", {price: price})
    .then(res=>{
        console.log(res.data.client_secret)
        setClientSecret(res.data.client_secret)
    })
   }
   },[axiosSecure, price])

    const handleSubmit=async e=>{
        e.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card= elements.getElement(CardElement)
        if(card === null){
            return
        }
        const {error, paymentMethod}= await stripe.createPaymentMethod({
            type:"card",
            card
        })
        if(error){
            console.log("payment error", error)
            setError(error.message)
        }else{
            console.log("payment method", paymentMethod)
            setError("")
        }
        // confirm card payment

        const { paymentIntent, error: confirmError}= await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card :card,
                billing_details:{
                    email: user?.email || "anonymous",
                    name:user?.displayName || "anonymous"
                }
            },  
        })
        if(confirmError){
            console.log("confirm error" , confirmError)
        }else{
            console.log("payment intent", paymentIntent)
            if(paymentIntent.status ==="succeeded"){
                console.log("transaction id" , paymentIntent.id)
                setTransaction(paymentIntent.id)

                const payment= {
                    email: user.email,
                    price: price,
                    transactionId: paymentIntent.id,
                    time: new Date(),
                    cartId : cart.map(item=> item._id),
                    menuId: cart.map(item=>item.foodId),
                    status: "pending"

                }

                const res=await axiosSecure.post('/payment', payment)
                console.log("payment save" ,res.data)
                refetch()
                if(res.data.result.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment successful",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/dashboard/paymentHistory')
                }
            }
        }
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
        <button type="submit" className='btn btn-sm my-4 text-xl font-bold bg-[#D1A054] text-white' disabled={!stripe|| !clientSecret}>
        Pay
      </button>
            </form>
            <p className='text-red-500'>{error}</p>
            {transaction && <p className='text-green-500'>Your transaction, {transaction}</p> }
        </div>
    );
};

export default CheckOutFrom;