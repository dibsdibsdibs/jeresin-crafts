
export default function Button(props: any){
    const label = props.label

    return(
        <div className="bg-loulou text-white font-bold px-4 py-1.5 rounded-full">
            {label}
        </div>
    )
}