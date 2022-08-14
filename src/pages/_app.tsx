import { Fragment, FunctionComponent } from 'react'
import { NextComponentType, NextPageContext } from 'next'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Dots from 'app/components/Dots'
import DefaultLayout from 'app/layouts/Default'
import store, { persistor } from 'app/states'
import 'app/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps & {
  Component: NextComponentType<NextPageContext> & {
    Guard: FunctionComponent
    Layout: FunctionComponent
    Provider: FunctionComponent
  }
}) => {
  const Provider: any = Component.Provider || Fragment
  const Layout: any = Component.Layout || DefaultLayout
  const Guard: any = Component.Guard || Fragment

  return (
    <Fragment>
      <Head>RemitWise</Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <ReduxProvider store={store}>
        <PersistGate loading={<Dots>loading</Dots>} persistor={persistor}>
          <>
          </>
          <Provider>
            <Layout>
              <Guard>
                <Component {...pageProps} />
              </Guard>
            </Layout>
          </Provider>
        </PersistGate>
      </ReduxProvider>
    </Fragment>
  )
}

export default MyApp
