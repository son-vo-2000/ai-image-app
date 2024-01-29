import React from "react";

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
        <ul className="flex flex-wrap gap-3 md:gap-4 mt-8 justify-center sm:justify-start">
          {images.map((image) => (
            <li
              className="rounded-t-lg flex flex-col items-center justify-center w-[200px]"
              key={image.url}
            >
              
              <div className="rounded-t-lg" onClick={() => setModalImage(image.url)} style={{backgroundImage: `url(${image.url})`,minHeight:'200px',width:'100%', backgroundSize:"contain", backgroundRepeat:"no-repeat",cursor:"pointer"}}></div>
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
