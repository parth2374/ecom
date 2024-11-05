import React from 'react'
import Title from './../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from './../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus possimus temporibus voluptatem velit, consectetur dignissimos deserunt soluta eligendi nostrum nesciunt, iusto, quod at! Totam animi quos est sint quis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus possimus temporibus voluptatem velit, consectetur dignissimos deserunt soluta eligendi nostrum nesciunt, iusto, quod at! Totam animi quos est sint quis?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde eius, ut expedita qui, accusamus ducimus aspernatur dolor minus, tempora nam vitae voluptas eveniet magnam dolorem quos quaerat. Quo magni labore asperiores vero perferendis corrupti, mollitia minus accusantium hic nisi natus, dolores inventore et. Quibusdam corrupti qui id illum quam!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos doloribus dolores tempora dolorem corporis obcaecati ipsam eos debitis et beatae reiciendis corrupti fuga itaque eligendi, nisi possimus minus exercitationem rerum neque repudiandae temporibus dicta ratione. Voluptate inventore rerum aliquid laborum!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos doloribus dolores tempora dolorem corporis obcaecati ipsam eos debitis et beatae reiciendis corrupti fuga itaque eligendi, nisi possimus minus exercitationem rerum neque repudiandae temporibus dicta ratione. Voluptate inventore rerum aliquid laborum!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos doloribus dolores tempora dolorem corporis obcaecati ipsam eos debitis et beatae reiciendis corrupti fuga itaque eligendi, nisi possimus minus exercitationem rerum neque repudiandae temporibus dicta ratione. Voluptate inventore rerum aliquid laborum!</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
