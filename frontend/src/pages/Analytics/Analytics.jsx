import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./Analytics.css";


function Analytics(){

return(

<div className="page-layout">

<Sidebar/>

<div className="page-content">

<Header/>

<h1>Analytics</h1>

<p>
AI insights and interaction analytics
</p>


<div className="analytics-cards">

<div>
<h2>150</h2>
<p>Total Interactions</p>
</div>


<div>
<h2>85%</h2>
<p>Successful Follow-ups</p>
</div>


<div>
<h2>25</h2>
<p>New HCP Connections</p>
</div>


</div>


</div>

</div>

)

}


export default Analytics;