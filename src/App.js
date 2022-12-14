import logo from './assets/logo.svg'
import './styles.css'
import {useState} from 'react';

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
   <div className="container">
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">

        <span className="login-form-title">
            <img src={logo} alt='rand'/>
          </span>
          <span className="login-form-title ex">Welcome</span>
          

{/* inputs-------------------- */}
    <div className='wrap-input'>
      <input className={email !== "" ? "has-val input": "input"}
      type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <span className='focus-input' data-placeholder='Email'></span>
    </div>

    <div className='wrap-input'>
    <input className={password !== "" ? "has-val input": "input"}
     type="password" value={password} onChange={e => setPassword(e.target.value)}/>
      <span className='focus-input' data-placeholder='Password'></span>
    </div>
{/* inputs-------------------- */}


{/* butons-------------------- */}
<div className='container-login-form-btn'>
  <button className='login-form-btn'>Login</button>
</div>
{/* butons-------------------- */}

<div className='text-center'>
  <span className='txt1'>Não possui conta?</span>
  <a className='txt2' href='#0'>Criar conta.</a>
</div>


        </form>
      </div>
      </div> 
   </div>
    
  );
}

export default App;
