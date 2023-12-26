'use client'

import TextHeader from "../components/TextHeader";
import Modification from "../components/Modification";

export default function Customize(){
    const options = [
        {
            name: "ACCESSORY",
            id: "c1",
            specifics: [
                {id: "c1-1", name: "Necklace", img: "/col-aqua/1.jpg", price: 0, unavailable: false},
                {id: "c1-2", name: "Bracelet", img: "/col-aqua/2.jpg", price: 1, unavailable: false}
            ]
        },
        {
            name: "Chain",
            id: "c2",
            specifics: [
                {id: "c2-1", name: "Gold Stainless Chain", img: "/col-aqua/3.jpg", price: 79, unavailable: false},
                {id: "c2-2", name: "Black Leather Cord", img: "/col-aqua/4.jpg", price: 79, unavailable: false}
            ]
        },
    ]

    return(
        <div>
            <TextHeader text="CUSTOMIZE" />
            <div>
                <div className="flex flex-col justify-center align-center">
                    {
                        options.map((option:any) => (
                            <Modification modifications={option} key={option.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}