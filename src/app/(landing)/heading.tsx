import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Heading = () => {
  return (
    <section className="max-w-3xl space-y-4 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
        Your Knowledge, Responsibilities, Perseverance, & Plan. Unified. Welcome
        to <span className="underline">our School</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        My Shool is the connected people where
        <br />
        better, faster school happens.
      </h3>
      <Button variant="default">
        Enter school <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </section>
  )
}

export default Heading
