"use client";

import Image from "next/image";

export const Card = ({
  imageUrl,
  text,
  description,
}: {
  imageUrl: string;
  text: string;
  description: string;
}) => {
  return (
    <div className="">
      <div className="relative max-w-xl">
        <div className="h-96 w-full rounded-3xl overflow-hidden">
          <Image
            className="h-full w-full object-cover rounded-3xl "
            src={imageUrl}
            width={800}
            height={800}
            alt={text}
            priority
            
          />
        </div>
        <div className=" rounded-3xl bg-gradient-to-r  from-[#000000ff] via-[#000000] to-[#000000ff] opacity-20 absolute inset-0"></div>
        <div className=" rounded-3xl bg-gradient-to-r  from-[#00000000] via-[#18002079] to-[#00000000] opacity-60 absolute inset-0"></div>
        <div className="absolute inset-0 flex items-end  p-6">
          <h2 className="text-white text-3xl font-bold font-polysansbold shadow-md">
            {text}
          </h2>
        </div>
      </div>
      {/*  
    trucate after 3 lines of text
    */}
      <p
        className="mt-6 font-normal   line-clamp-3
    "
      >
        {description}
      </p>
    </div>
  );
};
