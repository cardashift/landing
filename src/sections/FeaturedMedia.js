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
}) {
  return (
    <div className="mt-72 hidden md:block">
      <div className="flex justify-between items-center">
        <TitleContainer
          topTitle={topTittle}
          title={title}
          classnametitle="font-black text-5xl mt-3"
        />
        <Button className="bg-blue hover:bg-colorBlueHover text-white ">
          View more
          <ArrowIcon color="blue" className="ml-2" />
        </Button>
      </div>
      <div className="flex justify-between my-8">
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
    </div>
  )
}

export default FeaturedMedia
