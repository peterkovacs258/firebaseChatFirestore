import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
export const Login = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[1].value;
    const password = e.target[2].value;

      try {
          await signInWithEmailAndPassword(auth,email,password);
          navigate("/");
    
    } catch (err) {
      setErr(true);
      setLoading(false);
      console.log(err);
    }
  };


  return (
    <div className='formContainer'>
            <div className='formWrapper'>

                <span className='logo'> Chat</span>
                <span className='title'> Register</span>
                <form onSubmit={handleSubmit}>
                <input type="email"  placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <button>Sign in</button>
                {err && <span>Something went wrong</span>}

                </form>
                <p>You dont have an account? <Link to="/register">Register now</Link></p>
            </div>
    </div>
  )
}
