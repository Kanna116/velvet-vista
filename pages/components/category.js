import Image from 'next/image';
import Link from 'next/link';

const Category = (props) => {

    const { title, image } = props;
    return (
        <Link href={'/products/productpage'} className='h-full w-full' prefetch={false}>
            <div className="card w-full h-full  flex flex-col items-center justify-between">
                <div className='w-full aspect-square overflow-hidden'>
                    <Image
                        src={`/images/category/${image}`}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                        alt={`${title}`}
                    />
                </div>

                <h3 className="my-2 font-bold capitalize text-zinc-600">{title}</h3>
            </div>
        </Link>
    )
}

export default Category