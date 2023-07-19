import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

const Show = () => {
    const [gym, setGym] = useState();
    const { gymid } = useParams();
    const navigate = useNavigate();

    const onDeleteClick = () => {     
        axios.get(`/gyms/${gymid}/delete`).then((res) => {
            if (res.status === 200) {
                navigate("/gyms/")
            }
        });
    };

    
    

    useEffect(() => {
        axios.get(`/gyms/${gymid}`).then(res => {setGym(res.data.gym)});
    })
  return (
    <>
    {gym ? (
        <>
            <h1 className='text-2xl font-semibold mb-3'>{gym.title}</h1>
            <h3 className='mb-5'>{gym.location}</h3>
        </>
    ): (<h1>No Data</h1>)}
    <div className='space-x-5'>
        <button className='border px-2 py-1 rounded-lg bg-indigo-400 text-white'>
    <a href={`/gym/${gymid}/edit`}>Edit</a>
    </button>
    
    
    <button className="border px-2 py-1 rounded-lg bg-indigo-400 text-white" onClick={onDeleteClick}>Delete</button>
    </div>
    
    <a className="text-blue-500 underline block" href="/gyms">All Gyms</a>
    </>
  )
};


export default Show;
