import Head from 'next/head'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Overview from '../components/Overview'


const overview = () => {
    return (
        <Layout bg='bg-overview'>
        <Head>
            <title>Decoz &mdash; Overview</title>
        </Head>
        <Container>
            <Overview/>
        </Container>
        </Layout>
    )
}

export default overview
