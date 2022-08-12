import type { NextPage } from 'next'
import Head from 'next/head'
import Container from 'app/components/Container'

const SignIn: NextPage = () => {
  return (
    <Container id="dashboard-page" className="h-[100vh]" maxWidth="full">
      <Head>
        <title>SignIn | RemitWise</title>
        <meta name="description" content="RemitWise" />
      </Head>

      <div className="grid bg-cover bg-center bg-compound h-full px-36 py-16">
        <div className="font-poppins text-hero">Logo</div>
      </div>
    </Container>
  )
}

export default SignIn
