import { useState } from 'react'
import './App.css'
import NewProject from './Components/NewProject/NewProject'
import NoProjectSelected from './Components/NoProjectSelected/NoProjectSelected'
import Sidebar from './Components/Sidebar/Sidebar'
import SelectedProject from './Components/SelectedProject/SelectedProject';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  const handleAddTask = (taskInfo:string) => {
    setProjectState(prevState => {
      const taskId = Math.random().toString();
      const newTask = {
        text: taskInfo,
        projectId: prevState.selectedProjectId,
        id: taskId
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }
  const handleDeleteTask = (id:string) => {
    setProjectState((prevState) => {
      const tasks = prevState.tasks.filter((task) => task.id !== id);
      return {
        ...prevState,
        tasks: tasks,
      }
    })
  }

  const handleStartProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  const handleAddProject = (projectData: { title: string; description: string, dueDate: string }) => {
    setProjectState(prevState => {
      const projectId = Math.random().toString();
      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }
  console.log(projectState);

  const handleCancelAddProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  const handleRemoveProject = () => {
    setProjectState((prevState) => {
      const projects = prevState.projects.filter((project) => project.id !== prevState.selectedProjectId);
      return {
        ...prevState,
        projects: projects,
        selectedProjectId: projects[0]?.id || undefined
      }
    })
  }

  const handleSelectedProject = (id: string) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }


  const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId);

  let content = (
    <SelectedProject
      project={selectedProject}
      tasks={projectState.tasks}
      onDeleteProject={handleRemoveProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      />
    );
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} onCancelProject={handleCancelAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />
  }






  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar
        onStartAddProject={handleStartProject}
        onSelectProject={handleSelectedProject}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  )
}

export default App
