import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  FaUserMd,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaRobot,
  FaHospital,
  FaCalendarCheck,
  FaChartLine,
} from "react-icons/fa";

import "./Login.css";


function Login() {

  const navigate = useNavigate();


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);



  // ==========================
  // LOGIN API
  // ==========================

  const handleLogin = async (e) => {

    e.preventDefault();


    try {

      setLoading(true);


      const response = await axios.post(
        "http://127.0.0.1:8000/login/",
        {
          email,
          password
        }
      );


      if(response.data.success){


        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );


        alert("✅ Login Successful");


        navigate("/dashboard");


      }
      else{

        alert(response.data.message);

      }


    }
    catch(error){


      console.log(
        "Login Error:",
        error
      );


      alert(
        "Unable to Login"
      );


    }
    finally{

      setLoading(false);

    }

  };



  return (

    <div className="login-page">


      <div className="background-overlay"></div>



      {/* LEFT SIDE */}

      <div className="left-side">


        <div className="hero-content">


          <div className="hero-badge">

            <FaRobot/>

            <span>
              AI Powered CRM
            </span>

          </div>



          <h1>
            AI CRM
          </h1>



          <h2>
            Healthcare Professional Management
          </h2>



          <p>

            Smart CRM platform for Medical Representatives,
            Sales Managers and Healthcare Professionals
            with AI-powered interaction tracking,
            analytics and automated follow-ups.

          </p>



          <div className="features">


            <div className="feature-card">

              <FaRobot className="feature-icon"/>

              <span>
                AI Assistant
              </span>

            </div>



            <div className="feature-card">

              <FaHospital className="feature-icon"/>

              <span>
                HCP Management
              </span>

            </div>



            <div className="feature-card">

              <FaCalendarCheck className="feature-icon"/>

              <span>
                Follow-ups
              </span>

            </div>



            <div className="feature-card">

              <FaChartLine className="feature-icon"/>

              <span>
                Analytics
              </span>

            </div>


          </div>


        </div>


      </div>






      {/* RIGHT SIDE */}


      <div className="right-side">


        <div className="login-card">


          <div className="logo">

            <FaUserMd/>

          </div>




          <h2>
            Welcome Back 👋
          </h2>



          <p className="subtitle">

            Login to continue to your dashboard

          </p>





          <form onSubmit={handleLogin}>



            <div className="input-group">


              <label>
                Email Address
              </label>



              <div className="input-box">


                <FaEnvelope className="input-icon"/>



                <input

                  type="email"

                  placeholder="Enter Email"

                  value={email}

                  onChange={
                    (e)=>setEmail(e.target.value)
                  }

                  required

                />


              </div>


            </div>







            <div className="input-group">


              <label>
                Password
              </label>




              <div className="input-box">


                <FaLock className="input-icon"/>




                <input

                  type={
                    showPassword
                    ?
                    "text"
                    :
                    "password"
                  }

                  placeholder="Enter Password"

                  value={password}

                  onChange={
                    (e)=>setPassword(e.target.value)
                  }

                  required

                />




                <span

                  className="eye-btn"

                  onClick={
                    ()=>setShowPassword(
                      !showPassword
                    )
                  }

                >

                  {
                    showPassword
                    ?
                    <FaEyeSlash/>
                    :
                    <FaEye/>
                  }


                </span>



              </div>


            </div>






            <div className="login-options">


              <label>

                <input type="checkbox"/>

                Remember Me

              </label>




              <span className="forgot">

                Forgot Password?

              </span>


            </div>







            <button

              type="submit"

              className="login-btn"

              disabled={loading}

            >

              {
                loading
                ?
                "Logging in..."
                :
                "Login"
              }


              {
                !loading &&
                <FaArrowRight/>
              }


            </button>



          </form>







          {/* REGISTER LINK */}


          <div className="register-box">


            <p>
              Don't have an account?
            </p>



            <button

              className="register-link"

              onClick={() => navigate("/register")}

            >

              Create Account

            </button>


          </div>





        </div>



      </div>




    </div>

  );

}


export default Login;