export default function Input({label, id, error, ...props}){
    return(
        <div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            <input 
                id={id} 
                {...props}
                // type="email" 
                // name="email" 
                // onBlur is an event listening prop. It is a built in default browser event that will fire whenever this input will lose focus
                // onBlur={()=>handleInputBlur('email')}
                // value={enteredValues.email} 
                // onChange={(event)=>handleInputChange('email', event.target.value)}
            />
            <div className="control-error">
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}