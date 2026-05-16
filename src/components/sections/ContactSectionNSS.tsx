'use client'

import { useState, type FormEvent } from 'react'

/* -- Tabler SVG icons (inline) -------------------------------------------- */
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" aria-hidden="true">
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
      <path d="M3 7l9 6l9 -6" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" aria-hidden="true">
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" aria-hidden="true">
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </svg>
  )
}

/* -- Component ---------------------------------------------------------------- */
export default function ContactSectionNSS() {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    sujet: '',
    message: '',
    rgpd: false,
  })
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="cn-s">
      <div className="cn-inner">

        {/* -- Left column: contact info -- */}
        <div className="cn-left">
          <div className="cn-surtitle">
            <span className="cn-line" aria-hidden />
            <span>CONTACT</span>
          </div>

          <h2 className="cn-h2">
            Une question&nbsp;?{' '}
            <em>Ecrivez-nous.</em>
          </h2>

          <div className="cn-ul" aria-hidden />

          <p className="cn-desc">
            Notre equipe repond a toutes vos demandes concernant nos programmes,
            partenariats ou adhesion au reseau NSS.
          </p>

          <div className="cn-divider" aria-hidden />

          <ul className="cn-items">
            <li className="cn-item">
              <div className="cn-icon-wrap">
                <IconMail />
              </div>
              <div className="cn-item-text">
                <span className="cn-item-label">Email</span>
                <a className="cn-item-val" href="mailto:contact@wasafrica.org">contact@wasafrica.org</a>
              </div>
            </li>
            <li className="cn-item">
              <div className="cn-icon-wrap">
                <IconPhone />
              </div>
              <div className="cn-item-text">
                <span className="cn-item-label">Telephone</span>
                <span className="cn-item-val">+221 33 822 22 22</span>
              </div>
            </li>
            <li className="cn-item">
              <div className="cn-icon-wrap">
                <IconMapPin />
              </div>
              <div className="cn-item-text">
                <span className="cn-item-label">Siege social</span>
                <span className="cn-item-val">Dakar, Senegal</span>
              </div>
            </li>
          </ul>

          <div className="cn-status">
            <span className="cn-dot" aria-hidden />
            <span>Equipe disponible du lundi au vendredi, 9h–17h (GMT)</span>
          </div>
        </div>

        {/* -- Right column: form -- */}
        <div className="cn-right">
          <div className="cn-card">
            {sent ? (
              <div className="cn-success">
                <div className="cn-success-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="#00AD4C"
                    strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
                <h3 className="cn-success-title">Message envoye !</h3>
                <p className="cn-success-desc">
                  Merci de nous avoir contactes. Nous vous repondrons dans les meilleurs delais.
                </p>
              </div>
            ) : (
              <form className="cn-form" onSubmit={handleSubmit} noValidate>
                <div className="cn-row">
                  <div className="cn-field">
                    <label className="cn-label" htmlFor="cn-prenom">Prenom</label>
                    <input
                      id="cn-prenom"
                      name="prenom"
                      type="text"
                      className="cn-input"
                      placeholder="Marie"
                      value={form.prenom}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="cn-field">
                    <label className="cn-label" htmlFor="cn-nom">Nom</label>
                    <input
                      id="cn-nom"
                      name="nom"
                      type="text"
                      className="cn-input"
                      placeholder="Diallo"
                      value={form.nom}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="cn-field">
                  <label className="cn-label" htmlFor="cn-email">Adresse email</label>
                  <input
                    id="cn-email"
                    name="email"
                    type="email"
                    className="cn-input"
                    placeholder="marie@exemple.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="cn-field">
                  <label className="cn-label" htmlFor="cn-sujet">Sujet</label>
                  <select
                    id="cn-sujet"
                    name="sujet"
                    className="cn-input cn-select"
                    value={form.sujet}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choisir un sujet</option>
                    <option value="adhesion">Adhesion</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="programmes">Programmes</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="cn-field">
                  <label className="cn-label" htmlFor="cn-message">Message</label>
                  <textarea
                    id="cn-message"
                    name="message"
                    className="cn-input cn-textarea"
                    placeholder="Votre message..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <label className="cn-rgpd">
                  <input
                    name="rgpd"
                    type="checkbox"
                    className="cn-checkbox"
                    checked={form.rgpd}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    J&apos;accepte que mes donnees soient utilisees pour repondre a ma demande,
                    conformement a la{' '}
                    <a href="/fr/politique-confidentialite" className="cn-rgpd-link">
                      politique de confidentialite
                    </a>.
                  </span>
                </label>

                <button type="submit" className="cn-submit">
                  <span>Envoyer le message</span>
                  <IconArrow />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        /* -- Section -- */
        .cn-s {
          background: #f9f8f5;
          padding: clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 6vw, 5rem);
        }

        /* -- Inner grid -- */
        .cn-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: start;
        }

        /* -- Left column -- */
        .cn-surtitle {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00AD4C;
        }
        .cn-line {
          display: block;
          width: 28px;
          height: 1.5px;
          background: #00AD4C;
          flex-shrink: 0;
        }
        .cn-h2 {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: clamp(1.75rem, 3.5vw, 2.4rem);
          font-weight: 600;
          color: #2A2A2A;
          line-height: 1.2;
          margin: 0;
          letter-spacing: -0.015em;
        }
        .cn-h2 em {
          font-style: italic;
          color: #A5CE46;
        }
        .cn-ul {
          width: 60px;
          height: 3px;
          background: #00AD4C;
          border-radius: 2px;
          margin: 1rem 0 1.5rem;
        }
        .cn-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 14px;
          color: #6b7280;
          line-height: 1.7;
          margin: 0;
        }
        .cn-divider {
          width: 100%;
          height: 1px;
          background: #e5e7eb;
          margin: 2rem 0;
        }

        /* -- Contact items -- */
        .cn-items {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cn-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .cn-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #f0faf4;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00AD4C;
          flex-shrink: 0;
        }
        .cn-item-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .cn-item-label {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9ca3af;
        }
        .cn-item-val {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #2A2A2A;
          text-decoration: none;
        }
        a.cn-item-val:hover { color: #00AD4C; }

        /* -- Status dot -- */
        .cn-status {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          color: #6b7280;
        }
        .cn-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00AD4C;
          flex-shrink: 0;
          box-shadow: 0 0 0 3px rgba(0, 173, 76, 0.18);
        }

        /* -- Right column card -- */
        .cn-card {
          background: #ffffff;
          border: 0.5px solid #e5e7eb;
          border-radius: 12px;
          padding: 32px;
        }

        /* -- Form -- */
        .cn-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cn-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .cn-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .cn-label {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #374151;
        }
        .cn-input {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 13px;
          color: #1f2937;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 10px 14px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          box-sizing: border-box;
          appearance: none;
        }
        .cn-input:focus {
          border-color: #00AD4C;
          box-shadow: 0 0 0 3px rgba(0, 173, 76, 0.12);
          background: #ffffff;
        }
        .cn-input::placeholder { color: #9ca3af; }
        .cn-select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6l6 -6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
          padding-right: 36px;
        }
        .cn-textarea {
          resize: vertical;
          min-height: 120px;
        }

        /* -- RGPD -- */
        .cn-rgpd {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          cursor: pointer;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 11px;
          color: #6b7280;
          line-height: 1.6;
        }
        .cn-checkbox {
          margin-top: 2px;
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          accent-color: #00AD4C;
          cursor: pointer;
        }
        .cn-rgpd-link {
          color: #00AD4C;
          text-decoration: underline;
        }

        /* -- Submit button -- */
        .cn-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #00AD4C;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 13px 28px;
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
          letter-spacing: 0.02em;
        }
        .cn-submit:hover {
          background: #009940;
          transform: translateY(-1px);
        }
        .cn-submit:active { transform: translateY(0); }

        /* -- Success state -- */
        .cn-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px 0;
          gap: 16px;
        }
        .cn-success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #f0faf4;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cn-success-title {
          font-family: 'Cormorant Garamond', var(--font-display), Georgia, serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #2A2A2A;
          margin: 0;
        }
        .cn-success-desc {
          font-family: 'DM Sans', var(--font-dm-sans), sans-serif;
          font-size: 13px;
          color: #6b7280;
          line-height: 1.7;
          margin: 0;
          max-width: 320px;
        }

        /* -- Responsive -- */
        @media (max-width: 768px) {
          .cn-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .cn-row {
            grid-template-columns: 1fr;
          }
          .cn-card { padding: 24px 20px; }
        }
      `}</style>
    </section>
  )
}
