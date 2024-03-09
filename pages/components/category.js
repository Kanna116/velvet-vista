import Image from 'next/image';
import Link from 'next/link';

const CategoryCard = (props) => {

    const { title, image, category,gender } = props;

    return (
        <Link href={`/pages/${gender}/${category}`}  className='h-fit w-fit shrink-0'>
            <div className="card w-full h-full lg:max-h-[50vh] md:max-h-[40vh] max-h-[30vh] lg:max-w-[200px] md:max-w-[150px] max-w-[40vw]  flex flex-col items-center justify-between">
                <div className='w-full aspect-square overflow-hidden'>
                    <Image
                        src={`/images/category/${image}`}
                        width={1000}
                        height={1000}
                        className="h-full w-full bg-red-300 object-cover hover:scale-110 transition-transform duration-300"
                        alt={`${title}`}
                    />
                </div>

                <h3 className="my-2 font-bold capitalize text-zinc-600">{title}</h3>
            </div>
        </Link>
    )
}

export default CategoryCard