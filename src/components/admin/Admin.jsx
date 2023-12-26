import {observer} from "mobx-react"
import Store from '../../store/Store'
import Login from '../login/Login'
import AdminPage from'../adminPage/AdminPage'
import AdminData from "../../store/AdminData"
    const Admin =(observer(()=>{
        return (
            <>
                <h1>Admin</h1>
                {
                  !AdminData.isLogin?
                  <Login/>:<AdminPage/>
                  
                }
    
            </>
        )
    }))
    



    export default Admin

