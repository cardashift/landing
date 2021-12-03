import './App.css'
import './styles.css'
import Hero from './sections/Hero'
import Header from './components/Header'
import CardsAbout from './sections/CardsAbout'
import DefiProgress from './sections/DefiProgress'
import ClapToken from './sections/ClapToken'
import InitialToken from './sections/InititalToken'
// import FeaturedMedia from './sections/FeaturedMedia'
// import DefiProgress from './sections/DefiProgress'
// import Profile from './components/Profile'
// import TokenCard from './components/TokenCard'
// import PartnerCard from './components/PartnerCard'
// import CompanyCard from './components/CompanyCard'

function App() {
  return (
    <div className="container mx-auto ">
      <Header />
      <Hero />
      <CardsAbout />
      <DefiProgress />
      <ClapToken />
      <InitialToken />
      {/*<FeaturedMedia />
      <Profile
        urlPicture="/images/profile-2.png"
        fullName="Harold Cunnigham"
        fonction="Fonction"
      />
      /> */}

      {/* <PartnerCard name="Les Echos" partnerType="Project sourcing partner" />
      <CompanyCard
        tittle="Matters"
        description="Experts in new digital business, services and products design & development ursus accumsan enim, rutrum aenean eget integer. Blandit aenean"
      /> */}
    </div>
  )
}

export default App
