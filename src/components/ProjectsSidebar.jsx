import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul className="mt-8">
                {projects.map((item) => {
                    let cssClasses = "w-full text-left py-1 px-2 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                    if (item.id === selectedProjectId) {
                        cssClasses += " text-stone-200 bg-stone-800"
                    } else {
                        cssClasses += " text-stone-400"
                    }
                    return (
                        <li key={item.id}><button
                            className={cssClasses}
                            onClick={() => onSelectProject(item.id)}
                        >
                            {item.title}
                        </button></li>
                    )
                })}
            </ul>
        </aside>
    )
}