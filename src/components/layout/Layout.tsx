import React from "react";
import Header from "../header/Header";

//set type for layout
type TLayout = {
  children: React.ReactNode;
};

export default function Layout({ children }: TLayout) {
  return (
    <>
      <div>
        <Header />
        {children}
      </div>
    </>
  );
}
