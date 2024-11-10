import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Contact= () => {
    return (
        <div id='Contact' className='pt-70 container'>
         <div className='grid md:grid-cols-8 gap-40'>
         <div className='space-y-8'>
            <h2 className='text-5xl'>contact me</h2>
         <p className='text-gray-200 text-[20pxl pt-2'>
          you can call me or send me a message
          </p>
          <div className='flex gap-4 item-center'>
              <MdAttachEmail size={35} /> sid.naveed@gmail.com
          </div>
          <div className='flex gap-4 item-center'>
              < FaPhoneAlt size={35} /> (0333-1308103)
          </div>
         </div>
         <div className='space-y-10'>
          <div className='flex flex-col gap-4'>
            <label htmlFor="name">Name</label>
            <input type="text"
            className='h-[70px] bg-transparent border border-accent'
            id='name'/>
            </div>  
            <div className='space-y-8'>
          <div className='flex flex-col gap-4'>
            <label htmlFor="email">Email</label>
            <input type="text"
            className='h-[65px] bg-transparent border border-accent'
            id='email'/>
            </div>  
            <div className='space-y-8'>
          <div className='flex flex-col gap-4'>
            <label htmlFor="message">Massage</label>
            <textarea
            className='h-[45px] bg-transparent border border-ancent'
            id='message' rows={6}>
                </textarea>
            </div>  
            <button className='bg-accent p-4 px-8'>Send</button>
         </div>
         </div>
        </div>
    </div>
</div>
    )
}
export default Contact 