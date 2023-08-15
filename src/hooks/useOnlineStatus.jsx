import React, { useState,useEffect } from 'react'

export const useOnlineStatus = () => {
    const [online, setOnline] = useState(true)

    useEffect(()=>{
        window.addEventListener('offline', ()=>setOnline(false));
        window.addEventListener('online', ()=>setOnline(true));
    },[])
  return {online}
}

