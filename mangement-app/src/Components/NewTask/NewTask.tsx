import { useState } from "react"

export default function NewTask({ onAdd }: { onAdd: (taskInfo: string) => void }) {

   const [enteredTask, setEnteredTask] = useState('');

   const handleChange = (event: any) => {
      setEnteredTask(event.target.value)
   }

   const handleClick = () => {
      if (!enteredTask.trim()) {
         return
      }
      onAdd(enteredTask)
      setEnteredTask('');
   }

   return (
      <div className="flex items-center gap-4 mb-4">
         <input
            type="text"
            className="w-full px-2 py-1 rounded-md bg-stone-200"
            onChange={handleChange}
            value={enteredTask}
         />
         <button type="button" className="text-stone-700 hover:text-stone-950 text-nowrap" onClick={handleClick}>Add Task</button>
      </div>
   )
}