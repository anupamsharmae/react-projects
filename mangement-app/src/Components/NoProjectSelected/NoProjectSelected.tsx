import noProjectImg from '/src/assets/images/no-projects.png';
import Button from '../Button';

export default function NoProjectSelected({ onStartAddProject }: { onStartAddProject: () => void }) {
   return (
      <div className="mt-24 text-center w-2/3">
         <img src={noProjectImg} alt='Empty task list' className='w-16 h-16 object-contain mx-auto' />
         <h2 className='text-xl font-bold text-stone-500 my-4'>No Project selected</h2>
         <p className='text-stone-400 mb-4'>Select the project or get started with new one</p>
         <p className='mt-8'>
            <Button onClick={onStartAddProject} >Create new Project</Button>
         </p>
      </div>
   )
}