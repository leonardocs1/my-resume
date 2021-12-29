import React from 'react'
import getUser from '../utils/getUser'
import { FaLinkedin, FaGithub, FaTwitterSquare, FaWhatsapp } from 'react-icons/fa';

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto bg-network'>
      <div className='grid grid-cols-2 pt-16 leading-none'>
        <div className='pt-32'>
          <h1 className='text-4xl uppercase pl-16'>Olá, Eu sou Leonardo Costa</h1>
          <h2 className='font-bold text-5xl uppercase pl-16'>Fullstack Developer</h2>
          <div className='relative border-purple border rounded px-16 pb-4 pt-10 mt-6'>
            <h3 className='absolute top-0 -mt-5 py-2 px-6 text-white text-2xl font-bold uppercase bg-purple'>Contato</h3>
            <ul className='flex flex-row'>
              <a href='https://www.linkedin.com/in/leonardocostasantos/' className='cursor-pointer hover:text-purple' target="_blank"><li><FaLinkedin className='text-5xl mr-6' /></li></a>
              <a href='https://github.com/leonardocs1' className='cursor-pointer hover:text-purple' target="_blank"><li><FaGithub className='text-5xl mr-6' /></li></a>
              <a href='https://twitter.com/leonardoCode1' className='cursor-pointer hover:text-purple' target="_blank"><li><FaTwitterSquare className='text-5xl mr-6' /></li></a>
              <a href='https://api.whatsapp.com/send?phone=5599991519688&text=Ol%C3%A1!%20Eu%20vi%20seu%20curr%C3%ADculo%20online%20e%20me%20interessei%20no%20seu%20perfil.%20' className='cursor-pointer hover:text-purple' target="_blank"><li><FaWhatsapp className='text-5xl mr-6' /></li></a>
            </ul>
            <p className='mt-2'>Ou envie um email: <span className='font-bold'>leonardo.costa.santos.si@gmail.com</span></p>
          </div>
        </div>
        <div>
          <img src='/images/leonardo-costa.png'></img>
        </div>
      </div>

      <div className='bg-white rounded-lg shadow-lg py-12 px-16'>
        <h3 className='text-4xl text-center text-purple'>O que eu faço</h3>
        <p className='text-2xl'>Fullstack Developer</p>
      </div>

      <div>
        <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-purple'>My Education</h3>
        <div className='grid grid-cols-2 leading-none bg-white rounded-lg shadow-lg py-6'>
          {[1, 2].map(i => (
            <div className='border-dashed border-l  px-12'>
              <h4 className='text-lg uppercase font-bold mb-2 text-purple'>Grau de Graduação</h4>
              <p className='text-2xl uppercase'>Sistemas de Informação<br />
                <span className='text-lg normal-case font-bold'> Faculdade de Balsas - Unibalsas</span></p>
            </div>))}
        </div>
      </div>

      <p>Github stats: public repos: {user.public_repos} / public_gists: {user.public_gists} / followers: {user.followers}</p>

      {
        repos.map(repo => {
          return (
            <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md cursor-pointer'>
              <h3 className='font-bold'>{repo.full_name}</h3>
              <p>{repo.language} / Stars: {repo.stargazers_count}</p>
            </div>
          )
        })
      }
    </div >
  )
}

export async function getServerSideProps(context) {
  const { repos, user } = await getUser('leonardocs1')
  return {
    props: {
      repos,
      user,
    }
  }
}

export default Index