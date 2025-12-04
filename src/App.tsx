import './App.css'
import { EmblaCarousel } from './components/Carousel'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Modern React App</h1>
        <EmblaCarousel />
      </main>
      <Footer />
    </>
  )
}

export default App
