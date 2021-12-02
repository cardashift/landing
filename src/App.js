import './App.css'
import Hero from './sections/Hero'
import Header from './components/Header'
import CardsAbout from './sections/CardsAbout'
// import FeaturedMedia from './sections/FeaturedMedia'
// import DefiProgress from './sections/DefiProgress'
// import Profile from './components/Profile'
// import TokenCard from './components/TokenCard'
import PartnerCard from './components/PartnerCard'

function App() {
  return (
    <div className="container mx-auto px-20">
      <Header />
      <Hero />
      <CardsAbout />
      {/* <DefiProgress />
      <FeaturedMedia />
      <Profile
        urlPicture="/images/profile-2.png"
        fullName="Harold Cunnigham"
        fonction="Fonction"
      />
      /> */}

      {/* <TokenCard /> */}
      <PartnerCard name="Les Echos" partnerType="Project sourcing partner" />
    </div>
  )
}

export default App
