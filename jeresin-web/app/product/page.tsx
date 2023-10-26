"use client"
import Button from "../components/Button";
import TextHeader from "../components/TextHeader";
import Image from "next/image"
import Counter from "../components/Counter"

export default function ProductDisp(){
    return(
        <div className="text-loulou p-10">
            <div className="grid grid-cols-2 place-items-center">
                <div className="justify-center">
                    <Image
                        className=""
                        src="/col-aqua/1.jpg"
                        width={300}
                        height={300}
                        alt=""
                    />
                </div>
                <div className="flex flex-col">
                    <TextHeader text="Product Name" />
                    <div className="flex flex-col justify-between h-28">
                        <p className="text-2xl font-bold">Price</p>
                        <Counter />
                        <Button label="Add to cart" />
                    </div>
                    <div>
                        <p className="font-bold mt-8">Details</p>
                        <p>lorem ipsum color</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}