import React, { useState } from 'react'
import '../myStyles.css'
import { picture } from '../assets'

const MyForm = () => {

    const [inputarr, setInputarr] = useState([])
    const [inputdata, setInputdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        city: ""
    })

    const changeHandle = (e) => {
        setInputdata({
            ...inputdata,
            [e.target.name]: e.target.value
        })
    }

    let { firstname, lastname, email, phone, city } = inputdata;

    function btnclickhandle() {
        console.log("submitted data:")
        setInputarr([...inputarr, { firstname, lastname, email, phone, city }])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setOpenModel(true)
        console.log(inputarr)
        console.log(inputdata)
    }
    return (
        <div className='py-5'>
            {/* heading */}
            <p className='w-[90%] font-oswald font-bold text-primary text-[20px] m-4'>INTERESTED IN SELLING OR DISTRIBUTING IGNITE PRODUCTS?</p>

            {/* body */}
            <section className='min-w-[98vw] h-[100vh] flex flex-col md:flex-row relative md:min-w-[100vw]'>

                {/* image */}
                <div className='md:w-[50%] w-full h-[100%] flex items-center justify-center'>
                    <img className='' src={picture} alt="" />
                </div>

                {/* divider */}
                <div className='hidden w-1 h-[100%] bg-gray-300 absolute left-1/2 rounded-md top-0'></div>

                {/* form */}
                <section className='md:w-[50%] w-[95%] h-[100%] bg-secondar flex flex-col justify-center items-center gap-2 m-8'>
                    <div className="bg-secondar h-[90vh] w-[100%] flex justify-center">
                        <form onSubmit={handleSubmit}
                            className='w-full flex flex-col items-center justify-center gap-5 md:gap-4 lg:gap-8 h-full'
                        >

                            {/* First Name */}
                            <div className='inputBox w-[75%] relative'>
                                <input type='text' autoComplete='off' name='firstname' value={inputdata.firstname} onChange={changeHandle} required="required"
                                    className='w-full p-2 border-gray-400 border-2 rounded-md outline-none text-lg duration-500'
                                />
                                <span className='absolute left-0 p-3 pointer-events-none text-md uppercase duration-500 font-[500] text-gray-500'>First Name</span>
                            </div>

                            {/* lastname */}
                            <div className='inputBox w-[75%] relative'>
                                <input type='text' autoComplete='off' name='lastname' value={inputdata.lastname} onChange={changeHandle} required="required"
                                    className='w-full p-2 border-gray-400 border-2 rounded-md outline-none text-lg duration-500'
                                />
                                <span className='absolute left-0 p-3 pointer-events-none text-md uppercase duration-500 font-[500] text-gray-500'>Last Name</span>
                            </div>

                            {/* email */}
                            <div className='inputBox w-[75%] relative'>
                                <input type='email' autoComplete='off' name='email' value={inputdata.email} onChange={changeHandle} required="required"
                                    className='w-full p-2 border-gray-400 border-2 rounded-md outline-none text-lg duration-500'
                                />
                                <span className='absolute left-0 p-3 pointer-events-none text-md uppercase duration-500 font-[500] text-gray-500'>Email*</span>
                            </div>

                            {/* phone */}
                            <div className='inputBox w-[75%] relative'>
                                <input type='text' autoComplete='off' name='phone' value={inputdata.phone} onChange={changeHandle} required="required"
                                    className='w-full p-2 border-gray-400 border-2 rounded-md outline-none text-lg duration-500'
                                />
                                <span className='absolute left-0 p-3 pointer-events-none text-md uppercase duration-500 font-[500] text-gray-500'>Phone*</span>
                            </div>

                            {/* city */}
                            <div className='inputBox w-[75%] relative'>
                                <input type='text' autoComplete='off' name='city' value={inputdata.city} onChange={changeHandle} required="required"
                                    className='w-full p-2 border-gray-400 border-2 rounded-md outline-none text-lg duration-500'
                                />
                                <span className='absolute left-0 p-3 pointer-events-none text-md uppercase duration-500 font-[500] text-gray-500'>City*</span>
                            </div>

                            <button onClick={btnclickhandle} className='myButton2 h-11 w-[75%] rounded-lg text-white font-[500] tracking-wide text-lg cursor-default md:cursor-pointer'>Get Gift Suggestions</button>

                        </form>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default MyForm