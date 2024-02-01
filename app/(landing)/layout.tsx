
const LandingLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className=" text-black">
        <div className="">
          {children}
        </div>
      </main>
     );
  }
   
  export default LandingLayout;