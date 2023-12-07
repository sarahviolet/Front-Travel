import axios from "axios";
import { useForm } from "react-hook-form";
import { LoginAuthGuard } from "../../../auth/auth";
import styles from "./RegisterPage.module.css";
import Button from "../../common/button/Button";
import { API_URL } from "../../../config/config";

export default function RegisterPage(){
    LoginAuthGuard();

    const {register, setValue, watch ,handleSubmit} = useForm();

    const onClickSubmitBtn = async (data) => {
        console.log(data)
        const result = await axios.post(`${API_URL}/api/users/register`, data, {withCredentials: true});
        console.log(result);
        if(result) {
            document.location.href = "/login"
        }
    }

    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.input_box}>
            <input placeholder="First Name" type="text" {...register("firstname")}/>
            </div>
            <div className={styles.input_box}>
            <input placeholder="Last Name" type="text" {...register("lastname")}/>
            </div>
            <div className={styles.input_box}>
            <input placeholder="e-mail" type="text" {...register("email")}/>
            </div>
            <div className={styles.input_box}>
            <input placeholder="Password" type="password" {...register("password")}/>
            </div>
            <Button onClick={handleSubmit(onClickSubmitBtn)}>Register</Button>
        </div>
        </>
    )
}