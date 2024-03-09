import Image from 'next/image';
import Link from 'next/link';

const BigBox = (props) => {
  const { title, desc, image, width, link } = props;
  return (
    <div className={`lg:w-1/2 md:w-1/2 w-full lg:h-[100vh] md:h-[100vh] h-[70vh] relative lg:p-14 md:p-10 p-8 text-white flex items-start justify-end flex-col lg:gap-5 md:gap-5 gap-2 bg-gradient-to-t from-[#000000aa] to-[transparent] w-${width}`}>
      <h2 className='text-xl font-secondary'>{title}</h2>
      <p className={`text-sm w-${width}`}>{desc}</p>
      <button className='border-white border-b-2 text-sm font-semibold uppercase '>
        <Link href={`${link}`} >
          Shop Now
        </Link>
      </button>

      <Image
        src={`/images/${image}`}
        fill={true}
        alt={title}
        className='w-full h-full lg:object-fill md:object-fill object-cover absolute top-0 left-0 z-[-1]'
      />
    </div>
  )
}

export default BigBox