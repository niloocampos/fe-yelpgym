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
        <h1 className='my-10 text-3xl font-semibold text-teal-500'>All Gyms</h1>
        <a className="text-blue-500 underline" href="/new">Add New Gym</a>
        <ul className='mt-10'>
            {gyms?.length ? (
                gyms.map((gym, index) => {
                    return (
                        <li key={index}>
                            <a className="text-blue-500 underline" href={`/gym/${gym._id}`}>
                        {gym.title}</a></li>
                    )
                })
            ): <h2>No Data</h2>}

        </ul>
        </>
    )
}

export default Gyms;

