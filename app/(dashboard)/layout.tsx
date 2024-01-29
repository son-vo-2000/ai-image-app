import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <main className="max-w-[1209px] m-auto mt-8">
  
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
