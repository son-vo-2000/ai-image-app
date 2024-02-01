import React from "react";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <section className="max-w-[1260px] m-auto my-52">
      <div className="lg:relative bg-green-200 w-full min-h-[300px] rounded-xl px-8 lg:py-0 py-8 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-[40%] text-center lg:text-start">
          <h1 className="font-bold text-3xl">What Our Happy Client Say</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quasi, laborum.
          </p>
        </div>

        <div className="flex flex-col gap-6  max-w-[700px] lg:absolute lg:right-0 ">
          <div className="shadow-2xl ml-20 bg-white p-4 flex rounded-2xl items-center gap-8 ">
            <img
              className="rounded-2xl w-1/6"
              src="https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg"
              alt="avata_1"
            />
            <div>
              <h1 className="font-bold ">Jone Doe</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam vero.
              </p>
            </div>
          </div>
          <div className="p-4 flex rounded-2xl items-center gap-8 ">
            <img
              className="rounded-2xl w-1/6"
              src="https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg"
              alt="avata_1"
            />
            <div>
              <h1 className="font-bold ">Jone Doe</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam vero.
              </p>
            </div>
          </div>
          <div className="shadow-2xl ml-20 bg-white p-4 flex rounded-2xl items-center gap-8 ">
            <img
              className="rounded-2xl w-1/6"
              src="https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg"
              alt="avata_1"
            />
            <div>
              <h1 className="font-bold ">Jone Doe</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam vero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
