import Lottie from 'lottie-react'
import React, { useState } from 'react'
import registerLotttie from '../../assets/register.json'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const handleRegister=(e)=>{
        e.preventDefault();
        validatePassword(password);

    }
    const validatePassword = (value) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 8 chars, 1 letter, 1 number
        if (!passwordRegex.test(value)) {
          setError(
            "Password must be at least 8 characters long and include at least one letter and one number."
          );
        } else {
          setError("");
        }
      };
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
      <Lottie  animationData={registerLotttie} loop={true}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-5xl font-bold">Login now!</h1>

      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={e=>setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={e=>setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />
          
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          {error && <p className="error-text">{error}</p>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login