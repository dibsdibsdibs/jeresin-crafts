import Option from './Option'
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 

export default function Modification({modifications}:any){
    const options = modifications.specifics

    return(
        <div className="w-2/3 align-center">
            <div className='flex flex-col bg-loulou'>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                >
                    {
                        options.map((mod:any) => (
                            <Option opt={mod} key={mod.id} />
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}