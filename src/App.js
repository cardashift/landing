import './App.css'
import Hero from './sections/Hero'
import Header from './components/Header'
// import Card from './components/Card'
import GlassCard from './components/GlassCard'
import ArrowIcon from './components/ArrowIcon'
import Button from './components/Button'

function App() {
  return (
    <div className="container mx-auto px-20">
      <Header />
      <Hero />
      {/* <Card
        urlPicture="../img/img-card.png"
        tittle="Real world impact"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis turpis. Ut aliquet ipsum sit amet ante consectetur consequat."
      /> */}
      <GlassCard
        className="bg-impact-gradient backdrop-filter backdrop-blur-20 border-2 border-solid border-white"
        topTittle="Impact or profit?"
        tittle="Reaching sustainability while being profitable is a big hurdle for
        change makers"
        description="Environmental and social transition stakes are increasingly prevalent.
        Change makers are working hard but they still lack the funding and the
        appropriate support to increase their success rate. Technologies - tools
        - relationships are needed to tokenize and accelerate these impact
        ventures"
      />
      <br />
      <GlassCard
        className="bg-impact-gradient backdrop-filter backdrop-blur-20 border-2 border-solid border-white"
        topTittle="About Cardashift?"
        tittle="Empowering the visionary ventures that will create 
        a sustainable future"
        description="Cardashift funds and works intensively with impact startups that are solving social and environmental issues. Our goal is to build an ecosystem of change makers that will debug the world by harnessing blockchain technology and the decentralised power of many.
        Everyone is a stakeholder in Cardashift with participation rights and decision making privileges."
        button={
          <Button className="bg-blue text-white font-Inter font-medium text-xs">
            Discover the products
            <ArrowIcon className="ml-2 rotate-90" color="blue" />
          </Button>
        }
      />
    </div>
  )
}

export default App
