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
import { Helmet } from 'react-helmet'
import EcoSysteme from './sections/EcoSysteme'
import CardaShiftCommunity from './sections/CardaShiftCommunity'
import Team from './sections/Team'
import Footer from './sections/Footer'
import MobileHeader from './components/MobileHeader'
import TimeLine from './sections/TimeLine'
function App() {
  return (
    <div>
      <div className="container mx-auto flex flex-col">
        <Helmet>
          <title>Cardashift</title>
        </Helmet>
        <Header />
        <MobileHeader />
        <Hero />
        <CardsAbout />
        <DefiProgress />
        <ClapToken />
        <InitialToken />
        <FundingStages />
        <Roadmap />
        <TimeLine />
        <Team />
        <EcoSysteme />
        <Partners />
        <FeaturedMedia
          topTittle="PRESS"
          title="Featured media"
          firstImg="../images/random.svg"
          secondImg="../images/random1.svg"
          thirdImg="../images/random2.svg"
          forthImg="../images/random3.svg"
          href="https://cardashift.medium.com/cardashift-the-launchpad-to-accelerate-environmental-and-social-transition-b51183b6434d"
        />
        <FeaturedMedia
          topTittle="Latest articles"
          title="From the blog"
          firstImg="../images/fromBlog.svg"
          secondImg="../images/firstFromBlog.svg"
          thirdImg="../images/secondFromBlog.svg"
          forthImg="../images/thirdFromBlog.svg"
          href="https://cardashift.medium.com/the-founding-story-from-purpose-oriented-ceos-to-an-impact-creating-coalition-a21792b78b71"
        />
      </div>
      <div>
        <CardaShiftCommunity />
        <Footer />
      </div>
    </div>
  )
}

export default App
