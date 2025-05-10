import { Link, redirect, useNavigate, useNavigation, useParams, useSubmit } from "react-router";
import Modal from "../UI/Modal";
import EventForm from "./EventForm";
import { FormEvent } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http";
// import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorBlock from "../UI/ErrorBlock";

export default function EditEvent() {
   // const navigate = useNavigate();
   const params = useParams();
   const submit = useSubmit();
   const { state } = useNavigation()

   const { data, isError, error } = useQuery({
      queryKey: ['events', { id: params.id }],
      queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
      staleTime: 10000
   })

   // const { mutate } = useMutation({
   //    mutationFn: updateEvent,
   //    onMutate: async (data) => {
   //       await queryClient.cancelQueries({ queryKey: ['events', { id: params.id }] });
   //       const previousData = queryClient.getQueryData(['events', { id: params.id }]);
   //       queryClient.setQueryData(['events', { id: params.id }], data.event);
   //       return { previousData }
   //    },
   //    onError : (error, data, context) => {
   //       queryClient.setQueryData(['events', { id: params.id }], context?.previousData)
   //    },
   //    onSettled:()=>{
   //       queryClient.invalidateQueries({
   //          queryKey: ['events', { id: params.id }]
   //       })
   //    }
   // })


   function handleSubmit(formData: FormEvent) {
      console.log(formData);
      // mutate({ id: params.id, event: formData });
      // handleClose();
      submit(formData, { method: 'PUT' })
   }

   // function handleClose() {
   //    navigate('../');
   // }

   let content;

   if (isError) {
      content = (
         <>
            <ErrorBlock title="Failed to load event" message={error.info?.message || 'Failed to load event, please try again later!'} />
            <div className="form-actions">
               <Link to="../" className="button">Okay</Link>
            </div>
         </>
      )
   }
   if (data) {
      content = (
         <EventForm inputData={data} onSubmit={handleSubmit}>
            {state === 'submitting' ?
               ( <p>Sending data...</p> ) :
               (<>
                  <Link to="../" className="button-text">Cancel</Link>
                  <button type="submit" className="button">Update</button>
               </>)
            }

         </EventForm>
      )
   }

   return (
      <Modal>
         {content}
      </Modal>

   )
}

export function loader({ params }) {
   queryClient.fetchQuery({
      queryKey: ['events', { id: params.id }],
      queryFn: ({ signal }) => fetchEvent({ id: params.id, signal })
   });
}


export async function action({ request, params }) {
   const formData = await request.formData();
   const updatedEventData = Object.fromEntries(formData);
   await updateEvent({ id: params.id, event: updatedEventData });
   await queryClient.invalidateQueries({
      queryKey: ['events']
   })
   return redirect('../');
}