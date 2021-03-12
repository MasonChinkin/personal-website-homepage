import { FC } from 'react'
import ProjectGridItem from './ProjectGridItem'
import { d3Projects } from './projectList'
import classNames from 'classnames'

const D3ProjectGrid: FC = () => {
  const cards: JSX.Element[] = d3Projects.map(
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

export default D3ProjectGrid
