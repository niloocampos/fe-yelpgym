import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gyms = () => {
    const [gyms, setGyms] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/gyms").then((res) => {
            setGyms(res.data.gyms);
        })
    }, []);

    return (
        <>
        <h1>All Gyms</h1>
        <ul>
            {gyms?.length ? (
                gyms.map((gym, index) => {
                    return (
                        <li key={index}>{gym.title}</li>
                    )
                })
            ): <h2>No Data</h2>}

        </ul>
        </>
    )
}

export default Gyms;

{/* {gyms?.length? (
            gyms.map((gym, index) => {
                return (
                    <li>{gym.title}</li>
                )
            })
        ): <h2>No Data</h2>} */}