import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";
import styles from "../page.module.css";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div>
      <h1 className="text-4xl text-[#53c28b] font-bold">{params.category}</h1>
      {data.map((item) => (
        <div key={item.id} className={`flex gap-12 mt-12 mb-24 ${styles.item}`}>
          <div className="flex flex-col gap-4 flex-1 justify-center">
            <h1 className="text-5xl font-bold">{item.title}</h1>
            <p className="font-medium">{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className="h-[500px] relative md:flex-1">
            <Image
              alt="/"
              src={item.image}
              fill={true}
              className="object-cover h-full "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
