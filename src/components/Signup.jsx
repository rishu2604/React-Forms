import { useState } from "react";

export default function Signup() {
    const [ passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);

    function handleSubmit(event){
        event.preventDefault();

        // FormData is an object that makes it easy too get hold of the user input data
        // But every input tag, select tag and every other tag must have 'name' attribute assigned to it
        // because name attribute gives you access of the entered values
        const fd = new FormData(event.target);

        // You can also get the entered values like this but it will make the code cumbersome
        // const enteredEmail = fd.get('email');

        // Object class provided by the browser and call the fromEntries static method on that class which is also provided by the browser
        // Calling .entries method on the FormData object will give us all the values in an array of all the input fields and their values
        // And Object.fromEntries will simply give us an object where we have key value pairs for all our input fields

        // When there are multiple inputs with same name, that data is lost
        // To get that data we have to use getAll() method and define the name used in it
        // Here, the checkboxes have the same name
        const acquisitionChannel = fd.getAll('acquisition');
        const data = Object.fromEntries(fd.entries());
        // It gives data in key value pair

        data.acquisition = acquisitionChannel

        // We have to use square brackets because else it will give error because of dash symbol in between confirm-password
        if(data.password !== data['confirm-password']){
            setPasswordsAreNotEqual(true);
            return;
        }
        console.log(data);

        event.target.reset(); // Imperative 
    }
    return (
        <form onSubmit={handleSubmit}>
        <h2>Welcome on board!</h2>
        <p>We just need a little bit of data from you to get you started 🚀</p>

        <div className="control">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required/>
        </div>

        <div className="control-row">
            <div className="control">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" required minLength={6}/>
            </div>

            <div className="control">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    id="confirm-password"
                    type="password"
                    name="confirm-password"
                />
                <div className="control-error">
                    {passwordsAreNotEqual && <p>Passwords must match.</p>}
                </div>
            </div>
        </div>

        <hr />

        <div className="control-row">
            <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required/>
            </div>

            <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required/>
            </div>
        </div>

        <div className="control">
            <label htmlFor="phone">What best describes your role?</label>
            <select id="role" name="role" required>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
            </select>
        </div>

        <fieldset>
            <legend>How did you find us?</legend>
            <div className="control">
            <input
                type="checkbox"
                id="google"
                name="acquisition"
                value="google"
            />
            <label htmlFor="google">Google</label>
            </div>

            <div className="control">
            <input
                type="checkbox"
                id="friend"
                name="acquisition"
                value="friend"
            />
            <label htmlFor="friend">Referred by friend</label>
            </div>

            <div className="control">
            <input type="checkbox" id="other" name="acquisition" value="other" />
            <label htmlFor="other">Other</label>
            </div>
        </fieldset>

        <div className="control">
            <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" required/>I
            agree to the terms and conditions
            </label>
        </div>

        <p className="form-actions">
            {/* Reset button autimatically resets all the input fields because its type is 'reset' */}
            {/* or we can also reset the form using FormData in built properties */}
            <button type="reset" className="button button-flat">
            Reset
            </button>
            <button type="submit" className="button">
            Sign up
            </button>
        </p>
        </form>
    );
}
