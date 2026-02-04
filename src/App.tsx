import { useMemo, useState } from 'react'
import logo from './images/logo.jpg'
import manicure from './images/manicure.jpg'
import pedicure from './images/pedicure.jpg'

type ServiceItem = {
  name: string
  price: string
}

function App() {
  const [screen, setScreen] = useState<'menu' | 'manicure' | 'pedicure'>(
    'menu',
  )

  const manicureItems = useMemo<ServiceItem[]>(
    () => [
      { name: 'Russian manicure', price: '$5' },
      { name: 'Normal color', price: '$10' },
      { name: 'Rubber', price: '$15' },
      { name: 'Rubber + cover up', price: '$20' },
      { name: 'Hard gel + color', price: '$25' },
      { name: 'Rubber + gel color', price: '$20' },
      { name: 'Broken tip', price: '$2' },
      { name: 'Soak off', price: '$5' },
      { name: 'French', price: '$5' },
      { name: 'Full set builder gel', price: '$40' },
      { name: 'Full set fiber', price: '$40' },
      { name: 'Full set gel extension', price: '$30' },
      { name: 'Massage + scrub for hands', price: '$5' },
    ],
    [],
  )

  const pedicureItems = useMemo<ServiceItem[]>(
    () => [
      { name: 'Pedicure + polish', price: '$15' },
      { name: 'Pedicure + gel color', price: '$17' },
      { name: 'French', price: '$20' },
      { name: 'Massage + scrub', price: 'Free' },
    ],
    [],
  )

  return (
    <main className="welcome">
      <section
        className={`screen screen-menu ${screen === 'menu' ? 'is-active' : ''}`}
      >
        <div className="welcome-inner">
          <img className="brand-logo" src={logo} alt="Logo" />
          <p className="welcome-text">Pick a service</p>
          <div className="choices">
            <button
              className="choice-card"
              type="button"
              aria-label="Manicure"
              onClick={() => setScreen('manicure')}
            >
              <img src={manicure} alt="Manicure" />
              <span>Manicure</span>
              <small>See manicure prices</small>
            </button>
            <button
              className="choice-card"
              type="button"
              aria-label="Pedicure"
              onClick={() => setScreen('pedicure')}
            >
              <img className="pedicure-photo" src={pedicure} alt="Pedicure" />
              <span>Pedicure</span>
              <small>See pedicure prices</small>
            </button>
          </div>
        </div>
      </section>

      <section
        className={`screen screen-prices ${
          screen === 'manicure' ? 'is-active' : ''
        }`}
        aria-hidden={screen !== 'manicure'}
      >
        <div className="price-inner">
          <div className="price-header">
            <button
              className="back-btn"
              type="button"
              onClick={() => setScreen('menu')}
            >
              Back
            </button>
            <div className="price-title">
              <h1>Manicure</h1>
              <p>Price list</p>
            </div>
          </div>
          <ul className="price-list">
            {manicureItems.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <strong>{item.price}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={`screen screen-prices ${
          screen === 'pedicure' ? 'is-active' : ''
        }`}
        aria-hidden={screen !== 'pedicure'}
      >
        <div className="price-inner">
          <div className="price-header">
            <button
              className="back-btn"
              type="button"
              onClick={() => setScreen('menu')}
            >
              Back
            </button>
            <div className="price-title">
              <h1>Pedicure</h1>
              <p>Price list</p>
            </div>
          </div>
          <ul className="price-list">
            {pedicureItems.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <strong>{item.price}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default App
