import '../styles/main.scss'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import { LangProvider } from '../providers/langContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LangProvider>
      <Component {...pageProps} />
    </LangProvider>
  )
}

export default MyApp
