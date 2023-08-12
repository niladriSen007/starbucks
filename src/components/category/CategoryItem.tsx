import Image from "next/image";
import Link from "next/link";
import React from "react";

interface categoryProps {
  id: number;
  name: String;
  url: String;
}

const CategoryItem = ({ catItems }) => {
  const { id, name, url } = catItems;
  const nameLink = name.replace(/\s/g,'').toLowerCase() ;
  return (
    <div>
      <Link href={`/menu/${nameLink}`}>
        <Image
          className=" rounded-lg"
          src={url}
          alt="category_photo"
          width={96}
          height={96}
        />
        <h2 className="text-sm">{name}</h2>
      </Link>
    </div>
  );
};

export default CategoryItem;
