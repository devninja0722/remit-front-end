import Container from "app/components/Container"
import Head from "next/head"

const SendMoney = () => {
  return (
    <Container id="boostv3-page" className="py-4 md:py-8 lg:py-12" maxWidth="7xl">
      <Head>
        <title key="title">Send Money | RemitWise</title>
        <meta key="description" name="description" content="Send Money RemitWise" />
      </Head>
      <div className="flex flex-col justify-start flex-grow w-full h-full px-4 py-4 space-y-6 md:px-6">
      </div>
    </Container>
  )
}

export default SendMoney