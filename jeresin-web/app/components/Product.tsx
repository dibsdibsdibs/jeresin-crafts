import Image from "next/image"

export default function Product(){
    const name = 'name'
    const price = 'price'

    return(
        <div className="bg-trendy rounded-2xl p-4">
            <Image
                className="rounded-2xl object-cover h-52 w-52"
                src='/col-aqua/1.jpg'
                width={300}
                height={300}
                alt="" 
            />
            <div className="font-bold text-center text-white gap">
                <h3 className="text-3xl">{name}</h3>
                <p className="text-lg">{price}</p>
            </div>
        </div>
    )
}