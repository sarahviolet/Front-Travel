import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./TripPage.module.css";
import { AuthGuard } from "../../../auth/auth";
import { useForm } from "react-hook-form";

export default function TripPage(){
    

    return (
        <>
        <div className={styles.card_list}>
            
            <div className={styles.card}>
                <div className={styles.img}>
                    <img src={`/images/montreal.jpeg`} />
                </div>
                <div className={styles.card_content}>
                    <div className={styles.title}>Weekend Gateway to Montreal</div>
                    <div>Max Account: 5</div>
                    <div>Trip Days: 4</div>
                    <div>Price per Person: $1,000</div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.img}>
                    <img src={`/images/vancouver.jpeg`} />
                </div>
                <div className={styles.card_content}>
                    <div className={styles.title}>Ocean View Resort in Vancouver</div>
                    <div>Max Account: 6</div>
                    <div>Trip Days: 7</div>
                    <div>Price per Person: $2,000</div>
                    
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.img}>
                    <img src={`/images/banff.jpeg`} />
                </div>
                <div className={styles.card_content}>
                    <div className={styles.title}>Explore Banff National Park</div>
                    <div>Max Account: 8</div>
                    <div>Trip Days: 10</div>
                    <div>Price per Person: $1,200</div>               
                </div>
            </div>
        </div>
        </>
    )
}