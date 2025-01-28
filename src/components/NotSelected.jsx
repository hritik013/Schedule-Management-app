import Button from './Button';
import logo from '../assets/no-projects.png';
export default function NotSelected({onStartAdd}){
    return <div className="mt-24 text-center w-2/3">
        <img src={logo} alt="Empty" className='w-16 object-contain mx-auto'/>
        <h2 className="text-xl font-bold text-stone-500 my-4">No Schedule Selected</h2>
         <p className='text-stone-400 mb-4 '>Select a Schedule or Get started with a new one</p>
         <p className='mt-8'>
            <Button onClick={onStartAdd}>Create New Schedule</Button>
         </p>
    </div>
}