import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const New = () => {
    const navigate = useNavigate();
    const onFormSubmit = async (e) => {
        e.preventDefault();
        const gym = {
            title: e.target[0].value,
            location: e.target[1].value
        };
        console.log(gym);
        await axios.post("/new", gym)
        .then((res) => {
            navigate(`/gym/${res.data}`);
            console.log(res.data);
        })
    };


  return (
    <>
    <h1 className='mt-5 ml-4'>Add Gym</h1>
    <form className='ml-5 mt-5' onSubmit={onFormSubmit}>
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" className='appearance-none rounded-lg relative block
                  w-1/5 px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm mt-2'/>
        </div>
        <div>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" className='appearance-none rounded-lg relative block
                  w-1/5 px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm mt-2' />
        </div>
        <button className='w-1/5 mt-4 mb-4
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-lg text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500'>Submit</button>
        </form>
    <a href="/gyms" className='ml-4 text-blue-500 underline'>ALL GYMS</a>
      
    </>
  )
}

export default New;
