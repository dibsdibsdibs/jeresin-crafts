import TextHeader from "../components/TextHeader"
import Image from "next/image"

export default function About() {
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tortor sed erat porta malesuada. Fusce elementum lobortis rhoncus. Morbi at viverra mi. Suspendisse dictum enim a velit vestibulum, sit amet semper augue luctus. Praesent at dui lectus. Integer eu nulla nulla. Vestibulum condimentum, nibh nec mollis varius, justo metus ultrices justo, vel rutrum dui risus sit amet justo."

  return (
    <div className="flex p-10">
      {/* <Image
        className="rotate-90"
        src="/dbb1.png"
        width={300}
        height={300}
        alt="" 
      /> */}
      <div>
        <TextHeader text="ABOUT" />
        <p className="text-loulou">{description}</p>
      </div>
      {/* <Image
        className="-rotate-90"
        src="/dbb2.png"
        width={500}
        height={500}
        alt="" 
      /> */}
    </div>
  )
}
