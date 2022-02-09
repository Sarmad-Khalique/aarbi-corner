import React from 'react'

const CollectionItem = ({id, name, imageUrl, price}) => {
  return (
    <div className='collection-item flex flex-col items-center h-96 border-2 shadow-lg overflow-hidden rounded-md'>
        <div className='image mb-2 w-full h-[95%] overflow-hidden' style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='collection-item-footer w-full h-[5%] flex justify-between items-center mb-2'>
            <span className='collection-item-name font-bold text-xl'>{name.length>50?name.slice(0,50).toUpperCase()+"...":name.toUpperCase()}</span>
            <span className='collection-item-price font-bold text-xl'>${price}</span>
        </div>
    </div>
  )
}

export default CollectionItem