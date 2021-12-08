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
  const CardList = [
    {
      img: '../images/../images/random.svg',
      title: 'Real world impact',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis turpis. Ut aliquet ipsum sit amet ante consectetur consequat.',
    },
    {
      img: '../images/../images/random1.svg',
      title: 'Real world impact',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis turpis. Ut aliquet ipsum sit amet ante consectetur consequat.',
    },
    {
      img: '../images/../images/random2.svg',
      title: 'Real world impact',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis turpis. Ut aliquet ipsum sit amet ante consectetur consequat. ',
    },
    {
      img: '../images/../images/random3.svg',
      title: 'Real world impact',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis turpis. Ut aliquet ipsum sit amet ante consectetur consequat.',
    },
  ]
  const CardList1 = [
    {
      img: '../images/fromBlog.png',
      title: 'Cardashift — the launchpad to foster sustainable development',
      description:
        'Impact projects leaders across the world are building the stepping stones for a more sustainable world... Will it be enough?',
    },
    {
      img: '../images/firstFromBlog.png',
      title:
        'The Founding Story: from purpose-oriented CEOs to an impact-creating coalition',
      description:
        'The foundations of the first ever accelerator on blockchain to foster solutions creation and development for climate change and social matters.',
    },
    {
      img: '../images/secondFromBlog.svg',
      title: 'Real world impact',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis turpis. Ut aliquet ipsum sit amet ante consectetur consequat. ',
    },
    {
      img: '../images/thirdFromBlog.svg',
      title: 'Real world impact',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis turpis. Ut aliquet ipsum sit amet ante consectetur consequat.',
    },
  ]

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
          CardList={CardList}
          href="https://cardashift.medium.com/cardashift-the-launchpad-to-accelerate-environmental-and-social-transition-b51183b6434d"
        />
        <FeaturedMedia
          topTittle="Latest articles"
          title="From the blog"
          CardList={CardList1}
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
