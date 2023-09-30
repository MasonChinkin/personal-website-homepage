import Intro from './intro/Intro'
import FeaturedProjects from './featured/FeaturedProjects'

const Home = () => {
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
