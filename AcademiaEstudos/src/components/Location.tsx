export default function Location() {
  return (
    <div className="location">

      {/* Map */}
      <div className="location__map-wrapper">
        <div className="location__map-overlay" aria-hidden="true" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.96877484643!2d-9.155455623631023!3d38.74164287175727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193306915f072d%3A0x8e83315a6b0c61ad!2sAv.%20das%20For%C3%A7as%20Armadas%2012%2C%201600-081%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1698245132541!5m2!1spt-PT!2spt"
          className="location__map"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Academia de Estudos"
        />
        <div className="location__badge">
          <div className="location__badge-icon">
            <i className="fa-solid fa-location-dot" />
          </div>
          <div>
            <h4 className="location__badge-title">Sede Central</h4>
            <p className="location__badge-address">
              Av. das Forças Armadas, 12<br />
              1600-081 Lisboa
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
