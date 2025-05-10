import { Link, Outlet, useNavigate, useParams } from 'react-router';

import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.js';
import ErrorBlock from '../UI/ErrorBlock.js';
import { useState } from 'react';
import Modal from '../UI/Modal.js';

export default function EventDetails() {
   const [isDeleting, setIsDeleting] = useState(false);


   const params = useParams();
   const navigate = useNavigate();

   const { data, isError, isPending, error } = useQuery({
      queryKey: ['events', { id: params.id }],
      queryFn: ({ signal }) => fetchEvent({ id: params.id, signal })
   })

   const { mutate, isPending: isPendingDeletion, isError: isErrorDeletion, error: deletionError } = useMutation({
      mutationFn: deleteEvent,
      onSuccess: () => {
         queryClient.invalidateQueries({
            queryKey: ['events'],
            refetchType: 'none'
         });
         navigate('/events');
      }
   })

   function handleStartDelete() {
      setIsDeleting(true);
   }
   function handleStopDelete() {
      setIsDeleting(false);
   }

   function handleDelete() {
      mutate({ id: params.id });
   }

   let content;

   if (isPending) {
      content = (
         <div id='event-details-content' className='center'>
            <p>Fetching events data ...</p>
            <LoadingIndicator />
         </div>
      )
   }

   if (isError) {
      content = (
         <div id='event-details-content' className='center'>
            <ErrorBlock title="An error occured!!" message={error.info?.message || 'Failed to fetch events.'} />
         </div>
      )
   }

   if (data) {
      const formattedDate = new Date(data.date).toLocaleDateString('en-us', {
         day: 'numeric',
         month: 'short',
         year: 'numeric'
      })
      content = (
         <>
            <header>
               <h1>{data.title}</h1>
               <nav>
                  <button onClick={handleStartDelete}>Delete</button>
                  <Link to="edit">Edit</Link>
               </nav>
            </header>
            <div id="event-details-content">
               <img src={`http://localhost:3000/${data.image}`} alt={data.image} />
               <div id="event-details-info">
                  <div>
                     <p id="event-details-location">{data.location}</p>
                     <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate} and {data.time}</time>
                  </div>
                  <p id="event-details-description">{data.description}</p>
               </div>
            </div>
         </>
      )
   }

   return (
      <>
         {isDeleting && (
            <Modal >
               <h2>Are you sure?</h2>
               <p>Do you really want to delete this event? This action cannot be undone.</p>
               <div className='form-actions'>
                  {isPendingDeletion && <p>Deleting please wait...</p>}
                  {!isPendingDeletion && (
                     <>
                        <button type="button" onClick={handleStopDelete} className='button-text'>Cancel</button>
                        <button type='button' onClick={handleDelete} className='button'>Delete</button>
                     </>
                  )}
               </div>
               {isErrorDeletion && <ErrorBlock title="An error occured!!" message={deletionError.info?.message || 'Failed to delete the event.'}/>}
            </Modal>
         )}
         <Outlet />
         <Header>
            <Link to="/events" className="nav-item">
               View all Events
            </Link>
         </Header>
         <article id="event-details">{content}</article>
      </>
   );
}
