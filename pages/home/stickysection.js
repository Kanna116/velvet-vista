import Image from 'next/image'
import BigBox from '../components/bigbox'

const StickySection = () => {

    const footerBox = {
        title: 'The Holiday Shop',
        desc: 'Find dream gifts and party pieces for the places you’ll go and the people you love. ',
        image: 'footer-above-image.webp',
        link: '/pages/men/Necklaces',
    }

    const newCollection = {
        title: 'Surf Collection',
        desc: 'Sculpted waves, scattered diamonds and a splash of freshwater pearl.',
        image: 'sticky-images/naga-3.webp',
        width: 'full',
        link: '/pages/women/Rings',
    }
    const styles = {
    }
    return (
        <>
            <div className='w-screen lg:h-[350vh] md:h-[350vh] h-fit  flex flex-wrap lg:flex-row md:flex-row flex-col relative '>

                <div className=" lg:w-1/2 md:w-1/2 w-full lg:h-[125vh] md:h-[125vh] h-fit flex flex-col items-start justify-center lg:px-32 md:px-16 px-10 py-10 gap-5 bg-white z-10 shrink-0 ">
                    <h1 className='font-secondary text-4xl text-zinc-700'>A Legendary Gift</h1>
                    <p className='text-sm text-zinc-500'>So the legend goes, the Naga Dragon sits atop a volcano by day, fiercely guarding his people. Each night, he dives into the ocean to visit his true love, the Pearl. Each morning, as he flies back to his volcano, he nurtures the ground with water from his scales.</p>
                    <p className='text-sm text-zinc-500'>Inspired by this story, our hand-carved Naga pieces symbolize love, protection and prosperity for their wearer.</p>
                    <button className='border-b-[2px] border-black font-semibold text-sm text-zinc-500 uppercase'>Discover NAGA</button>
                </div>
                <div className=" lg:w-1/2 md:w-1/2 w-full lg:h-[125vh] md:h-[125vh] h-[50vh] overflow-hidden z-10 shrink-0 lg:sticky md:sticky relative top-0 " >
                    <Image
                        src={`/images/sticky-images/naga.webp`}
                        fill={true}
                        alt='NAGA'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className=" lg:w-1/2 md:w-1/2 w-full lg:h-[125vh] md:h-[125vh] h-[50vh] overflow-hidden z-10 shrink-0 lg:sticky md:sticky relative top-0 " >
                    <Image
                        src={`/images/sticky-images/naga-2.webp`}
                        fill={true}
                        alt='NAGA'
                        className='w-full h-full object-cover'

                    />
                </div>
                <div className=" lg:w-1/2 md:w-1/2 w-full lg:h-[125vh] md:h-[125vh] h-fit lg:p-[10vw] md:p-[5vw] p-[24px]  z-20  bg-white" >
                    <BigBox {...newCollection} />
                </div>



                <div className="h-fit md;h-[100vh] lg:h-[100vh] w-full z-40" >
                    <BigBox {...footerBox} width='full' />
                </div>

            </div>
        </>

    )
}

export default StickySection

