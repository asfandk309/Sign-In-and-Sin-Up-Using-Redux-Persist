import './style.css'
import Layout from '../../Layout'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../../Redux/Actions';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [invalidName, setInvalidName] = useState("")
  const [invalidEmail, setInvalidEmail] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    const correct_name = /^[a-zA-Z]+$/ ;

    const values = { name, email, password }

    if (name === "" && email === "" && password === "") {
      alert("Please fill all the input fileds")
    }

    else if( name === correct_name) {
      return true
    }
    
    else if( !name.match(correct_name)){
      setInvalidName("Name must be in alphabates")
    }

    else if (email.indexOf("@" <= 0) &&
      (email.charAt(email.length - 4) != "." ) &&
      (email.charAt(email.length - 3) != ".")) {
      setInvalidEmail("invalid email");
    }

    else {
      dispatch(signup(values));
      console.log("Registered Successfully...");
      setName("");
      setEmail("");
      setPassword("");
      navigate('../')
    }

  }

  return (

    <Layout>
      <div className="signup-container">

        <h1 className="sign" align="center">
          Sign Up
        </h1> <br />

        <form onSubmit={handleSubmit} className="signup-form" >

          <input className="signup-input form-control" type="text" placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
           <span className='error'>{invalidName}</span>
          <br /><br />
          <input className="signup-input form-control" type="email" placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <span className='error'>{invalidEmail}</span>
          <br /><br />
          <input className="signup-input form-control" type="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
          <button type="submit" className='btn btn-primary'> Register</button>

          <div className='mt-4 text-center'>
            <h6> Already a user ?
              <a href="/" className='signin-link'> Sign In</a>
            </h6>
          </div>

        </form>

      </div>
    </Layout>
  )
}

export default SignUp;



