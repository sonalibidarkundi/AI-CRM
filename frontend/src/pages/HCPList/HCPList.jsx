import "./HCPList.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";


function HCPList(){

    const hcpData=[
        {
            name:"Dr. Rajesh Kumar",
            hospital:"Apollo Hospital",
            specialty:"Cardiology"
        },
        {
            name:"Dr. Meera Sharma",
            hospital:"Fortis Hospital",
            specialty:"Neurology"
        },
        {
            name:"Dr. Anil Patil",
            hospital:"Manipal Hospital",
            specialty:"Oncology"
        }
    ];


    return(
        <div className="page-layout">

            <Sidebar/>

            <div className="page-content">

                <Header/>

                <h1>HCP List</h1>

                <p>
                  Manage Healthcare Professionals
                </p>


                <table>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Hospital</th>
                            <th>Specialty</th>
                        </tr>
                    </thead>


                    <tbody>

                    {
                        hcpData.map((hcp,index)=>(

                            <tr key={index}>
                                <td>{hcp.name}</td>
                                <td>{hcp.hospital}</td>
                                <td>{hcp.specialty}</td>
                            </tr>

                        ))
                    }

                    </tbody>

                </table>


            </div>

        </div>
    )

}

export default HCPList;