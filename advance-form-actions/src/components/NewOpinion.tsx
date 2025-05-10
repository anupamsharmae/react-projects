import { use, useActionState } from "react";
import { OpinionsContext } from "../store/opinion-context";
import Submit from "./Submit";

export function NewOpinion() {
   const { addOpinion } = use(OpinionsContext);
   const opinionAction = async (prevFormState, formData) => {
      const body = formData.get('body');
      const title = formData.get('title');
      const userName = formData.get('userName');

      const errors = [];
      if (title.trim().length < 5) {
         errors.push('Title must be at least five characters long');
      }
      if (body.trim().length < 10 || body.trim().length > 300) {
         errors.push('Opinion must be between 10 and 300 characters long.');
      }
      if (!userName.trim()) {
         errors.push('Please provide your name');
      }

      if (errors.length > 0) {
         return {
            errors,
            enterValues: {
               title, body, userName
            }
         }
      }

      await addOpinion({ title, userName, body })

      return { errors: null }
   }
   const [formState, formAction] = useActionState(opinionAction, { errors: null })

   return (
      <div id="new-opinion">
         <h2>Share your opinion!</h2>
         <form action={formAction}>
            <div className="control-row">
               <p className="control">
                  <label htmlFor="userName">Your Name</label>
                  <input type="text" id="userName" name="userName" defaultValue={formState.enterValues?.userName} />
               </p>

               <p className="control">
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" name="title" defaultValue={formState.enterValues?.title} />
               </p>
            </div>
            <p className="control">
               <label htmlFor="body">Your Opinion</label>
               <textarea id="body" name="body" rows={5} defaultValue={formState.enterValues?.body}></textarea>
            </p>
            {formState.errors &&
               <ul className="error">
                  {formState.errors.map((error) => (
                     <li key={error}>{error}</li>
                  ))}
               </ul>}

            <Submit />
         </form>
      </div>
   );
}
