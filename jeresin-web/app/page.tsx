import Banner from './components/Banner'
import Teaser from './components/Teaser'
import Introduction from './components/Introduction'

export default function Home() {
  return (
    <div>
      <div>
        <Banner />
        <Introduction />
        <Teaser />
      </div>
    </div>
  )
}
