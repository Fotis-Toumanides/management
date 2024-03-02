import Tasks from "./Tasks"

export default function SlectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {

    const foramattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
    return (
        <div className="w-[35rem] mt-16">
            <header className="mb-4 pb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold uppercase text-stone-600 mb-2">{project.title}</h1>
                    <button onClick={onDelete} className="text-stone-600 hover:text-stone-950,">Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{foramattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
        </div>
    )
}