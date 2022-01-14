import Head from 'next/head'
import React from 'react'
import Contact from '../components/Contact'
import Container from '../components/Container'
import Layout from '../components/Layout'

const contact = () => {
    return (
      <Layout bg='bg-contact'>
        <Head>
          <title>Decoz &mdash; Contact</title>
        </Head>      
        <Container>
          <Contact/>
        </Container>
      </Layout>
    )
}

export default contact
