import '../styles/globals.css'
import Link from "next/link"

function MyApp({ Component, pageProps }) {
  return (
      <div>
          <nav className='border-b p-6'>
              <p className='text-4xl font-bold'> Metaverse Marketplace App </p>
              <div className='flex mt-6'>
                  <Link href='/'><a className='mr-6 text-black-500'>Home</a></Link>
                  <Link href='/create-item'><a className='mr-6 text-black-500'>Sell a New digital asset</a></Link>
                  <Link href='/my-assets'><a className='mr-6 text-black-500'>My digital Assets</a></Link>
                  <Link href='/creator-dashboard'><a className='mr-6 text-black-500'>Creator Dashboard</a></Link>
              </div>


          </nav>
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
