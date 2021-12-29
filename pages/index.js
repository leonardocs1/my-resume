import React from 'react'
import Head from 'next/head'
import getUser from '../utils/getUser'
import { FaLinkedin, FaGithub, FaTwitterSquare, FaWhatsapp } from 'react-icons/fa'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { GoGist, GoStar } from 'react-icons/go'
import { FiUsers } from 'react-icons/fi'

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto bg-network'>
      <Head>
        <title>Leonardo Costa - Developer</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head >
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

      <div>
        <h3 className='text-4xl font-bold text-center uppercase mt-10 text-purple'>Contribuições</h3>
        <p className='text-center mb-4'>Github stats: <RiGitRepositoryLine className='inline-block' /> {user.public_repos} / <GoGist className='inline-block' /> {user.public_gists} /  <FiUsers className='inline-block' /> {user.followers}</p>
        <div className='grid grid-cols-3 gap-2 my-8'>
          {
            repos.map(repo => {
              return (
                <div key={repo.id} className='rounded bg-white p-4 hover:shadow-md cursor-pointer'>
                  <h3 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name} target='_blank'>{repo.full_name}</a></h3>
                  <p>{repo.language} / <GoStar className='inline-block' />: {repo.stargazers_count}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div>
        <p className='text-center my-8 py-4 border-t-2'>Você pode encontrar o código-fonte desse site aqui.</p>
      </div>
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