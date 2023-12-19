import Heading from './heading'
import Heroes from './heroes'

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <Heading />
      <Heroes />
    </div>
  )
}
