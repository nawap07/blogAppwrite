import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children,authentication=true}) {
    const navigate=useNavigate();
    const authStatus=useSelector(state=>state.status)
    const[loader,setLoader]=useState(true);

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !==authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,authentication])


  return   loader? <div className="">Loading....</div>:<>{children}</>


}

 