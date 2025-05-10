import { useState } from "react";
import ImagePicker from "../ImagePicker";
import { useQuery } from "@tanstack/react-query";
import { fetchSelectableImages } from "../../util/http";
import ErrorBlock from "../UI/ErrorBlock";

export default function EventForm({ inputData, onSubmit, children }) {
   const [selectedImage, setSelectedImg] = useState(inputData?.image);

   const { data, isPending, isError } = useQuery({
      queryKey: ['events-image'],
      queryFn: fetchSelectableImages
   })

   const handleSelectedImg = (img) => {
      setSelectedImg(img);
   }

   const handleSubmit = (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData)

      onSubmit({ ...data, image: selectedImage });
   }

   return (
      <form id="event-form" onSubmit={handleSubmit}>
         <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={inputData?.title ?? ''} />
         </p>
         {isPending && <p>Loading selectable images...</p>}
         {isError && <ErrorBlock title="Failed to load the selectable images" message="Please try again later" />}
         {data && (
            <div className="control">
               <ImagePicker images={data} onSelect={handleSelectedImg} selectedImage={selectedImage} />
            </div>
         )}
         <p className="control">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" defaultValue={inputData?.description ?? ''} />
         </p>

         <div className="control-row">
            <p className="control">
               <label htmlFor="date">Date</label>
               <input type="date" id="date" name="date" defaultValue={inputData?.date ?? ''} />
            </p>
            <p className="control">
               <label htmlFor="time">Time</label>
               <input id="time" type="time" name="time" defaultValue={inputData?.time ?? ''} />
            </p>
         </div>
         <p className="control">
            <label htmlFor="location">Location</label>
            <input id="location" name="location" defaultValue={inputData?.location ?? ''} />
         </p>

         <p className="form-actions">{children}</p>
      </form>
   )
}