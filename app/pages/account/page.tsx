'use client'

import ResponsivePageSwap from "@/utils/ResponsivePage";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import AccountDesktop from "./component/AccountDesktop";
import AccountMobile from "./component/AccountMobile";

const inter = Inter({
  display: "swap",
  weight: "600",
});

const RegisterOrLogin = () => {

  const [dropDownCat, setDropDownCat] = useState(false);

 const handleCategoryDropDownMenuFired = useCallback(() => {
    setDropDownCat(!dropDownCat);
  }, [dropDownCat]);



  return (

    <ResponsivePageSwap 
     mobile={<AccountMobile/>}
     desktop={<AccountDesktop/>}
     pad={<div className="text-white">Account Pad</div>}
     type="application"
    />
    
  );
};

export default RegisterOrLogin;
