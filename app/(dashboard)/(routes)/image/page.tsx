import React from "react";
import { BsImage } from "react-icons/bs";
import ImageBody from "@/components/ImageBody";

const image = {
  label: "Image Generation",
  icon: BsImage,
  href: "/image",
  color: "text-amber-500",
};

const ImageGenerate = () => {
  return (
    <section className="md:px-10 px-3 w-full  ">
      <div className="flex items-center gap-4 mb-10  ">
        <image.icon className={`${image.color} h-16 w-16`} />
        <div>
          <h2 className="sm:text-2xl font-semibold">{image.label}</h2>
          <p className="text-sm">Turn your prompt into an image</p>
        </div>
      </div>
      <ImageBody />
    </section>
  );
};

export default ImageGenerate;
