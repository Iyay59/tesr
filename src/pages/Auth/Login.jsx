import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/api/users"
import { setCredentials } from "../../redux/features/auth/authSlice";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation()

    const { userInfo } = useSelector((state) => state.auth)

    const {search} = useLocation()
    const sp = new URLSearchParams(search);
    const redirect = sp.get("redirect") || "/";

    useEffect(() => {
      if (userInfo) {
        navigate(redirect)
      }
    }, [navigate, redirect, userInfo])
    
    const submitHandler = async (e) => {
        e.preventDefault()
    }

  return (
    <div>Login</div>
  )
}

export default Login