import Image from "next/image";
import Link from "next/link";
import React from "react";

interface categoryProps {
  id: number;
  name: String;
  url: String;
}

const CategoryItem = ({ id,name,url } : categoryProps) => {
  const nameLink : String = name?.replace(/\s/g,'').toLowerCase() ;
  return (
    <div>
      <Link href={`/store/${nameLink}`} className="flex flex-col gap-4">
        <Image
          className=" rounded-lg w-28"
          src={url}
          alt="category_photo"
          width={96}
          height={96}
        />
        <h2 className="text-lg font-bold">{name}</h2>
      </Link>
    </div>
  );
};

export default CategoryItem;
