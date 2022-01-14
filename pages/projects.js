import Head from 'next/head'
import React from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Projects from '../components/Projects'

const projects = () => {
    return (
      <Layout bg='bg-projects'>
        <Head>
          <title>Decoz &mdash; Projects</title>
        </Head>
        <Container>
          <Projects/>
        </Container>
      </Layout>
    )
}

export default projects
