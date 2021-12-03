import './App.css'
import './styles.css'
import Hero from './sections/Hero'
import Header from './components/Header'
import CardsAbout from './sections/CardsAbout'
import DefiProgress from './sections/DefiProgress'
import ClapToken from './sections/ClapToken'
import FundingStages from './sections/FundingStages'
import Roadmap from './sections/Roadmap'
import InitialToken from './sections/InititalToken'
import Partners from './sections/Partners'
import FeaturedMedia from './sections/FeaturedMedia'
import EcoSysteme from './sections/EcoSysteme'
import CardaShiftCommunity from './sections/CardaShiftCommunity'
function App() {
  return (
    <div className="container mx-auto ">
      <Header />
      <Hero />
      <CardsAbout />
      <DefiProgress />
      <ClapToken />
      <InitialToken />
      <FundingStages />
      <Roadmap />
      <EcoSysteme />
      <Partners />
      <FeaturedMedia
        topTittle="PRESS"
        title="Featured media"
        firstImg="../images/random.svg"
        secondImg="../images/random1.svg"
        thirdImg="../images/random2.svg"
        forthImg="../images/random3.svg"
      />
      <FeaturedMedia
        topTittle="Latest articles"
        title="From the blog"
        firstImg="../images/fromBlog.svg"
        secondImg="../images/firstFromBlog.svg"
        thirdImg="../images/secondFromBlog.svg"
        forthImg="../images/thirdFromBlog.svg"
      />
      <CardaShiftCommunity />
      {/*<FeaturedMedia />
      <Profile
        urlPicture="/images/profile-2.png"
        fullName="Harold Cunnigham"
        fonction="Fonction"
      />

      <PartnerCard name="Les Echos" partnerType="Project sourcing partner" />
      <CompanyCard
        title="Matters"
        description="Experts in new digital business, services and products design & development ursus accumsan enim, rutrum aenean eget integer. Blandit aenean"
      /> */}
    </div>
  )
}

export default App
