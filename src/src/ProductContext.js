import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const productContxt = createContext();

export default function ProductContext(props) {

    const [arr, setArr] = useState([]);
    const [donationArr,setDonationArr]=useState([]);

    useEffect(() => {
        axios.get('./Products.json')
        .then(product => {
            setArr(product.data)
        })
        .catch(eror => console.log("eror"))
    }, [])

    return (
        <productContxt.Provider value={{ arr, setArr ,donationArr,setDonationArr}}>
            {props.children}
            {/* //לא מחכה שיחזור מציג נתונים לכן נציג את הנתוינם רק אחרי שנשאל אם האורך שונה מNULL */}
        </productContxt.Provider>
    );
}