import { Link } from 'react-router-dom'
import { useState } from 'react';
import "../styles/Login.css"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function login(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      })
    })
    if(response.ok){
      console.log('Login successful')
      console.log(username)
      console.log(password)
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
          <button type="submit" className="center" onClick={login}>Submit</button>
      </form>
      <br /><br /><br />
      <Link to="/register" className="center">Click here to create an account</Link>
      <br />
      <br />
      <p className="center error">{error}</p>
    </>

  )
}

export default Login