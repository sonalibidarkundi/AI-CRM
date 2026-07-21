import { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

import "./Settings.css";


function Settings() {


  const [profile, setProfile] = useState({

    name: "",
    email: "",
    phone: "",
    designation: ""

  });



  const [passwordData, setPasswordData] = useState({

    current_password: "",
    new_password: "",
    confirm_password: ""

  });



  const [profileLoading, setProfileLoading] = useState(false);

  const [passwordLoading, setPasswordLoading] = useState(false);





  // ==========================
  // LOAD PROFILE
  // ==========================

  useEffect(()=>{

    fetchProfile();

  },[]);






  // ==========================
  // GET PROFILE
  // ==========================

  const fetchProfile = async()=>{

    try{

      const response = await axios.get(

        "http://127.0.0.1:8000/profile/"

      );


      setProfile({

        name: response.data.name || "",

        email: response.data.email || "",

        phone: response.data.phone || "",

        designation: response.data.designation || ""

      });


    }
    catch(error){

      console.log(
        "Profile Fetch Error",
        error
      );

    }

  };







  // ==========================
  // PROFILE INPUT
  // ==========================

  const handleChange=(e)=>{

    setProfile({

      ...profile,

      [e.target.name]:e.target.value

    });

  };







  // ==========================
  // PASSWORD INPUT
  // ==========================

  const handlePasswordChange=(e)=>{

    setPasswordData({

      ...passwordData,

      [e.target.name]:e.target.value

    });

  };









  // ==========================
  // UPDATE PROFILE
  // ==========================

  const saveProfile = async()=>{


    try{


      setProfileLoading(true);



      const response = await axios.put(

        "http://127.0.0.1:8000/profile/",

        {

          name:profile.name,

          email:profile.email,

          phone:profile.phone,

          designation:profile.designation

        }

      );



      alert(

        response.data.message ||

        "Profile Updated Successfully"

      );



      fetchProfile();


    }
    catch(error){


      console.log(

        "Profile Update Error",

        error

      );


      alert(

        "Unable to update profile"

      );


    }
    finally{


      setProfileLoading(false);


    }


  };









  // ==========================
  // UPDATE PASSWORD
  // ==========================


  const updatePassword = async()=>{


    if(

      passwordData.new_password !==

      passwordData.confirm_password

    ){

      alert(

        "New password and confirm password do not match"

      );

      return;

    }





    try{


      setPasswordLoading(true);



      const response = await axios.put(

        "http://127.0.0.1:8000/profile/password",

        passwordData

      );



      alert(

        response.data.message ||

        "Password Updated Successfully"

      );



      setPasswordData({

        current_password:"",

        new_password:"",

        confirm_password:""

      });


    }
    catch(error){


      console.log(

        "Password Update Error",

        error

      );


      alert(

        "Unable to update password"

      );


    }
    finally{


      setPasswordLoading(false);


    }


  };









  return (

    <div className="settings-layout">


      <Sidebar />



      <div className="settings-content">


        <Header />



        <div className="settings-header">

          <h1>
            Settings
          </h1>


          <p>
            Manage your profile and security settings
          </p>


        </div>







        <div className="settings-grid">







          {/* ================= PROFILE ================= */}



          <div className="settings-card">


            <h2>
              👤 Profile Settings
            </h2>





            <div className="profile-avatar">


              <img

                src={

                  `https://ui-avatars.com/api/?name=${encodeURIComponent(

                    profile.name || "User"

                  )}&background=2563eb&color=fff&size=120`

                }

                alt="profile"

              />


            </div>







            <div className="form-group">


              <label>
                Full Name
              </label>


              <input

                type="text"

                name="name"

                value={profile.name}

                onChange={handleChange}

              />


            </div>








            <div className="form-group">


              <label>
                Email Address
              </label>


              <input

                type="email"

                name="email"

                value={profile.email}

                onChange={handleChange}

              />


            </div>








            <div className="form-group">


              <label>
                Phone Number
              </label>


              <input

                type="text"

                name="phone"

                value={profile.phone}

                onChange={handleChange}

              />


            </div>








            <div className="form-group">


              <label>
                Designation
              </label>


              <input

                type="text"

                name="designation"

                value={profile.designation}

                onChange={handleChange}

              />


            </div>








            <button

              className="save-btn"

              onClick={saveProfile}

              disabled={profileLoading}

            >

              {

                profileLoading

                ?

                "Saving..."

                :

                "Save Profile"

              }


            </button>



          </div>









          {/* ================= PASSWORD ================= */}



          <div className="settings-card">


            <h2>
              🔒 Change Password
            </h2>








            <div className="form-group">


              <label>
                Current Password
              </label>


              <input

                type="password"

                name="current_password"

                value={passwordData.current_password}

                onChange={handlePasswordChange}

              />


            </div>









            <div className="form-group">


              <label>
                New Password
              </label>


              <input

                type="password"

                name="new_password"

                value={passwordData.new_password}

                onChange={handlePasswordChange}

              />


            </div>









            <div className="form-group">


              <label>
                Confirm Password
              </label>


              <input

                type="password"

                name="confirm_password"

                value={passwordData.confirm_password}

                onChange={handlePasswordChange}

              />


            </div>








            <button

              className="save-btn"

              onClick={updatePassword}

              disabled={passwordLoading}

            >

              {

                passwordLoading

                ?

                "Updating..."

                :

                "Update Password"

              }


            </button>





          </div>






        </div>



      </div>



    </div>

  );

}



export default Settings;