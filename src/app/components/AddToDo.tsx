"use client";
import React, { useState } from 'react'
import { NewTodo } from '@/lib/drizzle'

import { useRouter } from 'next/navigation';

export const AddToDo = () => {

    const [task,setTask]=useState<NewTodo|null>(null);
const {refresh}=useRouter();
const handleSubmit=async ()=>{

    try{
        if(task){
            const res=await fetch("api/todo",{
                method:"POST",
                body:JSON.stringify({
                    task:task.task
                })
            })
       
            refresh()
        }
    }catch (error){
        console.log("error")
    }
}
  return (
    <div>
        <form className='w-full flex gap-x-3'>
            <input
            onChange={(e)=>setTask({task:e.target.value})}
            className='rounded-full w-full py-3.5 px-5 border focus:outline-secodary' type="text" aria-label="Search"/>
       <button type="button" onClick={handleSubmit} className='bg-secondary font-black rounded-lg px-2'>AddTask</button>
       </form>
    </div>
  )
}

