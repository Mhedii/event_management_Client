"use client";

import React, { useState } from "react";

import { useGetServicesQuery } from "@/redux/features/services/serviceApi";
import Image from "next/image";

const CategoryCard = () => {
  const [loading, setLoading] = useState(true);

  const { data } = useGetServicesQuery({});

  return (
    <>
      <div className="mx-[5rem]">
        <h2 className="font-bold mb-2">BROWSE BY CATEGORY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data?.map((service: any) => (
            <div key={service.id}>
              <div className="card w-48  shadow-2xl rounded-lg">
                <figure>
                  <Image
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    width={200}
                    height={200}
                  />
                </figure>
                <h2 className="text-xm font-bold text-center">
                  {service.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
