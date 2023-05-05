import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import { signInUser, userError, userStatus, selectUser } from "../../features/user/userSlice"
import {validateEmail, validatePassword} from "../../utils/validators"
import "./sign-in.form.styles.css"


const initialState = {
    email : '',
    password : ''
}

const SignInForm = () => {
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [formData, setFormData] = useState(initialState)
    const userErr = useSelector(userError)
    const user = useSelector(selectUser)
    const userLogStatus = useSelector(userStatus) === "loggedIn" 
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        if(userLogStatus && user.role === 'admin'){
            navigate('/admin')
        }
        else if(userLogStatus){
            navigate('/')
        }
    }, [userLogStatus, navigate])
    
    useEffect(() => {
        if(userErr === 'Wrong Password'){
            setPasswordError('*Incorrect Password')
            setEmailError('')
        }
        if(userErr === "User doesn't exist"){
            setEmailError("*User does not exist")
            setPasswordError('')
        }
    }, [userErr])


    const onChangeHandler = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value})
    }
    
    const onSubmitHandler = async (event) => {
        event.preventDefault()
        if(formData.email === ''){
            setEmailError('Email Cannot be Empty')
        }
        if(formData.password === ''){
            setPasswordError('Password cannot be Empty')
        }
        if(validateEmail(formData.email) && validatePassword(formData.password)){
            dispatch(signInUser(formData))
        }
        else if(validateEmail(formData.email) && !validatePassword(formData.password)){
            setPasswordError('*Enter a valid password')
        }
        else if(!validateEmail(formData.email) && validatePassword(formData.password)){
            setEmailError('*Enter a valid email')
        }
        else{
            setEmailError('*Enter a valid email')
            setPasswordError('*Enter a valid password')
        }
        
    }

    return(
        <div >
            <form className="wrapper-sign-in" action="" onSubmit={onSubmitHandler}>

                <div className="el1">Sign-In</div>

                <div className="el2">Sign-In with your email and password</div>

                <div id="sign-in-email"
                    data = {emailError}
                 className="el3">Email</div>

                <input className="el4" 
                type="email" 
                name="email"
                value={formData.email} 
                onChange={onChangeHandler} required />

                <div id="sign-in-password"
                data ={passwordError}
                 className="el5">Password</div>

                <input className="el6" 
                type="password" 
                name="password"
                value={formData.password} 
                onChange={onChangeHandler} required />

                
                <button className="el7" onClick={onSubmitHandler}>Log-In</button>

            </form>
            
        </div>
    )
}

export default SignInForm