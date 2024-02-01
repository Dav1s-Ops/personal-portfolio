import React from 'react'

const Contact = () => {

  return (
    <div id='contact' className='max-w-[1040px] m-auto xl
    :pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-mussels-bold text-center text-dark_gray'>
        Contact
      </h1>
      <form action='https://getform.io/f/b09652ff-93d0-4cd8-a2cf-5e877e03adc9' method='POST' encType='multipart/form-data' className='font-mussels md:ml-5'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
        <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' required />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone Number</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300'type='text' name='phone' required />
          </div>
        </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Email</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email' />
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Subject</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject' required minLength="5" />
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Message</label>
            <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message' required ></textarea>
          </div>
          <button className='bg-dark_gray text-gray-100 mt-4 w-full p-4 rounded-lg hover:scale-105 ease-in duration-200 hover:bg-dark_gray hover:text-alien_green hover:px-4 hover:py-4 hover:rounded-md'>
            Send Message
          </button>
      </form>
    </div>
  )
}

export default Contact