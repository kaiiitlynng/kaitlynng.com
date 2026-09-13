import styles from './Placeholder.module.css'

interface PlaceholderProps {
  label: string
}

export default function Placeholder({ label }: PlaceholderProps) {
  return <div className={styles.page}>{label} — coming soon</div>
}
