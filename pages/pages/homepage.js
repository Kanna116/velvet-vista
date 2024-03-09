import { memo } from 'react'
// import Footer from '../components/footer'
import Navbar from '../components/navbar'
import CategorySection from '../home/category-section'
import CollectionSection from '../home/collectionsection'
import GiftingSection from '../home/giftingsection'
import HeroSection from '../home/herosection'
import LoveKnotSection from '../home/loveknotsection'
import StickySection from '../home/stickysection'

const HomePage = () => {

    return (
        <>
            <Navbar />
            <HeroSection />
            <CategorySection />
            <GiftingSection />
            <LoveKnotSection />
            <CollectionSection />
            <StickySection />
            {/* <Footer /> */}
        </>
    )
}

export default memo(HomePage)