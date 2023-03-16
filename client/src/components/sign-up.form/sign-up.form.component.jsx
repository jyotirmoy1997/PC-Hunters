import { useState } from "react"
// import Button from "../button/button.component"
import axios from "axios"
import "./sign-up.form.styles.css"
import toast, { Toaster } from 'react-hot-toast';
import { validateEmail, validatePassword } from "../../utils/validators"

const initialState = {
    name : '',
    email : '',
    password : '',
    confirmPassword : ''
}
const notify = () => toast.success('Signed-Up Successfull, Please Log-in to Continue');

const SignUpForm = () => {
    const [formData, setFormData] = useState(initialState)
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const onChangeHandler = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    const onSubmitHandler = async (event) => {
        
        event.preventDefault()

        if(formData.password !== formData.confirmPassword){
            setPasswordError('*Passwords do not match')
            return
        }
        if(validateEmail(formData.email) && !validatePassword(formData.password)){
            setPasswordError('*Password must be of atleast 8 characters with a combination of uppercase, lowercase and symbols')
            return
        }
        else if(!validateEmail(formData.email) && validatePassword(formData.password)){
            setEmailError('*Enter a valid email')
            return
        }
        try {
            const response = await axios.post('http://localhost:5000/api/v1/auth/register', {...formData})
            setPasswordError('')
            setEmailError('')
            setFormData(initialState)
            notify()
            
        } catch (error) {
            console.log(error)
            // setErrorMessage(error.response.data.msg)
            setEmailError('*User already exists')
        }
    }

    return(
        <div>
            <form className="wrapper-signup" action="" onSubmit={onSubmitHandler}>
                <div className="it1">I do not have an account</div>
                <div className="it2">Sign-Up with your email and password</div>
                <label className="it3" htmlFor="">Name</label>
                <input className="it4" type="text" 
                name="name" id="name" 
                value={formData.name}
                onChange={onChangeHandler}
                 required 
                />

                <label id="sign-up-email"
                    data = {emailError} className="it5" htmlFor="">Email</label>
                <input className="it6" type="email" name="email" id="email" value={formData.email}
                
                onChange={onChangeHandler}
                required />

                <label
                id="sign-up-password"
                data = {passwordError}
                 className="it7" htmlFor="">Password</label>
                <input className="it8" type="password" name="password" id="password" 
                value={formData.password}
                onChange={onChangeHandler}
                required />

                <label
                id="sign-up-confirm-password"
                data = {passwordError} className="it9" htmlFor="">Confirm Password</label>
                <input className="it10" type="password" name="confirmPassword" 
                id="confirm-password" value={formData.confirmPassword}
                onChange={onChangeHandler}
                
                required />

                <button className="it11" onClick={onSubmitHandler}>Sign-Up</button>
                <Toaster />
            </form>
        </div>
    )
}

export default SignUpForm