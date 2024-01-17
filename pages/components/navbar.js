import Link from "next/link";
import { useState } from "react";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import Bag from "./bag";


const Navbar = () => {

    const [bag, setBag] = useState(false);
    const toggleBag = () => {
        setBag(prevState => !prevState)
    }

    return (
        <>
            <div className="navbar w-full bg-[#000000aa]   flex items-center justify-between  px-20 py-4  fixed top-0 z-50  transition-all duration-300 font-normal   [&>*]:font-normal">
                <ul className="w-full flex items-center justify-start list-none gap-[2vw]  text-xs   uppercase font-primary ">
                    <li className="velvet-effect"><Link href={'/pages/women'} > Women</Link></li>
                    <li className="velvet-effect"><Link href={'/pages/men'} > Men</Link></li>
                    <li className="velvet-effect">Gifts</li>
                    <li className="velvet-effect">Collections</li>
                    <li className="velvet-effect">Curated Shops</li>
                </ul>

                <Link href={'/'} className="mx-10 w-fit cursor-pointer" >
                    <span className="logo  z-50 ">
                        <svg width="452" height="175" viewBox="0 0 452 175" xmlns="http://www.w3.org/2000/svg" className="hover:scale-110 h-full w-24 object-contain duration-200 ease-in">
                            <path d="M27.9125 149.175L7.7875 28.25H0.35V26.5H29.225V28.25H21.9625L35.2625 113.562H34.475L46.6375 28.25H39.725V26.5H56.6125V28.25H48.5625L30.8 149.175H27.9125ZM81.401 150.575C77.801 150.575 74.701 149.425 72.101 147.125C69.551 144.825 67.451 141.725 65.801 137.825C64.201 133.925 63.001 129.525 62.201 124.625C61.451 119.725 61.076 114.7 61.076 109.55C61.076 102.85 61.626 97.025 62.726 92.075C63.826 87.075 65.301 82.95 67.151 79.7C69.051 76.45 71.176 74.025 73.526 72.425C75.926 70.825 78.376 70.025 80.876 70.025C83.826 70.025 86.426 70.95 88.676 72.8C90.976 74.65 92.876 77.15 94.376 80.3C95.926 83.45 97.076 87.025 97.826 91.025C98.626 95.025 99.026 99.15 99.026 103.4C99.026 104.2 99.026 105 99.026 105.8C99.026 106.6 99.001 107.425 98.951 108.275H71.426V106.775H87.776C87.776 99.525 87.576 93.25 87.176 87.95C86.826 82.65 86.151 78.575 85.151 75.725C84.151 72.875 82.726 71.45 80.876 71.45C79.126 71.45 77.626 72.8 76.376 75.5C75.126 78.2 74.176 82.3 73.526 87.8C72.876 93.25 72.551 100.125 72.551 108.425C72.551 113.675 72.626 118.725 72.776 123.575C72.926 128.425 73.326 132.75 73.976 136.55C74.676 140.3 75.726 143.275 77.126 145.475C78.576 147.675 80.551 148.775 83.051 148.775C86.901 148.775 89.951 147.75 92.201 145.7C94.501 143.6 96.026 141.325 96.776 138.875L98.051 139.625C96.951 142.575 95.051 145.15 92.351 147.35C89.651 149.5 86.001 150.575 81.401 150.575ZM104.571 149V147.5H110.346V38H104.571V36.5H121.521V147.5H127.371V149H104.571ZM152.615 149.3L137.465 71.975H131.915V70.475H154.94V71.975H149.54L158.615 122.3L167.69 71.975H162.065V70.475H174.59V71.975H169.415L155.015 149.3H152.615ZM199.907 150.575C196.307 150.575 193.207 149.425 190.607 147.125C188.057 144.825 185.957 141.725 184.307 137.825C182.707 133.925 181.507 129.525 180.707 124.625C179.957 119.725 179.582 114.7 179.582 109.55C179.582 102.85 180.132 97.025 181.232 92.075C182.332 87.075 183.807 82.95 185.657 79.7C187.557 76.45 189.682 74.025 192.032 72.425C194.432 70.825 196.882 70.025 199.382 70.025C202.332 70.025 204.932 70.95 207.182 72.8C209.482 74.65 211.382 77.15 212.882 80.3C214.432 83.45 215.582 87.025 216.332 91.025C217.132 95.025 217.532 99.15 217.532 103.4C217.532 104.2 217.532 105 217.532 105.8C217.532 106.6 217.507 107.425 217.457 108.275H189.932V106.775H206.282C206.282 99.525 206.082 93.25 205.682 87.95C205.332 82.65 204.657 78.575 203.657 75.725C202.657 72.875 201.232 71.45 199.382 71.45C197.632 71.45 196.132 72.8 194.882 75.5C193.632 78.2 192.682 82.3 192.032 87.8C191.382 93.25 191.057 100.125 191.057 108.425C191.057 113.675 191.132 118.725 191.282 123.575C191.432 128.425 191.832 132.75 192.482 136.55C193.182 140.3 194.232 143.275 195.632 145.475C197.082 147.675 199.057 148.775 201.557 148.775C205.407 148.775 208.457 147.75 210.707 145.7C213.007 143.6 214.532 141.325 215.282 138.875L216.557 139.625C215.457 142.575 213.557 145.15 210.857 147.35C208.157 149.5 204.507 150.575 199.907 150.575ZM241.488 150.35C239.638 150.35 237.813 149.975 236.013 149.225C234.263 148.525 232.788 147.15 231.588 145.1C230.438 143.05 229.863 140.05 229.863 136.1V71.975H222.288V70.475H229.863C231.163 70.475 232.438 69.45 233.688 67.4C234.938 65.35 236.063 62.7 237.063 59.45C238.113 56.15 238.863 52.675 239.313 49.025H241.113V70.475H250.488V71.975H241.113V143.675C241.113 145.425 241.513 146.675 242.313 147.425C243.163 148.125 243.988 148.475 244.788 148.475C245.788 148.475 246.813 148.175 247.863 147.575C248.913 146.925 249.613 146.4 249.963 146L250.788 147.05C249.838 148 248.563 148.775 246.963 149.375C245.363 150.025 243.538 150.35 241.488 150.35Z" />
                            <path d="M275.925 153.15L258.675 49.5H252.3V48H277.05V49.5H270.825L282.225 122.625H281.55L291.975 49.5H286.05V48H300.525V49.5H293.625L278.4 153.15H275.925ZM303.247 153V151.5H309.922V75.975H303.247V74.475H321.172V151.5H327.997V153H303.247ZM315.472 59.775C313.272 59.775 311.422 59.025 309.922 57.525C308.422 55.975 307.672 54.125 307.672 51.975C307.672 49.875 308.422 48.075 309.922 46.575C311.422 45.075 313.272 44.325 315.472 44.325C317.522 44.325 319.272 45.075 320.722 46.575C322.222 48.075 322.972 49.875 322.972 51.975C322.972 54.125 322.222 55.975 320.722 57.525C319.272 59.025 317.522 59.775 315.472 59.775ZM349.576 154.65C347.426 154.65 345.526 154.3 343.876 153.6C342.226 152.95 340.801 152.3 339.601 151.65C338.401 150.95 337.401 150.6 336.601 150.6C336.101 150.6 335.726 150.825 335.476 151.275C335.276 151.675 335.126 152.25 335.026 153H333.826V130.725H335.326C335.576 133.475 336.051 136.2 336.751 138.9C337.451 141.55 338.376 143.95 339.526 146.1C340.726 148.25 342.176 149.975 343.876 151.275C345.576 152.525 347.551 153.15 349.801 153.15C351.951 153.15 353.676 152.55 354.976 151.35C356.326 150.1 357.276 148.55 357.826 146.7C358.426 144.8 358.726 142.85 358.726 140.85C358.726 138.6 358.226 136.25 357.226 133.8C356.276 131.3 354.926 128.775 353.176 126.225C351.476 123.675 349.526 121.225 347.326 118.875C343.326 114.525 340.101 110.1 337.651 105.6C335.201 101.05 333.976 96.025 333.976 90.525C333.976 86.825 334.726 83.775 336.226 81.375C337.726 78.925 339.701 77.1 342.151 75.9C344.601 74.65 347.201 74.025 349.951 74.025C351.751 74.025 353.301 74.275 354.601 74.775C355.901 75.225 356.976 75.7 357.826 76.2C358.726 76.65 359.451 76.875 360.001 76.875C360.451 76.875 360.751 76.65 360.901 76.2C361.101 75.75 361.226 75.175 361.276 74.475H362.626V96.075H361.126C360.876 92.925 360.476 90.1 359.926 87.6C359.376 85.05 358.676 82.9 357.826 81.15C356.976 79.35 355.901 77.975 354.601 77.025C353.301 76.075 351.751 75.6 349.951 75.6C347.351 75.6 345.176 76.5 343.426 78.3C341.726 80.05 340.876 82.725 340.876 86.325C340.876 89.775 341.926 93.25 344.026 96.75C346.176 100.25 348.926 103.8 352.276 107.4C355.126 110.4 357.576 113.375 359.626 116.325C361.726 119.275 363.326 122.3 364.426 125.4C365.576 128.45 366.151 131.775 366.151 135.375C366.151 139.325 365.451 142.75 364.051 145.65C362.701 148.5 360.776 150.725 358.276 152.325C355.776 153.875 352.876 154.65 349.576 154.65ZM389.802 154.35C387.952 154.35 386.127 153.975 384.327 153.225C382.577 152.525 381.102 151.15 379.902 149.1C378.752 147.05 378.177 144.05 378.177 140.1V75.975H370.602V74.475H378.177C379.477 74.475 380.752 73.45 382.002 71.4C383.252 69.35 384.377 66.7 385.377 63.45C386.427 60.15 387.177 56.675 387.627 53.025H389.427V74.475H398.802V75.975H389.427V147.675C389.427 149.425 389.827 150.675 390.627 151.425C391.477 152.125 392.302 152.475 393.102 152.475C394.102 152.475 395.127 152.175 396.177 151.575C397.227 150.925 397.927 150.4 398.277 150L399.102 151.05C398.152 152 396.877 152.775 395.277 153.375C393.677 154.025 391.852 154.35 389.802 154.35ZM421.057 154.575C418.307 154.575 415.782 153.95 413.482 152.7C411.182 151.45 409.357 149.5 408.007 146.85C406.657 144.15 405.982 140.6 405.982 136.2C405.982 131.4 406.857 127.45 408.607 124.35C410.357 121.2 412.532 118.575 415.132 116.475C417.732 114.325 420.332 112.425 422.932 110.775C425.532 109.125 427.707 107.4 429.457 105.6C431.207 103.75 432.082 101.525 432.082 98.925C432.082 95.025 431.857 91.325 431.407 87.825C430.957 84.275 430.132 81.375 428.932 79.125C427.732 76.875 425.957 75.75 423.607 75.75C421.257 75.75 419.132 76.675 417.232 78.525C415.382 80.375 414.457 82.55 414.457 85.05C414.457 86.25 414.632 87.35 414.982 88.35C415.382 89.3 415.732 90.275 416.032 91.275C416.382 92.225 416.557 93.325 416.557 94.575C416.557 96.425 416.182 97.975 415.432 99.225C414.682 100.425 413.482 101.025 411.832 101.025C410.232 101.025 409.057 100.35 408.307 99C407.557 97.65 407.182 95.775 407.182 93.375C407.182 89.975 407.957 86.8 409.507 83.85C411.057 80.9 413.207 78.525 415.957 76.725C418.707 74.925 421.882 74.025 425.482 74.025C428.932 74.025 431.982 74.95 434.632 76.8C437.332 78.65 439.457 81.475 441.007 85.275C442.557 89.075 443.332 93.95 443.332 99.9V146.325C443.332 148.275 443.632 149.675 444.232 150.525C444.832 151.375 445.557 151.8 446.407 151.8C447.057 151.8 447.707 151.65 448.357 151.35C449.007 151 449.507 150.675 449.857 150.375L450.682 151.725C450.232 152.225 449.307 152.725 447.907 153.225C446.507 153.725 444.807 153.975 442.807 153.975C441.157 153.975 439.557 153.7 438.007 153.15C436.507 152.65 435.257 151.775 434.257 150.525C433.307 149.225 432.807 147.525 432.757 145.425C432.507 146.575 431.907 147.875 430.957 149.325C430.057 150.725 428.782 151.95 427.132 153C425.532 154.05 423.507 154.575 421.057 154.575ZM424.657 151.275C425.957 151.275 427.182 150.825 428.332 149.925C429.482 148.975 430.382 147.825 431.032 146.475C431.732 145.125 432.082 143.825 432.082 142.575V103.875C431.982 105.275 431.182 106.85 429.682 108.6C428.232 110.3 426.557 112.3 424.657 114.6C422.807 116.9 421.157 119.675 419.707 122.925C418.307 126.125 417.607 129.9 417.607 134.25C417.607 139.55 418.082 143.725 419.032 146.775C419.982 149.775 421.857 151.275 424.657 151.275Z" />
                        </svg>
                    </span>
                </Link>

                <ul className="w-full  flex items-center justify-end list-none gap-[2vw]  text-xs  uppercase font-primary  ">
                    <li className='flex items-center justify-center gap-1 velvet-effect'>
                        <span className='text-xl font-bold'><CiSearch /></span>
                        Search
                    </li>
                    <li className='flex items-center justify-center  velvet-effect'>
                        <Link href={'/pages/wishlist'}  className="flex items-center justify-center gap-1">
                            <span className='text-xl font-bold '><CiHeart /></span>
                            Wishlist
                        </Link>
                    </li>

                    <li className='flex items-center justify-center gap-1 velvet-effect'>
                        <span className='text-xl font-bold'><CiUser /></span>
                        Account
                    </li>
                    <li className='flex items-center justify-center gap-1 velvet-effect'
                        onClick={toggleBag}>
                        <span className='text-xl font-bold'><IoBagHandleOutline /></span>
                        Bag
                    </li>

                </ul>
                <Bag bag={bag} toggle={toggleBag} />


            </div>
        </>
    )
}

export default Navbar