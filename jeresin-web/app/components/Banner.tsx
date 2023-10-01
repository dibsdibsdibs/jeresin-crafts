import Image from "next/image"

export default function Banner(){
    const text = 'Handcrafted and customizable resin creations made by Sisay'

    return(
        <div className="flex flex-row items-center py-10 px-20">
            <h1 className="font-bold text-5xl">
                {text}
            </h1>
            <Image
                className="rounded-t-3xl bg-center object-cover w-80 h-96"
                src='/banner-pic.jpg'
                width={500}
                height={500}
                alt=""
            />
        </div>
    )
}