import Button from "../Button";

export default function Sidebar({ projects, selectedProjectId, onStartAddProject, onSelectProject }: { projects: { title: string, description: string, id: string, dueDate: string }[]; onStartAddProject: () => void; onSelectProject: (id: string) => void; selectedProjectId?: string | null }) {


   return (
      <aside className="w-1/4 h-full bg-stone-900 text-stone-50 px-8 py-16 md:w-72 rounded-r-xl">
         <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
         <div className="mb-6">
            <Button onClick={onStartAddProject}>+ Add Project</Button>
         </div>
         <ul>
            {projects.map((project) => {
               let cssClasses = `w-full text-left px-2 py-1 rounded-md my-1  hover:text-stone-200 hover:bg-stone-800`;

               if (project.id === selectedProjectId) {
                  cssClasses += ' bg-stone-800 text-stone-200'
               }else{
                  cssClasses += ' text-stone-400'
               }

               return(
                  <li key={project.id} >
                     <button className={cssClasses} onClick={() => onSelectProject(project.id)}>
                        {project.title}
                     </button>
                  </li>
               )
            })}
         </ul>
      </aside>
   )
}