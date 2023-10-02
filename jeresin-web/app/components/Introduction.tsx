import Image from "next/image"

export default function Introduction(){
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a fringilla velit. In eleifend est id velit laoreet tristique.'
    return(
        <div className="flex bg-charm text-loulou font-semibold text-4xl">
            <Image
                className=""
                src='/intro.jpg'
                width={300}
                height={300}
                alt=""
            />
            <div className="p-10 flex items-center">
                <p>{text}</p>
            </div>
        </div>
    )
}