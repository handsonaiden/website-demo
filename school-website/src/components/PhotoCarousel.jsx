import { useEffect, useState } from 'react'

const DEFAULT_INTERVAL = 5200

// Cross-fades between photographs with a slow Ken Burns zoom, and shows the
// credit for whichever photo is currently on screen. Auto-advance pauses for
// visitors who prefer reduced motion; the dots remain available.
function PhotoCarousel({
  photos,
  alt = 'Campus photograph',
  fallback = '/illustrations/campus.svg',
  interval = DEFAULT_INTERVAL,
}) {
  const [index, setIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const slides = photos?.length ? photos : []

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (reducedMotion || slides.length < 2) return undefined
    const id = window.setInterval(() => {
      setIndex(current => (current + 1) % slides.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [reducedMotion, slides.length, interval])

  if (!slides.length) return null

  const active = slides[Math.min(index, slides.length - 1)]

  return (
    <figure style={styles.figure}>
      <div
        className="schoolweb-photo-carousel"
        role="group"
        aria-roledescription="carousel"
        aria-label={alt}
      >
        {slides.map((photo, i) => (
          <img
            key={photo.src}
            className={i === index ? 'is-active' : ''}
            src={photo.src}
            alt={i === index ? photo.alt || alt : ''}
            width="520"
            height="360"
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={i === 0 ? 'high' : undefined}
            onError={event => {
              event.currentTarget.onerror = null
              event.currentTarget.src = fallback
            }}
          />
        ))}

        {slides.length > 1 && (
          <div className="schoolweb-photo-carousel-dots">
            {slides.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                className={i === index ? 'is-active' : ''}
                aria-label={`Show photo ${i + 1} of ${slides.length}`}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        )}
      </div>
      <figcaption style={styles.caption}>
        <a className="schoolweb-photo-credit" href={active.page} target="_blank" rel="noreferrer">
          Photo by {active.photographer} on Unsplash
        </a>
      </figcaption>
    </figure>
  )
}

const styles = {
  figure: {
    width: '100%',
    maxWidth: '520px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.55rem',
  },
  caption: { textAlign: 'center' },
}

export default PhotoCarousel
