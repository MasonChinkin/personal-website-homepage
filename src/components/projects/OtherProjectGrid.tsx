import ProjectGridItem from './ProjectGridItem'
import { otherProjects } from './projectList'
import classNames from 'classnames'

const OtherProjectGrid = () => {
  const cards: JSX.Element[] = otherProjects.map(
    (project, i: number): JSX.Element => {
      return <ProjectGridItem project={project} key={i} />
    }
  )

  const classes = classNames('projects', {
    'margins-only': cards.length < 5,
  })

  return (
    <div className="height-transition-wrapper">
      <main className="projects-wrapper">
        <div className={classes}>{cards}</div>
      </main>
    </div>
  )
}

export default OtherProjectGrid
