import React, { useContext, useEffect, useState } from 'react'

import { ModalContext } from './InputOuputBundler'

const Fields = () => {

  // data from input will be passes to AI as an Array of objects with desired values.
  const { openModel, setOpenModel } = useContext(ModalContext)

  const [inputarr, setInputarr] = useState([])
  const [inputdata, setInputdata] = useState({
    relationship: "",
    age: "",
    occasion: "",
    interests: "",
    budget: ""
  })

  const changeHandle = (e) => {
    setInputdata({
      ...inputdata,
      [e.target.name]: e.target.value
    })
  }


  let { relationship, age, occasion, interests, budget } = inputdata;

  function btnclickhandle() {
    console.log("submitted data:")
    setInputarr([...inputarr, { relationship, age, occasion, interests, budget }])
  }
  // useEffect(() => {
  //   console.log(inputarr);
  //   console.log(inputdata)
  // }, [inputarr]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModel(true)
    console.log(inputarr)
    console.log(inputdata)
  }

  return (
    <div className='min-w-full flex flex-col items-center justify-center gap-8 h-full'>
      <h1 className='font-[600] text-3xl text-gray-600 pointer-events-none tracking-wider'>Gift Details</h1>

      <form onSubmit={handleSubmit}
        className='w-full flex flex-col items-center justify-center gap-5 sm:gap-4 lg:gap-8 h-full'
      >

        {/* Relationship */}
        <div className='inputBox w-[75%] relative'>
          <input type='text' autoComplete='off' name='relationship' value={inputdata.relationship} onChange={changeHandle} required="required"
            className='w-full p-2 border-gray-400 border-2 rounded-md outline-none text-lg duration-500'
          />
          <span className='absolute left-0 p-3 pointer-events-none text-sm uppercase duration-500 font-[500] text-gray-500'>Relationship</span>
        </div>

        {/* age */}
        <div className='inputBox w-[75%] relative'>
          <input type='number' autoComplete='off' name='age' value={inputdata.age} onChange={changeHandle} required="required"
            className='w-full p-2 border-gray-400 border-2 rounded-md outline-none text-lg duration-500'
          />
          <span className='absolute left-0 p-3 pointer-events-none text-sm uppercase duration-500 font-[500] text-gray-500'>Age</span>
        </div>

        {/* Occasion */}
        <div className='inputBox w-[75%] relative'>
          <input type='text' autoComplete='off' name='occasion' value={inputdata.occasion} onChange={changeHandle} required="required"
            className='w-full p-2 border-gray-400 border-2 rounded-md outline-none text-lg duration-500'
          />
          <span className='absolute left-0 p-3 pointer-events-none text-sm uppercase duration-500 font-[500] text-gray-500'>Occasion</span>
        </div>

        {/* interests */}
        <div className='inputBox w-[75%] relative'>
          <input type='text' autoComplete='off' name='interests' value={inputdata.interests} onChange={changeHandle} required="required"
            className='w-full p-2 border-gray-400 border-2 rounded-md outline-none text-lg duration-500'
          />
          <span className='absolute left-0 p-3 pointer-events-none text-sm uppercase duration-500 font-[500] text-gray-500'>Interests</span>
        </div>

        {/* Budget */}
        <div className='inputBox w-[75%] relative'>
          <input type='number' autoComplete='off' name='budget' value={inputdata.budget} onChange={changeHandle} required="required"
            className='w-full p-2 border-gray-400 border-2 rounded-md outline-none text-lg duration-500'
          />
          <span className='absolute left-0 p-3 pointer-events-none text-sm uppercase duration-500 font-[500] text-gray-500'>Budget</span>
        </div>

        <button onClick={btnclickhandle} className='myButton2 h-11 w-[75%] rounded-lg text-white font-[500] tracking-wide text-lg cursor-default sm:cursor-pointer'>Get Gift Suggestions</button>

      </form>
    </div>
  )
}

export default Fields