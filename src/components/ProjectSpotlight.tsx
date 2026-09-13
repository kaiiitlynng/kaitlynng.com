import type { Project } from '../data/projects'
import styles from './ProjectSpotlight.module.css'

interface ProjectSpotlightProps {
  project: Project
}

export default function ProjectSpotlight({ project }: ProjectSpotlightProps) {
  return (
    <div className={styles.card}>
      <p className={styles.eyebrow}>[ Project {project.number} ]</p>
      <div
        className={styles.imageFrame}
        style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
        role="img"
        aria-label={project.isPlaceholder ? 'Coming soon' : project.title}
      />
      <div className={styles.meta}>
        <div className={styles.tags}>
          {project.tags.length > 0
            ? project.tags.map((tag) => <span key={tag}>[{tag}]</span>)
            : <span>[Tag]</span>}
        </div>
        <span>{project.year || '—'}</span>
      </div>
      <p className={styles.description}>{project.description}</p>
    </div>
  )
}
