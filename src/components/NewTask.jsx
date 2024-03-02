import { useState } from "react"

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }

    function handleClick() {
        if (enteredTask) {
            onAdd(enteredTask);
            setEnteredTask('');
        }
    }
    return <div className="flex gap-4 items-center">
        <input onChange={handleChange} type="text" value={enteredTask} className="w-64 py-1 px-2 rounded-sm bg-stone-200" />
        <button onClick={handleClick} className="text-stone-800 hover:text-green-500">Add task</button>
    </div>
}