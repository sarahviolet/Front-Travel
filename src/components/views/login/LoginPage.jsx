/*
Created By: Sarah Yun
Modified By: Sarah Yun, Nov/30/2023
*/

import axios from "axios";
import { useForm } from "react-hook-form";
import { LoginAuthGuard } from "../../../auth/auth";
import styles from "./LoginPage.module.css";
import Button from "../../common/button/Button";
export default function LoginPage(){

    LoginAuthGuard();

    const {register, setValue, watch ,handleSubmit} = useForm();

    const onClickSubmitBtn = async (data) => {
        console.log(data)
        const result = await axios.post("http://localhost:4000/api/users/login", data, {withCredentials: true});
        console.log(result);
        document.location.href = "/"
    }
    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.input_box}>
            <input placeholder="Email" type="text" {...register("email")}/>
            </div>
            <div className={styles.input_box}>
            <input placeholder="Password" type="password" {...register("password")}/>
            </div>
            <Button onClick={handleSubmit(onClickSubmitBtn)}>Login</Button>
        </div>
        </>
    )
}