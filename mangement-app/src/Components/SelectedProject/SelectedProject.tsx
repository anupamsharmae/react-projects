import Task from "../Task/Task";

export default function SelectedProject({ project, onDeleteProject, onAddTask, onDeleteTask, tasks }: { project: {title: string, id: string, description: string, dueDate: string} | null | undefined; onDeleteProject: () => void; onAddTask: (taskInfo:string) => void; onDeleteTask:(id:string) => void; tasks:{text:string; id:string; projectId:string}[]  }) {
   if(!project) {
      return
   }

   const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
   })
   return (
      <div id={project.id} className="w-[35rem] mt-16">
         <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
               <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
               <button className="text-stone-600 hover:text-stone-950" onClick={onDeleteProject}>Delete</button>
            </div>
            <p className="mb-4 text-stone-400">{formattedDate}</p>
            <p className="text-stone-600 white-space-pre-wrap">{project.description}</p>
         </header>
         <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
      </div>
   )
}