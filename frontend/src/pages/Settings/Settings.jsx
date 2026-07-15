import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./Settings.css";


function Settings(){

return(

<div className="page-layout">

<Sidebar/>

<div className="page-content">

<Header/>

<h1>Settings</h1>


<div className="settings-card">

<label>
Name
</label>

<input value="Sonali" readOnly/>


<label>
Email
</label>

<input value="sonali@gmail.com" readOnly/>


<button>
Update Profile
</button>


</div>


</div>

</div>

)

}


export default Settings;