import Head from 'next/head'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Homepage from '../components/Homepage'


export default function Home() {
  return (
    <Layout bg='bg-homepage'>
    <Head>
      <title>Decoz &mdash; Home</title>
    </Head>
    <Container>
      <Homepage/>
    </Container>
    </Layout>
  )
}
