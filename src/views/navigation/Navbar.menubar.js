import React from "react";
import "../../styles/Navbar.css";
import NavbarMenubarDropDown from "./Navbar.menubar.dropdown";
import NavbarMenubarItem from "./Navbar.menubar.item";

export default function NavbarMenubar() {
  return (
    <>
      <NavbarMenubarDropDown text="Products" settings={["Performance Evaluation", "Customer Prioritization", "Market Analysis"]} />
      <NavbarMenubarItem text="Pricing" />
      <NavbarMenubarItem text="Blog" />
    </>
  );
}
