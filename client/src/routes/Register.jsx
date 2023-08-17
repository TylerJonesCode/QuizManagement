import { Link } from 'react-router-dom'
import { useState } from 'react';
import "../styles/Login.css"

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  async function login(e) {
    e.preventDefault();
    if(password !== confirmPassword){
      setError("password does not match password confirmation")
      return
    }

    const response = await fetch('http://localhost:3000/user/register', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      })
    })
    if(response.ok){
      console.log('Registration successful')
    }
    else{
      const body = await response.json()
      if(body["error"] === undefined){
        setError('An error has occurred while logging in')
      }
      else{
        setError(body["error"])
      }
    }
  }

  return (
    <>
    <form>
          <div className="form_item">
            <label htmlFor="username">Username</label>
            <input id="username" className="username" type="text" value={username} onChange={e=>setUsername(e.target.value)}/>
          </div>
          <br />
          <br />
          <div className="form_item">
            <label htmlFor="password">Password</label>
            <input id="password" className="password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
          </div>
          
          <br />
          <br />
          <div className="form_item">
            <label htmlFor="confirm_password">Password</label>
            <input id="confirm_password" className="confirm_password" type="password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
          </div>

          <button type="submit" className="center" onClick={login}>Submit</button>
      </form>

      <br /><br /><br />
      <Link to="/login" className="center">Already have an account? Click here to login</Link>
      <p className="center error">{error}</p>
    </>
  )
}

export default Register