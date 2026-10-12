const DEFAULT_ITEMS = [
  'Admissions open for 2027',
  'Annual Sports Day · 17 October',
  'New STEM laboratory now open',
  'Campus tours every Saturday',
  'Scholarships available',
]

// A gold, diagonal-striped announcement strip that scrolls continuously and
// pauses on hover. The list is rendered twice so the loop is seamless.
function GoldMarquee({ items = DEFAULT_ITEMS, label = 'Notice' }) {
  return (
    <aside className="gold-marquee" aria-label="School announcements">
      <span className="gold-marquee-label">{label}</span>
      <div className="gold-marquee-scroller">
        <div className="gold-marquee-track">
          {[0, 1].map(copy => (
            <div
              className="gold-marquee-group"
              key={copy}
              aria-hidden={copy === 1 ? 'true' : undefined}
            >
              {items.map((item, index) => (
                <span className="gold-marquee-item" key={`${copy}-${index}`}>
                  <span className="gold-marquee-dot" aria-hidden="true">✦</span>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default GoldMarquee
