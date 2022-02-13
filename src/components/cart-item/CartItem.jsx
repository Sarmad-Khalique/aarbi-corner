import React from 'react'

const CartItem = ({item: {name, imageUrl, price, quantity}}) => {
  return (
    <div className="cart-item w-full flex h-20 mb-4">
        <img className='w-[30%]' src={imageUrl} alt="item" />
        <div className="item-details w-[70%] flex flex-col items-start justify-center py-2 px-5">
            <span className='name'>{name}</span>
            <span className='price'>{price} x {quantity}</span>
        </div>
    </div>
  )
}

export default CartItem