import TextHeader from "./TextHeader"
import Product from "./Product"

export default function Featured(){
    const featname = "Featured Collection Name"

    return(
        <div className="flex flex-col items-center p-5">
            <TextHeader text="FEATURED" />
            <p className="font-bold text-2xl text-loulou mt-2.5">{featname}</p>
            <div className="p-10">
                <Product />
            </div>
        </div>
    )
}