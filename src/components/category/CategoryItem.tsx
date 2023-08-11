import Image from 'next/image'
import React from 'react'

interface categoryProps{
    id:number,
    name:String,
    url:String
}


const CategoryItem : React.FC<categoryProps> = ({category}) => {

    const {id,name,url} = category;
  return (
    <div>
        <Image className=' rounded-full ' src={url} alt='category_photo' width={80} height={96}/>
        <h2>{name}</h2>
    </div>
  )
}

export default CategoryItem