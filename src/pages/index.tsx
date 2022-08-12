import type { NextPage } from 'next'
import Head from 'next/head'
import Container from 'app/components/Container'

const Dashboard: NextPage = () => {
  return (
    <Container id="dashboard-page" maxWidth="full">
      <Head>
        <title>Dashboard | RemitWise</title>
        <meta name="description" content="RemitWise" />
      </Head>
    </Container>
  )
}

export default Dashboard
