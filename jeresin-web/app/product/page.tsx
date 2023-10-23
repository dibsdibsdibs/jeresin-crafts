"use client"
import Button from "../components/Button";
import TextHeader from "../components/TextHeader";
import Image from "next/image"
import Counter from "../components/Counter"

export default function ProductDisp(){
    return(
        <div className="text-loulou p-10">
            <div className="flex flex-row">
                <div>
                    <Image
                        className=""
                        src="/col-aqua/1.jpg"
                        width={300}
                        height={300}
                        alt=""
                    />
                </div>
                <div className="flex flex-col">
                    <div>
                        <TextHeader text="Product Name" />
                        <p className="text-2xl font-bold">Price</p>
                        <Counter />
                        <Button label="Add to cart" />
                    </div>
                    <div>
                        <p className="font-bold">Details</p>
                        <p>lorem ipsum color</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}