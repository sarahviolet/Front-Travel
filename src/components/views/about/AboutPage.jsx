import React, { useEffect, useState } from "react";
import styles from "./AboutPage.module.css";

export default function AboutPage(){


    return (
        <>
        <div className={styles.card}>
            <p>              
                Welcome to Blue Travel, your premier gateway to unforgettable journeys and seamless travel experiences. As a distinguished travel agency, we take pride in curating exceptional trips that transport you to the most captivating destinations across Canada, with a particular focus on the Greater Toronto Area (GTA). At Blue Travel, we understand that travel is not just about reaching a destination; it's about embarking on a transformative adventure, creating cherished memories, and discovering the beauty that Canada has to offer.
            </p>
            <p>              
                With a commitment to excellence, Blue Travel offers a diverse range of meticulously crafted itineraries, each designed to cater to the varied interests and preferences of our discerning clientele. Whether you're yearning for the vibrant energy of Montreal, the picturesque landscapes of Vancouver, or the awe-inspiring wonders of Banff National Park, our team of experienced travel enthusiasts is dedicated to ensuring that every aspect of your journey is seamless and tailored to perfection. From the moment you choose Blue Travel, you can expect unparalleled service, attention to detail, and a passion for delivering unparalleled travel experiences.
            </p>
            <p>              
                Embark on a journey with Blue Travel, where each destination becomes a chapter in your personal travel narrative. Let us be your trusted companion as you explore the wonders of Canada, leaving you with memories that last a lifetime.
            </p>
        </div>
        </>
    )
}