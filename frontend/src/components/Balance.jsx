import { useState,useEffect } from "react";
import axios from "axios";
export const Balance = () => {
    const [balance, setBalance] = useState(null);
    useEffect(()=>{
         axios.get("https://paytm-ym3c.onrender.com/api/v1/account/balance", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(response =>{setBalance(response.data.balance.toFixed(2));})
        
    })
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {balance}
        </div>
    </div>
}