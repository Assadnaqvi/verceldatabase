
import {Todo,NewTodo , db , todoTable } from "@/lib/drizzle";
import { NextRequest,NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
export async function GET(request:NextRequest){

try{
await sql `CREATE TABLE IF NOT EXISTS todo(id SERIAL, task varchar(255))`

const res=await db.select().from(todoTable);
return NextResponse.json({data:res})
} catch (err){
    console.log((err as {message:string}).message)
    return NextResponse.json({message:"something went wrong"})

}
} 
  

export async function POST(request: NextRequest) {
    const req = await request.json();
    try{
      if(req.task){
        const res=await db.insert(todoTable).values({
          task:req.task,
        }).returning();
      console.log(res)   
    return NextResponse.json({message:"Data added successfully",data:res}) 
  }else{
    throw new Error("Task field is required")
  }

    }
    catch (error){
    return NextResponse.json({message:(error as{message:string}).message})
      
      }
    
  }
 // databse query " INSERT INTO todo (task) VALUES ('task 1') "*/

 
export async function PUT(request: NextRequest) {
  const req = await request.json();
  try{
    if(req.task){
      const res=await db.insert(todoTable).values({
        task:req.task,
      }).returning();
    console.log(res)   
  return NextResponse.json({message:"Data added successfully",data:res}) 
}else{
  throw new Error("Task field is required")
}

  }
  catch (error){
  return NextResponse.json({message:(error as{message:string}).message})
    
    }
  
}


export async function DELETE(request: NextRequest) {
  const req = await request.json();
  try{
    if(req.task){
      const res=await db.insert(todoTable).values({
        task:req.task,
      }).returning();
    console.log(res)   
  return NextResponse.json({message:"Data added successfully",data:res}) 
}else{
  throw new Error("Task field is required")
}

  }
  catch (error){
  return NextResponse.json({message:(error as{message:string}).message})
    
    }
  
}