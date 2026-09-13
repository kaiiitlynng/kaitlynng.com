import type { Project } from '../data/projects'
import styles from './ProjectList.module.css'

interface ProjectListProps {
  projects: Project[]
  activeId: string
  onHover: (id: string) => void
  onLeave: () => void
}

export default function ProjectList({
  projects,
  activeId,
  onHover,
  onLeave,
}: ProjectListProps) {
  return (
    <div className={styles.list} onMouseLeave={onLeave}>
      {projects.map((project) => (
        <button
          key={project.id}
          type="button"
          className={
            project.id === activeId
              ? `${styles.row} ${styles.rowActive}`
              : styles.row
          }
          onMouseEnter={() => onHover(project.id)}
          onFocus={() => onHover(project.id)}
        >
          <span className={styles.number}>{project.number}</span>
          <span
            className={project.isPlaceholder ? styles.placeholder : styles.title}
          >
            {project.title}
          </span>
        </button>
      ))}
    </div>
  )
}
