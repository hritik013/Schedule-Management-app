import NotSelected from './components/NotSelected'
import NewSchedule from "./components/NewSchedule";
import Sidebar from "./components/Sidebar";
import { useState } from 'react';
import SelectedSchedule from './components/SelectedSchedule';
function App() {
  const [projectState,setProjectState]= useState({
    selectedProject:undefined,
    projects:[],
    tasks: []
   });
function handleAddTask(text){
  setProjectState(prevState=>{
    const taskId=Math.random();
    const newTask={
    text:text,
    projectId:prevState.selectedProject,
      id: taskId,
    };
    return{
      ...prevState,
    tasks: [newTask,...prevState.tasks]
    };
  });
}

function handleDeleteTask(id){
  setProjectState(prevState=>{
    return{
      ...prevState,
      tasks: prevState.tasks.filter(
        (task)=>task.id!=id),
    };
  });
}


   function handleSelectSchedule(id){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        selectedProject:id,
      }
    });
   }
   function handleStartAdd(){
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProject:null,
      }
    });
   }
   function handleCancel(){
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProject:undefined,
      }
    });
   }
   function handleAddSchedule(projectData){
    setProjectState(prevState=>{
      const newProject={
        ...projectData,
        id: Math.random()
      }
      return{
        ...prevState,
        selectedProject:undefined,
        projects:[...prevState.projects,newProject]
      };
    });
   }

function handleDelete(){
  setProjectState(prevState=>{
    return{
      ...prevState,
      selectedProject:undefined,
      projects: prevState.projects.filter((project)=>project.id!=prevState.selectedProject
    ),
    }
  });
}

const selectedSchedule=projectState.projects.find(
  (project)=>project.id===projectState.selectedProject
);

const filteredTasks = projectState.tasks.filter(
  (task) => task.projectId === projectState.selectedProject
);
   let content=<SelectedSchedule project={selectedSchedule} 
   onDelete={handleDelete}
   onAddTask={handleAddTask}
   onDeleteTask={handleDeleteTask}
   tasks={filteredTasks}
   />;
   
   
   if(projectState.selectedProject===null){
    content=<NewSchedule onAdd={handleAddSchedule} onCancel={handleCancel}/>
   }else if(projectState.selectedProject===undefined){
    content=<NotSelected onStartAdd={handleStartAdd}/>

   }
  return (
    <>
    <main className="h-screen my-8 flex gap-8">
    <Sidebar onStartAdd={handleStartAdd} 
    projects={projectState.projects}
    onSelectSchedule={handleSelectSchedule}
    selectedProject={projectState.selectedProject}
    />
    {content}
    </main>
    </>
  );
}

export default App;
