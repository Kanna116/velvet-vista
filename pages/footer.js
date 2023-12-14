import Newsletter from './components/newsletter';
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { RiPinterestLine } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className='w-full h-[70vh] px-10 py-20 flex items-center justify-between gap-10 text-[#707070]'>
            <div className="footer-one w-1/3 h-full  mr-auto flex flex-col items-start justify-between">

                <Newsletter />

                <div className='w-full flex flex-col gap-2'>
                    <h1 className='font-medium text-sm mb-2 tracking-wide uppercase'>CONTACT US</h1>
                    <h2 className='text-sm'>Email: clientcare@johnhardy.com</h2>
                    <h2 className='text-sm'>Phone: 1-888-838-3022</h2>
                    <h2 className='text-sm'>Hours: Monday – Thursday: 9AM – 7PM ET, Friday: 9AM – 2PM ET</h2>
                </div>
                <h1 className='text-sm text-black'>&copy; Klax's Velvet Vista</h1>
            </div>
            <div className="footer-two h-full w-1/4  flex flex-col items-start justify-start gap-20">
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
            <div className="footer-three h-full w-1/4  flex flex-col items-start justify-start gap-20">
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


