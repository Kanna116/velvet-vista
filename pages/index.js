import Head from "next/head";
import { useEffect, useState } from "react";
import HomePage from "./pages/homepage";

const Home = () => {


  const [load, setLoad] = useState({ transform: `translateY(0%)` });
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {

      setLoad({ transform: `translateY(-100%)` })

      document.body.style.overflow = 'visible';
      document.body.style.overflowX = 'hidden';
    }, 3000)
  }, [])

  return (
    <>
      <Head>
        <title>Velvet Vista</title>
      </Head>
      {
        <div style={load} className='w-screen h-screen fixed top-0 left-0  z-[100] bg-white flex items-center justify-center transition-all duration-500'>
          <div className='h-2/3 aspect-square flex items-center justify-center overflow-hidden'>
            <video className='w-full h-full  object-cover transition-all duration-500' muted autoPlay={true}>
              <source src='/video/loading-video.mp4' />
            </video>
          </div>
        </div>
      }

      <div className="bg-black w-screen h-screen relative ">
        <HomePage />
      </div>

    </>
  )
}

export default Home

