
const LandingLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="h-full bg-slate-200 text-black">
        <div className="w-full">
          {children}
        </div>
      </main>
     );
  }
   
  export default LandingLayout;