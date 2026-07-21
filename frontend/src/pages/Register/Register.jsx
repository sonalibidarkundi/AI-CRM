import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaUserMd
} from "react-icons/fa";

import "./Register.css";


function Register(){

    const navigate = useNavigate();


    const [formData,setFormData] = useState({

        name:"",
        email:"",
        phone:"",
        designation:"",
        password:""

    });


    const [showPassword,setShowPassword] = useState(false);

    const [loading,setLoading] = useState(false);



    const handleChange=(e)=>{

        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });

    };



    // ==========================
    // REGISTER API
    // ==========================

    const handleRegister=async(e)=>{

        e.preventDefault();


        try{

            setLoading(true);


            const response = await axios.post(

                "http://127.0.0.1:8000/register/",

                formData

            );



            if(response.data.success){


                alert(
                    "✅ Registration Successful. Please Login"
                );


                navigate("/");


            }
            else{


                alert(
                    response.data.message
                );


            }



        }
        catch(error){


            console.log(
                "Register Error:",
                error
            );


            alert(
                "Registration Failed"
            );


        }
        finally{

            setLoading(false);

        }

    };





    return(


        <div className="register-page">



            <div className="register-card">


                <div className="register-logo">

                    <FaUserMd/>

                </div>



                <h2>
                    Create Account
                </h2>



                <p className="register-subtitle">

                    Register to access AI CRM Dashboard

                </p>




                <form onSubmit={handleRegister}>


                    {/* Name */}

                    <div className="input-group">


                        <label>
                            Full Name
                        </label>


                        <div className="input-box">


                            <FaUser className="input-icon"/>


                            <input

                                type="text"

                                name="name"

                                placeholder="Enter Name"

                                value={formData.name}

                                onChange={handleChange}

                                required

                            />

                        </div>


                    </div>





                    {/* Email */}


                    <div className="input-group">


                        <label>
                            Email
                        </label>


                        <div className="input-box">


                            <FaEnvelope className="input-icon"/>


                            <input

                                type="email"

                                name="email"

                                placeholder="Enter Email"

                                value={formData.email}

                                onChange={handleChange}

                                required

                            />

                        </div>


                    </div>





                    {/* Phone */}


                    <div className="input-group">


                        <label>
                            Phone
                        </label>


                        <div className="input-box">


                            <FaPhone className="input-icon"/>


                            <input

                                type="text"

                                name="phone"

                                placeholder="Enter Phone Number"

                                value={formData.phone}

                                onChange={handleChange}

                                required

                            />

                        </div>


                    </div>






                    {/* Designation */}


                    <div className="input-group">


                        <label>
                            Designation
                        </label>


                        <div className="input-box">


                            <FaBriefcase className="input-icon"/>


                            <input

                                type="text"

                                name="designation"

                                placeholder="Enter Designation"

                                value={formData.designation}

                                onChange={handleChange}

                                required

                            />

                        </div>


                    </div>






                    {/* Password */}


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


                                name="password"

                                placeholder="Create Password"

                                value={formData.password}

                                onChange={handleChange}

                                required

                            />



                            <span

                                className="eye-btn"

                                onClick={()=>setShowPassword(!showPassword)}

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






                    <button

                        className="register-btn"

                        disabled={loading}

                    >


                        {
                            loading
                            ?
                            "Creating Account..."
                            :
                            "Register"
                        }



                        {
                            !loading &&
                            <FaArrowRight/>
                        }


                    </button>




                </form>





                <div className="login-link">


                    <p>
                        Already have an account?
                    </p>


                    <button

                        onClick={()=>navigate("/")}

                    >

                        Login

                    </button>


                </div>




            </div>



        </div>


    );

}


export default Register;