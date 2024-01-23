import React from "react";
import Image from "next/image";

interface ImageProp {
  images: { url: string }[];
  loading: boolean;
  removeImage: (index: string) => void;
  setModalImage: React.Dispatch<React.SetStateAction<string>>;
}

const Images = ({ images, loading, removeImage, setModalImage }: ImageProp) => {
  return (
    <>
      {loading ? (
        <div className="w-full h-[300px] font-semibold flex items-center justify-center">
          Creating Image...
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-10 mt-8">
          {images.map((image) => (
            <li
              className="rounded-t-lg flex flex-col items-center justify-center"
              key={image.url}
            >
              <Image
                onClick={() => setModalImage(image.url)}
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src={image.url}
                priority
                className="cursor-pointer rounded-t-lg"
              />
              <button
                onClick={() => {
                  removeImage(image.url);
                }}
                className="bg-slate-500 w-full py-3 text-white cursor-pointer hover:bg-slate-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Images;
