export default function Input({label, id, error, ...props}) {
   return (
      <div className="control no-margin">
         <label htmlFor={id}>{label}</label>
         <input type="text" id={id} {...props}
         />
         {error && <p className="control-error">{error}</p>}
      </div>
   )
}