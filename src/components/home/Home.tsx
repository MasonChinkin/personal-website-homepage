import { FC } from 'react'
import Intro from './intro/Intro'
import FeaturedProjects from './featured/FeaturedProjects'

const Home: FC = () => {
  return (
    <div className="height-transition-wrapper">
      <main className="home">
        <Intro />
        <FeaturedProjects />
      </main>
    </div>
  )
}

export default Home
