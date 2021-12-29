import React from 'react'
import getUser from '../utils/getUser'

import { RiGitRepositoryLine } from 'react-icons/ri'
import { GoGist, GoStar } from 'react-icons/go'
import { FiUsers } from 'react-icons/fi'
import PageHead from '../componentes/PageHead'
import Hero from '../componentes/Hero'

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto bg-network'>
      <PageHead />
      <Hero />

      <div className='bg-white rounded-lg shadow-lg py-12 px-16'>
        <h3 className='text-4xl text-center text-purple'>O que eu faço</h3>
        <p className='text-2xl'>Fullstack Developer</p>
      </div>

      <div>
        <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-purple'>My Education</h3>
        <div className='md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg py-6'>
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
        <div className='md:grid md:grid-cols-3 md:gap-2 my-6'>
          {
            repos.map(repo => {
              return (
                <div key={repo.id} className='rounded bg-white p-4 hover:shadow-md'>
                  <h3 className='font-bold hover:underline'><a className='cursor-pointer' href={'https://github.com/' + repo.full_name} target='_blank'>{repo.full_name}</a></h3>
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