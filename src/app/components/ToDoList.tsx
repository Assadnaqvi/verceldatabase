
import { Todo } from "@/lib/drizzle";
import React from "react";
import TodoItem from "./TodoItem";
// import { useRouter } from "next/navigation";
const getData = async () => {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/todo", {
      method: "GET",
      cache: "no-store",
      
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await res.json();

    return result;
  } catch (err) {
    console.log(err);
  }
};

const handleSubmit = async (task: Todo) => {
  try {
    console.log(task);
    if (task) {
      const res = await fetch("api/todo", {
        method: "DELETE",
        body: JSON.stringify({
          task: task.task,
        }),
      });

      //  refresh()
    }
  } catch (error) {
    console.log("error");
  }
};
export const ToDoList = async () => {
  const res: { data: Todo[] } = await getData();
  console.log(res);
  return (
    <div className="max-h-[350px] overflow-auto mb-4">
      {res.data.map((item) => <TodoItem item={item} key={item.id} />)}
    </div>
  );
};
