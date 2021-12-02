import './App.css'
import Hero from './sections/Hero'
import Header from './components/Header'
import CardsAbout from './sections/CardsAbout'
import DefiProgress from './sections/DefiProgress'

function App() {
  return (
    <div className="container mx-auto ">
      <Header />
      <Hero />
      <CardsAbout />
      <DefiProgress />
      {/*<FeaturedMedia />
      <Profile
        urlPicture="/images/profile-2.png"
        fullName="Harold Cunnigham"
        fonction="Fonction"
      /> */}

      {/* <TokenCard /> */}
    </div>
  )
}

export default App
