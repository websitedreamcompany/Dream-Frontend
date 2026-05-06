import sanitizeData from "@/utils/cleanData"
import { createAccountSchema, LoginAccountValidationSchema } from "@/validation/authSchema"
import { BASE_URL } from "./serverUrlConstant";


const createAccount = async (email: string, password: string, adClassification: 'Buyer' | 'Seller',  signup_for_newsletter: boolean) => {
     const  cleanedData = sanitizeData(createAccountSchema, {email,password, adClassification,  signup_for_newsletter})
        if(!cleanedData.success){
           // console.error("Data validation failed:", cleanedData.error?.message);
            throw new Error("Invalid data provided for account creation.");
         
        }

      return await fetch(`${BASE_URL}/create-new-account`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(cleanedData.data)
      }).then(res=>res.json())
    
 
}

const loginAccount = async (email: string, password: string) => {
      const  cleanedData = sanitizeData(LoginAccountValidationSchema, {email,password})
        if(!cleanedData.success){
           // console.error("Data validation failed:", cleanedData.error?.message);
            throw new Error("Invalid data provided for account login.");
         
        }

      return await fetch(`${BASE_URL}/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(cleanedData.data)
      }).then(res=>res.json())
}

export const useAccountApi = () => {
    return {
        createAccount,
        loginAccount
    }
}

export  default useAccountApi