import SignInForm from "../sign-in.form/sign-in.form.component"
import SignUpForm from "../sign-up.form/sign-up.form.component"
import "./log-in.styles.css"


const LogIn = () => {
    return (
        <div className="log-in-wrapper">
            <SignInForm/>
            <SignUpForm />
        </div>
    )
}

export default LogIn