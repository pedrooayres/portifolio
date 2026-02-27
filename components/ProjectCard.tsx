import { useState } from 'react'

type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  images: string[]
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  images,
}: ProjectCardProps) {
  const [index, setIndex] = useState(0)

  return (
    <article style={styles.card}>
      <img src={images[index]} alt={title} style={styles.image} />

      {images.length > 1 && (
        <div style={styles.carousel}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              style={{
                ...styles.dot,
                opacity: i === index ? 1 : 0.4,
              }}
            />
          ))}
        </div>
      )}

      <h3>{title}</h3>
      <p>{description}</p>

      <ul style={styles.tech}>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div style={styles.actions}>
        {liveUrl && (
          <a href={liveUrl} target="_blank">
            Ver Online
          </a>
        )}
        <a href={githubUrl} target="_blank">
          GitHub
        </a>
      </div>
    </article>
  )
}

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 12,
    borderRadius: 16,
    padding: 24,
    border: '1px solid rgba(255,255,255,0.08)',
  },
  image: {
    width: '100%',
    borderRadius: 12,
  },
  carousel: {
    display: 'flex',
    gap: 8,
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  tech: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap' as const,
    listStyle: 'none',
    padding: 0,
    opacity: 0.8,
  },
  actions: {
    display: 'flex',
    gap: 16,
  },
}