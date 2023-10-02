import Banner from './components/Banner'
import Featured from './components/Featured'
import Introduction from './components/Introduction'

export default function Home() {
  return (
    <div>
      <div>
        <Banner />
        <Introduction />
        <Featured />
      </div>
    </div>
  )
}
