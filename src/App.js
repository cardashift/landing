import './App.css'
import Hero from './sections/Hero'
import Header from './components/Header'
import CardsAbout from './sections/CardsAbout'
import FeaturedMedia from './sections/FeaturedMedia'

function App() {
  return (
    <div className="container mx-auto px-20">
      <Header />
      <Hero />
      <CardsAbout />
      <FeaturedMedia />
    </div>
  )
}

export default App
