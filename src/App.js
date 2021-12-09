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
  // const CardList = [
  //   {
  //     img: '../images/../images/random.svg',
  //     title: 'Real world impact',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis turpis. Ut aliquet ipsum sit amet ante consectetur consequat.',
  //   },
  //   {
  //     img: '../images/../images/random1.svg',
  //     title: 'Real world impact',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis turpis. Ut aliquet ipsum sit amet ante consectetur consequat.',
  //   },
  //   {
  //     img: '../images/../images/random2.svg',
  //     title: 'Real world impact',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis turpis. Ut aliquet ipsum sit amet ante consectetur consequat. ',
  //   },
  //   {
  //     img: '../images/../images/random3.svg',
  //     title: 'Real world impact',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis turpis. Ut aliquet ipsum sit amet ante consectetur consequat.',
  //   },
  // ]
  const CardList1 = [
    {
      img: '../images/three-ceos.png',
      title: 'Cardashift — the launchpad to foster sustainable development',
      description:
        'Impact projects leaders across the world are building the stepping stones for a more sustainable world... Will it be enough?',
      link: 'https://cardashift.medium.com/cardashift-the-launchpad-to-accelerate-environmental-and-social-transition-b51183b6434d',
    },
    {
      img: '../images/cardashit-logo-card.png',
      title:
        'The Founding Story: from purpose-oriented CEOs to an impact-creating coalition',
      description:
        'The foundations of the first ever accelerator on blockchain to foster solutions creation and development for climate change and social matters.',
      link: 'https://cardashift.medium.com/the-founding-story-from-purpose-oriented-ceos-to-an-impact-creating-coalition-a21792b78b71',
    },
    {
      img: '../images/cardashit-logo-card.png',
      title: 'The 3 reasons why we choose Cardano to maximize our impact',
      description:
        'The choice of the blockchain used to support our project is no coincidence',
      link: 'https://cardashift.medium.com/the-3-reasons-why-we-choose-cardano-to-maximize-our-impact-28b2e914e894',
    },
    {
      img: '../images/cardashit-logo-card.png',
      title: 'More coming soon!',
      description: 'Stay tunned for more articles from us.',
      link: 'https://cardashift.medium.com/',
    },
    // {
    //   img: '../images/cardashit-logo-card.png',
    //   title:
    //     'The 3 reasons why we choose Cardano to maximize our impact',
    //   description:
    //     'The choice of the blockchain used to support our project is no coincidence',
    //     link: 'https://cardashift.medium.com/the-3-reasons-why-we-choose-cardano-to-maximize-our-impact-28b2e914e894'
    // },
    // {
    //   img: '../images/cardashit-logo-card.png',
    //   title:
    //     'Coming soon!',
    //   description:
    //     'More articles in the making.',
    //     link: 'https://cardashift.medium.com'
    // },
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
        <div className="mb-6 font-Inter font-normal text-base tracking-tight text-paraColor">
          *Locked for 36 months
        </div>
        <FundingStages />
        <Roadmap />
        <TimeLine />
        <Team />
        <EcoSysteme />
        <Partners />
        {/* <FeaturedMedia
          topTittle="PRESS"
          title="Featured media"
          CardList={CardList}
          href="https://cardashift.medium.com/cardashift-the-launchpad-to-accelerate-environmental-and-social-transition-b51183b6434d"
        /> */}
        <FeaturedMedia
          topTittle="Latest articles"
          title="From the blog"
          CardList={CardList1}
          href="https://cardashift.medium.com"
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
