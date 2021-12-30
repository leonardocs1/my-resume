import React from 'react'
import { FaLinkedin, FaGithub, FaTwitterSquare, FaWhatsapp } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='md:grid md:grid-cols-2 md:pt-16 leading-none'>
      <div className='pt-16 md:pt-32'>
        <h1 className='text-4xl uppercase pl-16'>Olá, Eu sou Leonardo Costa</h1>
        <h2 className='text-4xl font-bold md:text-5xl uppercase pl-16'>Fullstack Developer</h2>
        <div className='mx-8 px-8 relative border-purple border rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6'>
          <h3 className='absolute top-0 -mt-5 py-2 px-6 text-white text-2xl font-bold uppercase bg-purple'>Contato</h3>
          <ul className='flex flex-auto'>
            <a href='https://www.linkedin.com/in/leonardocostasantos/' className='cursor-pointer hover:text-purple' target="_blank"><li><FaLinkedin className='text-4xl md:text-5xl mr-6' /></li></a>
            <a href='https://github.com/leonardocs1' className='cursor-pointer hover:text-purple' target="_blank"><li><FaGithub className='text-4xl md:text-5xl mr-6' /></li></a>
            <a href='https://twitter.com/leonardoCode1' className='cursor-pointer hover:text-purple' target="_blank"><li><FaTwitterSquare className='text-4xl md:text-5xl mr-6' /></li></a>
            <a href='https://api.whatsapp.com/send?phone=5599991519688&text=Ol%C3%A1!%20Eu%20vi%20seu%20curr%C3%ADculo%20online%20e%20me%20interessei%20no%20seu%20perfil.%20' className='cursor-pointer hover:text-purple' target="_blank"><li><FaWhatsapp className='text-4xl md:text-5xl mr-6' /></li></a>
          </ul>
          <p className='mt-2'>Ou envie um email: <span className='font-bold'>leonardo.costa.santos.si@gmail.com</span></p>
        </div>
      </div>
      <div className='mx-2'>
        <img src='/images/leonardo-costa.png'></img>
      </div>
    </div>
  )
}
export default Hero