import React from 'react'
import { foods } from '../../../../constants/food'
import Image from 'next/image'
import Link from 'next/link'

const Category = () => {
  return (
    <div className='my-44 grid grid-cols-4 px-48 gap-16'>
      {
        foods?.map(food=>(
          <Link href={`/products/${food?.id}`} key={food?.id} className='w-72 flex flex-col gap-4  p-4' >
            <div>
              <Image alt={food?.title} src={food?.img} width={64} height={64} className='w-64 object-cover h-64 rounded-md' priority />
            </div>
            <div className='flex flex-col gap-1'>
              <h2 className=' text-2xl font-bold'>{food?.title}</h2>
              <p className='text-sm'>{food?.description?.slice(0,60)}...</p>
              <p className=' font-bold text-lg'>Price - ${food?.price}</p>
              <button className='bg-green-800 px-2 py-1 rounded-sm text-white my-1'>Add to Cart</button>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Category