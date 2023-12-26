import Image from "next/image"

export default function Option({opt}: any){

    return(
        <div className="flex flex-row align-center justify-around p-5 bg-loulou">
            <div className="h-52 w-52">
                <Image
                    className="rounded-md object-cover"
                    src={opt.img}
                    width={250}
                    height={250}
                    alt=""
                />
            </div>
            <div className='text-white font-bold'>
                <p>{opt.name}</p>
                <p>{opt.price}</p>
            </div>
        </div>
    )
}