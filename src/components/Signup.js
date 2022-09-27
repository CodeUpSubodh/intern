import React, { useState} from "react";
import { useHistory } from 'react';
import "../css/Signup.css";
import Map from "./Map";
import axios from "axios";

import { FaRegListAlt } from "react-icons/fa";

export default function Signup() {
  
  const [userRegister, setUserRegister] = useState({
    name: "",
    email : "",
    password: "",
    password2: "",
    mobile:"",
    city:"",
    state:"",
    address:"",
  });
  const handleInput = (e) => {
    const {name,value} = e.target;

    setUserRegister({ ...userRegister, [name]: value });
  };
  const signup = ()=>
    {
      const{username,email,password,password2,mobile,city,state,address} = userRegister;
      if(username && email && password && mobile&& city && state && address && (password2 === password)){
      axios.post('http://localhost:3000/',userRegister).then((res)=>
        {
          alert(res.data.message);
          
        })}
        else
        {
          alert("invalid input");
        }
      }
  
  
  
    
  return (
    <>
      <FaRegListAlt />
      <h1 className="heading">SHOPKEEPER SIGN UP</h1>
      <div>
        <section className="signup">
          <div className="container mt-5">
            <div className="signup-form">
              <form className="register-form">
                <div class="form__group field">
                  <input
                    type="input"
                    class="form__field"
                    name="name"
                    id="name"
                    required
                    autoComplete="off"
                      value={userRegister.name}
                    onChange={handleInput}  
                  />
                  <label htmlFor="name" class="form__label">
                    Name
                  </label>
                </div>
                <div class="form__group field">
                  <input
                    type="email"
                    class="form__field"
                    name="email"
                    id="email"
                    required
                    autoComplete="off"
                    value={userRegister.email}
                  onChange={handleInput}  
                  />
                  <label htmlFor="email" class="form__label">
                    Email
                  </label>
                </div>
                <div class="form__group field">
                  <input
                    type="tel"
                    class="form__field"
                    name="mobile"
                    id="mobile"
                    required
                    autoComplete="off"
                    
                     value={userRegister.mobile}
                    onChange={handleInput}  
                  />
                  <label htmlFor="email" class="form__label">
                    Contact Number
                  </label>
                </div>
                <div class="form__group field">
                  <input
                    type="password"
                    class="form__field"
                    name="password"
                    id="password"
                    required
                    autoComplete="off"
                      value={userRegister.password}
                  onChange={handleInput}  
                  />
                  <label htmlFor="password" class="form__label">
                    Password
                  </label>
                </div>
                <div class="form__group field">
                  <input
                    type="password"
                    class="form__field"
                    name="password2"
                    id="password2"
                    required
                    autoComplete="off"
                      value={userRegister.password2}
                  onChange={handleInput}  
                  />
                  <label htmlFor="password2" class="form__label">
                    Confirm Password
                  </label>
                </div>
                
                <div class="form__group field">
                  <input
                    type="text"
                    class="form__field"
                    name="city"
                    id="city"
                    required
                    autoComplete="off"
                      value={userRegister.city}
                  onChange={handleInput}  
                  />
                  <label htmlFor="City" class="form__label">
                    City
                  </label>
                </div>
                <div class="form__group field">
                  <input
                    type="text"
                    class="form__field"
                    name="state"
                    id="state"
                    required
                    autoComplete="off"
                      value={userRegister.state}
                  onChange={handleInput}  
                  />
                  <label htmlFor="State" class="form__label">
                    State
                  </label>
                </div>
                <div class="form__group field">
                  <input
                    type="text"
                    class="form__field"
                    name="address"
                    id="address"
                    required
                    autoComplete="off"
                      value={userRegister.address}
                  onChange={handleInput}  
                  />
                  <label htmlFor="Address" class="form__label">
                    Street
                  </label>
                </div>
                <div className="form_group feild my-5 ">
                <button onClick={signup} className="btn btn-primary button">
                  <strong>Signup</strong>
                </button>
                </div>
                
                <div className="form_group feild my-5">
                  <Map
                  />
                <p>Set Your Location Before Pressing Submit</p>
                </div>
                
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );


}