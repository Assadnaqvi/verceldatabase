"use client";
import { Todo } from "@/lib/drizzle";
import {useRouter} from "next/navigation"

export default function TodoItem({ item }: { item: Todo }) {
const handleDelete = async (task: Todo) => {
  try {
    try {
      const res = await fetch(`api/todo?id=${task.id}`, {
        method: "DELETE",
      });
      router.refresh();
      console.log(res, "<-----")
    } catch (e) {
      console.log("Error while deleting todo");
    }

  } catch (error) {
    console.log("error");
  }
};

const router = useRouter();
  return (
    <div
      className="bg-gray-100 py-4 px-4 flex items-center gap-x-3 shadow rounded-lg my-3"
      key={item.task}
    >
      <div className="h-3 w-3 bg-secondary rounded-full"></div>
      <p className="text-lg font-medium flex justify-end">
        {item.task}
        <button
          onClick={() => handleDelete(item)}
          className="bg-secondary ml-6 px-2 flex justify-end rounded-lg"
        >
          delete
        </button>
      </p>
    </div>
  );
}
