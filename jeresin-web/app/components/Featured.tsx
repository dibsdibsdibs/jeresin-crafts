import Spotlight from "./Spotlight";
import Button from "./Button";
import TextHeader from "./TextHeader";

export default function Featured(){
    return(
        <div className="flex flex-col items-center p-5">
            <TextHeader text="FEATURED" />
            <p className="font-bold text-4xl text-loulou mt-2.5">Featured Collection</p>
            <div className="p-10">
                <Spotlight />
            </div>
            <Button label="View From Collections" />
        </div>
    )
}