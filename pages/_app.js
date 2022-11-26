import Nav_baar from '../components/layout/Nav_baar';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav_baar/>
      <Component {...pageProps} />
    </>
  ); 
}

export default MyApp
