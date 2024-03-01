import { useState } from "react";

export default function StateLogin() {
    const [ enteredValues, setEnteredValues ] = useState({
        email: '',
        password: ''
    });

    function handleSubmit(event){
        event.preventDefault();

    }

    function handleInputChange(identifier, value){
        setEnteredValues(prevValues => ({
        ...prevValues,
        [identifier]: value
        // dynamically accessing a property by adding square brackets around the variable [var]
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="control-row">
            <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={enteredValues.email} 
            onChange={(event)=>handleInputChange('email', event.target.value)}/>
            </div>

            <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" value={enteredValues.password} 
            onChange={(event)=>handleInputChange('password', event.target.value)}/>
            </div>
        </div>

        <p className="form-actions">
            <button className="button button-flat">Reset</button>
            <button className="button" onClick={handleSubmit}>Login</button>
            {/* Button by default sends the data to the development server which is not needed */}
            {/* Browser generates HTTP requests and sends it to the server */}
            {/* Becaus by default type of button is submit, to prevent its default behaviour, we can set the type to button */}
            {/* But it's not the recommended way of handling submission */}
            {/* Instead we can set onSubmit attribute on form tag, and we will automatically get an event object */}
        </p>
        </form>
    );
}
