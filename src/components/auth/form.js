// src/components/auth/Form.js
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import '../../styles/form.css';
import Hero from '../hero/hero.js';
import { useNavigate } from 'react-router-dom';
const Form = ({setUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [isSignUp, setIsSignUp] = useState(true); // To toggle between Sign Up and Sign In
  const navigate =useNavigate();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , (user) =>{
      if(user)
      {
        setUser(user);
        navigate('/pages/dashboard');
      }
    });
    return()=> unsubscribe();
  }, [navigate, setUser]);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        // Additional fields for Sign Up
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up successfully');
        // Handle successful signup
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in successfully');
        // Handle successful signin

      }
    } catch (error) {
      console.error('Error:', error.message);
      console.log(auth);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <div>
    <Hero />
  
    <div className="card">
      <h1>{isSignUp ? 'S.P.A.R.K' : 'S.P.A.R.K'}</h1>
      <h4 id='full-form'>Student Performance Analytics & Resource Keeper</h4>
      <form onSubmit={handleFormSubmit}>
        <div >
          <input
          className="input-group"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div >
          <input
          className="input-group"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isSignUp && ( // Render additional fields only for Sign Up
          <>
            <div >
              <input
              className="input-group"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
              className="input-group"
                type="text"
                placeholder="Roll Number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
            </div>
          </>
        )}
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <p onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </p>
    </div>
    </div>
  );
};

export default Form;
