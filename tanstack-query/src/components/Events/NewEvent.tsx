import { Link, useNavigate } from 'react-router';

import Modal from '../UI/Modal';
import EventForm from './EventForm';
import { FormEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createNewEvent, queryClient } from '../../util/http';
import ErrorBlock from '../UI/ErrorBlock';


export default function NewEvent() {
   const navigate = useNavigate();
   const { mutate, isPending, isError, error } = useMutation({
      mutationFn: createNewEvent,
      onSuccess:()  => {
         queryClient.invalidateQueries({queryKey:['events']});
         navigate('/events');
      }
   })

   function handleSubmit(formData: FormEvent) {
      console.log(formData);
      mutate({ event: formData });
   }


   return (
      // onClose={() => navigate('../')}
      <Modal >
         <EventForm onSubmit={handleSubmit}>
            {isPending && 'Submitting...'}
            {!isPending && (
               <>
                  <Link to="../" className="button-text">Cancel</Link>
                  <button type="submit" className="button">Create</button>
               </>
            )}
         </EventForm>
         {isError && <ErrorBlock title="Failed to create event" message={error.info?.message || 'Failed to create event. Please check your inputs and try again later'} />}
      </Modal>
   );
}
