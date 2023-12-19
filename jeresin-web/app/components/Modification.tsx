import Option from './Option'

export default function Modification({modifications}:any){
    const options = modifications.specifics

    return(
        <div className="w-2/3 align-center">
            <div className='flex flex-col bg-loulou'>
                {
                    options.map((mod:any) => (
                        <Option opt={mod} key={mod.id} />
                    ))
                }
            </div>
        </div>
    )
}