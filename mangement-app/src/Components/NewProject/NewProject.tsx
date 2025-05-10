import { useRef } from 'react';
import Button from '../Button';
import Input from '../Input';
import Modal from '../Modal/Modal';


export default function NewProject({ onAddProject, onCancelProject }: { onAddProject: (projectData: { title: string; description: string, dueDate: string }) => void; onCancelProject: () => void }) {
	const titleRef = useRef<HTMLInputElement>(null);
	const descriptionRef = useRef<HTMLTextAreaElement>(null);
	const dueDateRef = useRef<HTMLInputElement>(null);
	const modalRef = useRef<HTMLDialogElement>(null);


	const handleSaveProject = () => {
		const title = titleRef.current?.value;
		const description = descriptionRef.current?.value;
		const dueDate = dueDateRef.current?.value;

		if (title?.trim() === '' || description?.trim() === '' || dueDate?.trim() === '') {
			modalRef.current?.open();
			return;
		}

		onAddProject({
			title: title || '',
			description: description || '',
			dueDate: dueDate || ''
		});
	}

	return (
		<>
			<div className='w-[35rem] mt-16'>
				<menu className='flex justify-end items-center my-4 gap-4'>
					<li>
						<button className='text-stone-800 hover:text-stone-950 cursor-pointer' onClick={onCancelProject}>Cancel</button>
					</li>
					<li>
						<Button onClick={handleSaveProject}>Save</Button>
					</li>
				</menu>
				<div>
					<Input label="Title" ref={titleRef} type="text" />
					<Input label="Description" isTextArea ref={descriptionRef} />
					<Input label='Due date' ref={dueDateRef} type="date" />
				</div>
			</div>
			<Modal ref={modalRef}>
				<h2 className='text-xl font-bold text-stone-500 my-4'>Invalid input</h2>
				<p className='text-stone-800 mb-4'>Oops.. looks like you forget to enter the value</p>
			</Modal>
		</>
	)
}