import { useEffect, useState } from "react"

const useTshirt = ()=>{
    const [tShirt, setTshirt] =useState([]);
    useEffect(()=>{
        fetch('tshirts.json')
        .then(res =>res.json())
        .then(data=>setTshirt(data))
    },[])

    return  [tShirt, setTshirt]
}
export default useTshirt;