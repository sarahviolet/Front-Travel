import axios from "axios";
import { CheckLogin } from "../../../auth/auth";
import { useCookies } from "react-cookie";

export default function Nav(){
    const isLogin = CheckLogin();
    const [cookies, setCookie, removeCookie] = useCookies(['x_auth']);
    const onClickLogoutBtn = async (data) => {
        console.log(data)
        const result = await axios.get(`${API_URL}/api/users/logout`, {withCredentials: true});
        if(result) {
           
            setCookie("x_auth", null);
        }
        console.log(result);
        document.location.href="/"
    }
    return (
        <>
        <nav style={{width: "25%", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "10px"}}>
            <a href={`/`}>Home</a>
            <a href={`/about`}>About</a>
            <a href={`/trip`}>Trip</a>
            <a href={`/booking`}>Booking</a>
            {
            isLogin ? <button onClick={onClickLogoutBtn}>Logout</button> : 
            <>
              <a href={`/register`}>Register</a>
              <a href={`/login`}>Login</a>
            </>
            }
            
        </nav>
        </>
    )
}