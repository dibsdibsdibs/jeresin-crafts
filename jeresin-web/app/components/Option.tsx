
import { useState } from 'react'
import { Listbox } from '@headlessui/react'

export default function Option(props: any){
    const option = "Option"
    
    const choices = [
        {id: 1, name: "Necklace"},
        {id: 2, name: "Bracelet"}
    ]
    
    const [selectedChoice, setSelectedChoice] = useState(choices[0])

    return(
        <div className="text-loulou">
            <h3 className="font-bold text-lg">{option}</h3>
            <div className="flex flex-row justify-around w-80 font-semibold outline rounded-md">
            <Listbox value={selectedChoice} onChange={setSelectedChoice}>
                <Listbox.Button>{setSelectedChoice.name}</Listbox.Button>
                <Listbox.Options>
                    {choices.map((choice) => (
                        <Listbox.Option
                            key={choice.id}
                            value={choice.name}
                        >
                            {choice.name}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
            </div>
        </div>
    )
}