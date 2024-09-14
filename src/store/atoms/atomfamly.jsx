import { atomFamily } from "recoil";
import { TODOS } from "./tods";

export const todoatomf=atomFamily({
key:"todoatomf",
default:id =>{
    return TODOS.find(x=>x.id===id)
}
})