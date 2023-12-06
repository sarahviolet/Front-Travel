import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { AuthGuard } from "../../../auth/auth";
import styles from "./Booking.module.css";
import Button from "../../common/button/Button";

export default function BookingPage(){
    AuthGuard();

    const {register, setValue, watch ,handleSubmit} = useForm();

    const onClickSubmitBtn = async (data) => {
        console.log(data)
        const result = await axios.post("http://localhost:4000/api/bookings", data);
        console.log(result);
        fetchData();
    }

    const onClickDeleteBtn = (id) => async () => {
        const result = await axios.delete(`http://localhost:4000/api/bookings/${id}`);
        fetchData();
    }

    const onClickUpdateBtn = (id) => async () => {
        if(watch(`updatedDate${id}`) == null || watch(`updatedDate${id}`) == undefined) return;
        console.log("call")
        const dataToSend = {};
        const updatedDate = watch(`updatedDate${id}`);
        console.log(updatedDate)
        dataToSend.departureDate = updatedDate;
        const result = await axios.put(`http://localhost:4000/api/bookings/${id}`, dataToSend);
        fetchData();
    }

    const fetchData = async () => {

        const result = await axios.get("http://localhost:4000/api/bookings");
        setData(result);
        
        console.log(result)
       
        return result;
    }
    // fetchData();

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchData();
    }, [])

    return (
        <>
       <section id="manage" className={styles.manage}>
            
         
            <form id="addBookingForm" className={styles.form}>
                <h3>Manage Booking</h3>
                <div className={styles.input_box}>
                {/* <label htmlFor="tripType">Trip Type:</label> */}
                <input {...register("tripType")} type="radio" id="tripTypeAdd" name="tripType" value="roundtrip" required />
                <span>Round Trip</span>
                <input {...register("tripType")} type="radio" id="tripTypeAdd" name="tripType" value="oneway" />
                <span>One Way</span>
                </div>
                <div className={styles.input_box}>
                <label htmlFor="departureDate">Departure Date:</label>
                <input {...register("departureDate")} type="date" id="departureDateAdd" required />

                <label htmlFor="returnDate">Return Date:</label>
                <input {...register("arrivalDate")} type="date" id="arrivalDate" />
                </div>

                <div className={styles.input_box}>
                <label htmlFor="passengerCount">Passenger Count:</label>
                <input {...register("counts")} type="number" id="passengerCount" required />
                </div>
                <div className={styles.input_box}>
                <label htmlFor="depart">depart</label>
                <select id="depart" {...register("depart")}>
                    <option value={"Toronto"}>Toronto</option>
                    <option value={"Scarborough"}>Scarborough</option>
                    <option value={"Mississauga"}>Mississauga</option>
                </select>

                <label htmlFor="arrival">arrival</label>
                <select id="arrival" {...register("arrival")}>
                    <option value={"Montreal"}>Montreal</option>
                    <option value={"Vancouver"}>Vancouver</option>
                    <option value={"Banff"}>Banff National Park</option>
                </select>
                </div>
                <Button onClick={handleSubmit(onClickSubmitBtn)} >Add Booking</Button>
            </form>

            {/* <table>
                <thead>
                    <tr>
                        <th>Trip ID</th>
                        <th>Trip Type</th>
                        <th>Departure Date</th>
                        <th>Return Date</th>
                        <th>Passenger Count</th>
                        <th>Update Input</th>
                        <th>Update Date</th>
                        <th>Delete Trip</th>
                    </tr>
                </thead>
                <tbody id="bookingList"> */}
                <div className={styles.card_list}>

                
                
                {data?.data?.map((item)=>{
                    return (
                        <React.Fragment key={item._id}>
                            {/* <tr>

                                <td>{item._id}</td>
                                <td>{item.isReturn ? "Return" : "One Way"}</td>

                                <td>{item.departureDate}</td>
                                <td>{item.arrivalDate}</td>

                                <td>{item.counts}</td>
                                <td><input {...register(`updatedDate${item._id}`)} type="date" /></td>
                                <td><button onClick={onClickUpdateBtn(item._id)}>update</button></td>
                                <td><button onClick={onClickDeleteBtn(item._id)}>delete</button></td>
                            </tr> */}
                            <div className={styles.card}>
                                <div className={styles.img}>
                                    <img src={`/images/${item?.arrival}.jpeg`} />
                                </div>
                                <div className={styles.card_content}>
                                    {/* <div>{item._id}</div> */}
                                    <div>{item.isReturn ? "Return" : "One Way"}</div>
                                    <div>{item.departureDate}</div>
                                    <div>{item.arrivalDate}</div>
                                    <div>{item?.depart}</div>
                                    <div>{item?.arrival}</div>
                                    <input {...register(`updatedDate${item._id}`)} type="date" />
                                    <button onClick={onClickUpdateBtn(item._id)}>update</button>
                                    <button onClick={onClickDeleteBtn(item._id)}>delete</button>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
                </div>
                {/* </tbody>
            </table> */}
        </section>
        </>
    )
}