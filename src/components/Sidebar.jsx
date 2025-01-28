import Button from "./Button"
export default function Sidebar({onStartAdd, projects,onSelectSchedule,selectedScheduleId}){
    return <aside className="w=1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
       <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Schedule</h2> 
       <div>
        <Button onClick={onStartAdd} >+Add Schedule</Button> 
       </div>
       <ul className="mt-8">
        {projects.map((project)=>{
            let cssClass="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 ";
            if(project.id===selectedScheduleId){
                cssClass+="bg-stone-800 text-stone-200"
            }else{
                cssClass+="text-stone-400"
            }
            return(
                <li key={project.id}>
                <button 
                className={cssClass}
                  onClick={()=>onSelectSchedule(project.id)}
                  >
                    {project.title}
                  </button>
            </li>
            );
        }
        
       )}
       </ul>
    </aside>
}