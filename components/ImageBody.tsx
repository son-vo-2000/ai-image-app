"use client";
import React, { useState } from "react";
import Form from "./Form";
import Images from "./Images";
import Modal from "./Modal";

const ImageBody = () => {
  const [images, setImages] = useState<{ url: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalImage, setModalImage] = useState("");

  function removeImage(imageUrl: string) {
    const updateImage = images.filter((image) => image.url !== imageUrl);
    setImages(updateImage);
    localStorage.setItem("images", JSON.stringify(updateImage));
  }

  return (
    <div className="relative min-h-[80vh] w-full">
      {modalImage ? <Modal modalImage={modalImage} setModalImage={setModalImage}/> : null}

      <Form
        images={images}
        setImages={setImages}
        loading={loading}
        setLoading={setLoading}
      />
      <Images
        images={images}
        loading={loading}
        removeImage={removeImage}
        setModalImage={setModalImage}
      />
    </div>
  );
};

export default ImageBody;
