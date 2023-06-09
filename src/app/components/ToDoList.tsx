import { Todo } from '@/lib/drizzle'
import React from 'react'
 
const getData= async()=>{
    try{
    const res= await fetch("http://127.0.0.1:3000/api/todo",{
        method:"GET",
        cache:"no-store",
        headers:{
            "Content-Type" : "application/json"
        }
    });
if(!res.ok){
    throw new Error("Failed to fetch data")
}; 
const result=await res.json()

return result
}catch (err){
console.log(err)
}}


export const ToDoList =async () => {
  const res:{data:Todo[]} =await getData();
   
  return (
    <div className='max-h-[350px] overflow-auto mb-4'>
   { 
    res.data.map((item)=>{
        return(
    <div className='bg-gray-100 py-4 px-4 flex items-center gap-x-3 shadow rounded-lg my-3'>
    <div className='h-3 w-3 bg-secondary rounded-full'></div>
  <p className='text-lg font-medium'>{item.task}</p>
    </div>)}
    )}</div>
        )
        }
 