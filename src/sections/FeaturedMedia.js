import React from 'react'
import ArrowIcon from '../components/ArrowIcon'
import Button from '../components/Button'
import CardFeatureMedia from '../components/CardFeatureMedia'
import TitleContainer from '../components/TitleContainer'

function FeaturedMedia({ topTittle, title, CardList, href }) {
  return (
    <div className="mt-20 md:mt-72 md:block">
      <div className="flex justify-between ">
        <TitleContainer
          topTitle={topTittle}
          title={title}
          classnametitle="font-black text-3xl md:text-5xl mt-3"
        />
        <a href={href} target="_blank" className="hidden md:block">
          <Button className="bg-blue hover:bg-colorBlueHover text-white shadow">
            View more
            <ArrowIcon color="blue" className="ml-2" />
          </Button>
        </a>
      </div>
      <div
        className="my-8 media-grid"
      >
        {CardList.map((item, index) => (
          <CardFeatureMedia
            key={index}
            urlPicture={item.img}
            tittle={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
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
