import { Link } from "react-router-dom";
import AdminDetails from "../adminDetails/AdminDetails";


function AdminPage() {

    return(
        <>
        <AdminDetails/> 
<Link to="./services" > services</Link>
<br/>
<Link to="./meeting">meeting</Link>
<br/>     
 
   </>
    )

}
export default AdminPage
