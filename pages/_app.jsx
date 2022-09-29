// import App from 'next/app'
//componente que contiene el Navbar y el footer apareceran en todos lados
//de la aplicacion...
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/Layout/Layout"; 
import '../components/Carousel/carrousel.css';
// // Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// // Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";
// add bootstrap css 
// import 'bootstrap/dist/css/bootstrap.css'

//dentro de MyApp podemos usar providers como de redux context u otros...
function MyApp({ Component, pageProps }) {
    //Component engloba todo nuestra paginas...
    //tambien poidemos parar props adicionales...
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
                    rel="stylesheet" 
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
                    crossorigin="anonymous"
                />
            </Head>
            <Script 
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
                crossorigin="anonymous"
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    ) 
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp
  