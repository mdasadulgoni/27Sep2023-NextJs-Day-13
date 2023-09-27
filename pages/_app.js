import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '../styles/globals.css'
import CommonLayout from "../components/layout/CommonLayout";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <CommonLayout>
        <Component {...pageProps} />
      </CommonLayout>
      
    </>
  ) 
}

export default MyApp
