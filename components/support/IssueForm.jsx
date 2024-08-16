import React from 'react'

const IssueForm = () => {
  return (
    <div className='mt-10 w-full bg-white border rounded-[6px]'>
      <div className='p-[20px]'>
        <h1 className='text-[20px] text-main font-semibold'>
          What is your issue?
        </h1>
        <div className='mt-5'>
          <p className='text-body text-[13px] mb-1 '>Ticket Type</p>
          <div className='max-w-[250px] border px-3 py-2  rounded-[6px]'>
            <select className=' w-full  text-main text-[14px]' name='' id=''>
              <option value=''>Sales</option>
            </select>
          </div>
        </div>
        <div className='mt-5'>
          <p className='text-body text-[13px] mb-1 '>
            Which service is affected?
          </p>
          <div className='max-w-[250px] border px-3 py-2  rounded-[6px]'>
            <select className=' w-full  text-main text-[14px]' name='' id=''>
              <option value=''>Server #3</option>
            </select>
          </div>
        </div>
        <div className='mt-5'>
          <p className='text-body text-[13px] mb-1 '>How sever is the issue?</p>
          <div className='max-w-[250px] border px-3 py-2  rounded-[6px]'>
            <select className=' w-full  text-main text-[14px]' name='' id=''>
              <option value=''>High</option>
              <option value=''>Medium</option>
              <option value=''>Low</option>
            </select>
          </div>
        </div>
        <div className='mt-5'>
          <p className='text-body text-[13px] mb-1 '>
            Describe the problem you&apos;re having
          </p>
          <textarea
            className='border rounded-[6px] p-[15px] w-full'
            name=''
            id=''
            cols='30'
            rows='5'></textarea>
        </div>
      </div>
      <div className='border-t w-full bg-[#FAFAFA] flex items-center justify-end py-[15px] px-[20px]'>
        <button className='bg-main text-white font-medium px-[15px] text-[14px] py-[8px] rounded-[6px]'>
          Submit
        </button>
      </div>
    </div>
  )
}

export default IssueForm
