import CategorySection from "./category-section";
import CollectionSection from "./collectionsection";
import HeroSection from "./components/herosection";
import Navbar from "./components/navbar";
import Footer from "./footer";
import GiftingSection from "./giftingsection";
import LoveKnotSection from "./loveknotsection";
import StickySection from "./stickysection";

const Home = () => {


  return (
    <div className="bg-black w-screen h-screen relative ">  
      <Navbar />
      <HeroSection />
      <CategorySection />
      <GiftingSection />
      <LoveKnotSection />
      <CollectionSection />
      <StickySection />
      <Footer/>
    </div>
  )
}

export default Home

