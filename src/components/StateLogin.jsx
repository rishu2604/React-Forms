import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

// We want to outsource the handleInputBlur and handleInputChange functions too
// But we can't use them as a regular function
// Because we are managing states here
// we have to make a custom hook to do that

export default function StateLogin() {
    // const [ enteredValues, setEnteredValues ] = useState({
    //     email: '',
    //     password: ''
    // });

    // const [ didEdit, setDidEdit ] = useState({
    //     email: false,
    //     password: false
    // });

    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailHasError
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError
    } = useInput('', (value) => hasMinLength(value, 6));

    // const [ emailIsValid, setEmailIsValid ] = useState(true);

    // Validating on every keystroke
    // const emailIsInvalid = enteredValues.email!=='' && !enteredValues.email.includes('@');

    // const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && isNotEmpty(enteredValues.email);
    // const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6);

    function handleSubmit(event){
        event.preventDefault();

        // Add validation here too because user can ignore the error and can still submit the form
        // if(emailIsInvalid){
        //     setEmailIsValid(false);
        //     console.log("Check credentials")
        //     return;
        // }

        if(emailHasError || passwordHasError){
            console.log("Check credentials");
            return;
        }

        console.log(emailValue, passwordValue);

        // setEnteredValues({
        //     email: '',
        //     password: ''
        // });
        // setDidEdit({
        //     email: false,
        //     password: false
        // });

        // setEmailIsValid(true);

        console.log('Sending HTTP request...')
    }


    // function handleInputChange(identifier, value){
    //     setEnteredValues(prevValues => ({
    //     ...prevValues,
    //     [identifier]: value
    //     // dynamically accessing a property by adding square brackets around the variable [var]
    //     }))

    //     setDidEdit(prevValues=>({
    //         ...prevValues,
    //         [identifier]: false
    //     }))
    // }

    // function handleInputBlur(identifier){
    //     setDidEdit(prevValues=>({
    //         ...prevValues,
    //         [identifier]: true
    //     }))
    // }

    return (
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="control-row">
            <Input 
                label="Email" 
                type="email" 
                id="email" 
                name="email"
                onBlur={handleEmailBlur}
                value={emailValue} 
                onChange={handleEmailChange}
                error={emailHasError && 'Please enter a valid email address.'} 
            />
            <Input 
                label="Password" 
                type="password" 
                id="password" 
                name="password"
                onBlur={handlePasswordBlur}
                value={passwordValue} 
                onChange={handlePasswordChange}
                error={passwordHasError && 'Please enter a password having at least 6 characters'}
            />
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
