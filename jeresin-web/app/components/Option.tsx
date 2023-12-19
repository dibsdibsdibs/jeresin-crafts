import Image from "next/image"

export default function Option({opt}: any){

    return(
        <div className="w-2/3 align-center">
            <div className='font-semibold'>
                <p>Text</p>
            </div>
            <div className='flex bg-loulou'>
                <Image
                    className="rounded-md bg-center object-cover w-64 h-64"
                    src={opt.img}
                    width={500}
                    height={500}
                    alt=""
                />
                <div className='text-white font-bold'>
                    <p>{opt.name}</p>
                    <p>{opt.price}</p>
                </div>
            </div>
        </div>
    )
}