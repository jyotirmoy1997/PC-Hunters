import { useNavigate } from "react-router"
import { useEffect } from "react"
import { Oval } from  'react-loader-spinner'
import "./existing-login.styles.css"

const ExistingLogin = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/user/timeline')
    }, [])
    
    return(
        <div className="spinner-outer">
            <div >
                <Oval
                    height={80}
                    width={80}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                
                />
            </div>
            
        </div>
    )
}

export default ExistingLogin