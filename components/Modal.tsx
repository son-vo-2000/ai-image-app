import React from "react";
import Image from "next/image";
import '../styles/index.css'

interface ModalProp {
  modalImage: string;
  setModalImage: React.Dispatch<React.SetStateAction<string>>;
}

const Modal = ({ modalImage, setModalImage }: ModalProp) => {
  return (
    <div className={`w-full h-full absolute flex justify-center items-center  backdrop-blur-sm bg-white/30  `} >
      <div className="relative">
        <Image
          src={modalImage}
          width={700}
          height={700}
          alt="zoom_ai_image"
        />
        <button onClick={()=>setModalImage("")} className="bg-stone-400 hover:bg-stone-300 px-2 py-1 absolute top-0 right-0">x</button>
      </div>
    </div>
  );
};

export default Modal;
