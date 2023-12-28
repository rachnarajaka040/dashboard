import { apiURL } from "Constants/Constant";
import axios from "axios";


const adminDashboarddata = async ()=> {
   const response = await axios.get(`${apiURL.baseURL}/skytrails/api/admin/adminDashBoard`)
}