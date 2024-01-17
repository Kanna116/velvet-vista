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
            <div className='w-[100vw] h-[350vh]  flex flex-wrap relative '>

                <div className=" w-1/2 h-[125vh] flex flex-col items-start justify-center px-32 gap-5 bg-white z-10 shrink-0 ">
                    <h1 className='font-secondary text-4xl text-zinc-700'>A Legendary Gift</h1>
                    <p className='text-sm text-zinc-500'>So the legend goes, the Naga Dragon sits atop a volcano by day, fiercely guarding his people. Each night, he dives into the ocean to visit his true love, the Pearl. Each morning, as he flies back to his volcano, he nurtures the ground with water from his scales.</p>
                    <p className='text-sm text-zinc-500'>Inspired by this story, our hand-carved Naga pieces symbolize love, protection and prosperity for their wearer.</p>
                    <button className='border-b-[2px] border-black font-semibold text-sm text-zinc-500 uppercase'>Discover NAGA</button>
                </div>
                <div className=" w-1/2 h-[125vh] overflow-hidden z-10 shrink-0 sticky top-0 " >
                    <Image
                        src={`/images/sticky-images/naga.webp`}
                        fill={true}
                        alt='NAGA'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className=" w-1/2 h-[125vh] overflow-hidden z-10 shrink-0 sticky top-0 " >
                    <Image
                        src={`/images/sticky-images/naga-2.webp`}
                        fill={true}
                        alt='NAGA'
                        className='w-full h-full object-cover'

                    />
                </div>
                <div className=" w-1/2 h-[125vh] p-[10vw] z-20  bg-white" >
                    <BigBox {...newCollection} />
                </div>



                <div className="h-[100vh] w-full z-40" >
                    <BigBox {...footerBox} width='full' />
                </div>

            </div>
        </>

    )
}

export default StickySection

