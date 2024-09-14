import axios from "axios";
import { useEffect } from "react";
import { atom, selector } from "recoil";

export const alln=atom({
    key:"alln",
    default:selector({
        key:"allnss",
        get:async ()=>{
            const res=await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})


export const allns=selector({
    key:"allns",
    get:({get})=>{
        const n=get(alln)
        return n.network+n.jobs+n.messaging+n.notifications
    }
})