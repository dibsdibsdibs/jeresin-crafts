import Spotlight from "./Spotlight";

export default function Featured(){
    return(
        <div className="flex flex-col items-center p-10">
            <h1 className="font-bold text-6xl text-loulou">FEATURED</h1>
            <p className="font-bold text-4xl text-loulou">Featured Collection</p>
            <div>
                <Spotlight />
            </div>
        </div>
    )
}