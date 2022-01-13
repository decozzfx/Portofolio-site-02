import Head from 'next/head'
import React from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Skills from '../components/Skills'

const skills = () => {
    return (
        <Layout bg='bg-skills'>
            <Head>
                <title>Decoz &mdash Skills</title>
            </Head>
            <Container>
                <Skills/>
            </Container>
        </Layout>
    )
}

export default skills
