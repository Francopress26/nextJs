import '@/styles/globals.css'
import { NextPage } from 'next'
import { AppProps } from 'next/app';
import { ReactElement,ReactNode } from 'react'



type NextPageWithLayout = NextPage &{
  getLayout?: (page:ReactElement)=>ReactNode;   //React Node es lo mismo que JSX.Element
}

type AppPropsWithLayout = AppProps &{
  Component:NextPageWithLayout
}



export default function App({ Component, pageProps }:AppPropsWithLayout) {

  //Si el componente q se viene a renderizar tiene un layout, lo aplica, sino devuelve la pagina tal cual
 const getLayout = Component.getLayout || ((page)=>page)

  return getLayout(<Component {...pageProps} />)
}
