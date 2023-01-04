import React from 'react'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux'

const About = () => {
    const count = useSelector((state) => state.counter.value);
    return (
        <div className={count ? "bg-black":"bg-white"}>
            <Navbar />
            <div className={count ? "max-w-[1640px] mx-auto p-4 bg-black" : "max-w-[1640px] mx-auto p-4 bg-white"}>
                <div className='max-h-[500px] relative'>
                    <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>About <span className='text-orange-500'>Us</span></h1>
                    </div>
                    <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/3856033/pexels-photo-3856033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="burger" />
                </div>
            </div>
            <div className='max-w-[1640px] mx-auto p-4 py-16 flex justify-center items-center'>
                <p className='text-2xl text-center text-slate-700 w-[75%] md:w-[55%]'>Best Eats makes it incredibly easy for you to discover and get what you want. Delivered to you – quickly, reliably and affordably. And by doing so, we make cities better places to live.</p>
            </div>
            <div className='max-w-[1640px] mx-auto p-4 flex justify-center'>
                <div className='flex flex-col-reverse gap-10 md:flex-row justify-between  w-[100%] md:w-[80%] md:gap-[15%]'>
                    <div className='flex flex-col w-[95%] md:w-[55%] text-center'>
                        <h3 className={count ? "font-bold text-4xl mb-4 text-slate-200" :"font-bold text-4xl mb-4"}>What is this Best Eats thing anyway?</h3>
                        <p className={count ? "text-slate-400 text-lg":"text-slate-700 text-lg"}>Founded in Helsinki, we are a technology company known for our local commerce platform. Best Eats's mission is to make cities better places for customers, merchants and couriers alike. Best Eats's platform makes it easy for customers to order whatever they need on one app, for merchants to make additional sales, and for couriers to make meaningful earnings flexibly. To enable this, Best Eats develops a wide range of technologies from local logistics to retail software and financial solutions, as well as operates its own grocery stores under the brand Best Eats Market. <br /> <br />

                            In November 2021, we announced that we’re joining forces with the US-based company DoorDash. The transaction closed in May 2022, and since then we have been one team with DoorDash. Our CEO, Miki Kuusi leads all of DoorDash’s international business in the 26 countries outside of the US. <br /><br />

                            Together our aim is to build the best possible platform to serve merchants, consumers, and couriers in our existing and future markets. Our two companies share a strong vision for local commerce, and working side by side, we can accomplish more for all our stakeholders.</p>
                    </div>
                    <div className=''>
                        <img className='object-cover' src="https://images.pexels.com/photos/4393667/pexels-photo-4393667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default About