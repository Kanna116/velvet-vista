import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { RiPinterestLine } from "react-icons/ri";
import Newsletter from './newsletter';

const Footer = () => {
   

    return (
        <footer className='w-full lg:h-[70vh] md:h-[70vh] h-fit lg:px-10 md:px-7 px-5 py-20 flex items-center justify-between lg:gap-10 md:gap-5 gap-5 text-[#707070] flex-wrap'>
            <div className="footer-one lg:w-1/3 md:w-1/3 w-full h-full  mr-auto flex flex-col items-start justify-between gap-10 lg:gap-0 md:gap-0">

                <Newsletter />

                <div className='w-full flex flex-col gap-2'>
                    <h1 className='font-medium text-sm mb-2 tracking-wide uppercase'>CONTACT US</h1>
                    <h2 className='text-sm'>Email: clientcare@johnhardy.com</h2>
                    <h2 className='text-sm'>Phone: 1-888-838-3022</h2>
                    <h2 className='text-sm'>Hours: Monday – Thursday: 9AM – 7PM ET, Friday: 9AM – 2PM ET</h2>
                </div>
                <h1 className='text-sm text-black lg:block md:block hidden '> Klax Velvet Vista</h1>
            </div>
            <div className="footer-two h-full lg:w-1/4 md:w-1/4 w-full  flex flex-col items-start justify-start lg:gap-20 md:gap-20 gap-5">
                <ul className='[&>li]:text-sm font-light'>
                    <h1 className='font-medium text-sm mb-2 tracking-wide'>ABOUT US</h1>
                    <li>Store Locator</li>
                    <li>Boutiques</li>
                    <li>Corporate Gifting</li>
                    <li>Careers</li>
                </ul>
                <ul className='[&>li]:text-sm font-light'>
                    <h1 className='font-medium text-sm mb-2 tracking-wide'>LEGAL</h1>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Accessibility Statement</li>
                    <li>Responsible Business Practices</li>
                    <li>Provenance Claim</li>
                </ul>
            </div>
            <div className="footer-three h-full lg:w-1/4 md:w-1/4 w-full  flex flex-col items-start justify-start lg:gap-20 md:gap-20 gap-5">
                <ul className='[&>li]:text-sm font-light'>
                    <h1 className='font-medium text-sm mb-2 tracking-wide'>HELP</h1>
                    <li>Contact Us</li>
                    <li>Frequently Asked Questions</li>
                    <li>Shipping</li>
                    <li>Returns</li>
                    <li>Repair Service</li>
                </ul>
                <div>
                    <h1 className='font-medium text-sm mb-2 ' >SOCIAL</h1>
                    <ul className='list-none flex items-center justify-start gap-2 [&>*]:text-2xl mt-5'>
                        <li><CiFacebook /></li>
                        <li><FaXTwitter /></li>
                        <li><CiInstagram /></li>
                        <li><CiLinkedin /></li>
                        <li><RiPinterestLine /></li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer


