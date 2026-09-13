import { useState } from 'react'
import ProjectList from '../components/ProjectList'
import ProjectSpotlight from '../components/ProjectSpotlight'
import { projects } from '../data/projects'
import styles from './Home.module.css'

export default function Home() {
  const [activeId, setActiveId] = useState(projects[0].id)
  const activeProject =
    projects.find((project) => project.id === activeId) ?? projects[0]

  return (
    <div className={styles.page}>
      <h1 className={styles.hero}>
        Kaitlyn Ng is a designer + engineer. Currently @ UC Berkeley.
      </h1>

      <p className={styles.projectsLabel}>projects</p>
      <div className={styles.grid}>
        <ProjectList
          projects={projects}
          activeId={activeId}
          onHover={setActiveId}
          onLeave={() => setActiveId(projects[0].id)}
        />
        <div className={styles.spotlightWrap}>
          <ProjectSpotlight project={activeProject} />
        </div>
      </div>
    </div>
  )
}
