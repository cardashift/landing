import React from 'react'
import ArrowIcon from '../components/ArrowIcon'
import Button from '../components/Button'
import CardFeatureMedia from '../components/CardFeatureMedia'
import TitleContainer from '../components/TitleContainer'

function FeaturedMedia({
  topTittle,
  title,
  firstImg,
  secondImg,
  thirdImg,
  forthImg,
  href,
}) {
  return (
    <div className="mt-72  md:block">
      <div className="flex justify-between ">
        <TitleContainer
          topTitle={topTittle}
          title={title}
          classnametitle="font-black text-3xl md:text-5xl mt-3"
        />
        <a href={href} target="_blank" className="hidden md:block">
          <Button className="bg-blue hover:bg-colorBlueHover text-white ">
            View more
            <ArrowIcon color="blue" className="ml-2" />
          </Button>
        </a>
      </div>
      <div className="flex flex-col items-center gap-6 md:flex-row justify-between my-8">
        <CardFeatureMedia
          urlPicture={firstImg}
          tittle="Real world impact"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis turpis. Ut aliquet ipsum sit amet ante consectetur consequat."
        />
        <CardFeatureMedia
          urlPicture={secondImg}
          tittle="Real world impact"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis turpis. Ut aliquet ipsum sit amet ante consectetur consequat."
        />
        <CardFeatureMedia
          urlPicture={thirdImg}
          tittle="Real world impact"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis turpis. Ut aliquet ipsum sit amet ante consectetur consequat."
        />
        <CardFeatureMedia
          urlPicture={forthImg}
          tittle="Real world impact"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis turpis. Ut aliquet ipsum sit amet ante consectetur consequat."
        />
      </div>
      <a href={href} target="_blank" className="md:hidden">
        <Button className="bg-blue hover:bg-colorBlueHover text-white m-auto">
          View more
          <ArrowIcon color="blue" className="ml-2" />
        </Button>
      </a>
    </div>
  )
}

export default FeaturedMedia
