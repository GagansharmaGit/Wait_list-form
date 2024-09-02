import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="w-[80%] mx-auto flex flex-row justify-center items-center gap-11 sticky top-0 p-4 z-50 border-black border rounded-full bg-slate-200 m-4">
        <div className=''>BAAI Brainalive</div>
        <div className='flex gap-5'>
            <button className='rounded-full border border-green-300 bg-green-600 p-3'>node sales</button>
            <button className='bg-white rounded-full border border-green-300 mr-4 p-3'>Login</button>
            <Link  to="/userResponse"><button className='bg-white rounded-full border border-green-300 mr-4 p-3'>See Response</button></Link>
            <Link to="/"><button className='bg-white rounded-full border border-green-300 mr-4 p-3'>Go back</button></Link>
        </div>
    </nav>
    );
};

export default NavBar;