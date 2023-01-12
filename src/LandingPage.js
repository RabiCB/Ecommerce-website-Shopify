import React from 'react'
import "./Navbar.css"
const LandingPage = () => {
  return (
    <div className='flex items-center h-screen justify-around max-lg:pl-4 max-lg:pr-4  max-md:flex-col max-md:flex max-md:items-center '>
        <div className='flex gap-2 flex-col max-md:mt-6'>
        <h2 className='text-4xl max-md:text-3xl font-bold'>The Shopify<br/> we believe in Quality<br/>
        & Customer satisfaction</h2>
        <div className='flex gap-4 mt-6 text-white max-md:items-center'>
        <button onClick={()=>window.location="mailto:'rollinrabin@gmail.com"} className='border-none rounded-md pl-8 pt-2 pr-8 pb-2 text-center bg-red-500'>Email-us</button>
        <button   className="border-none rounded-md pl-8 pt-2 pr-8 pb-2 text-center bg-blue-500">feedback</button>
        </div>
        
        </div>
        <div>
            <img className="dashboard-logo rounded-lg" src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=740&t=st=1672244603~exp=1672245203~hmac=f5e35e551ac982041e0a7811345b4f34bd766699a6d8b8c152f0dc3d40071000" alt="shopify"/>

        </div>
    
    </div>
  )
}

export default LandingPage