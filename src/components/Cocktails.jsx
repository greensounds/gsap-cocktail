import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true
      }
    }) 

    parallaxTimeline
      .from('#c-left-leaf', {
        x: -100, y: 100
      })
      .from('#c-right-leaf', {
        x: 100, y: 100
      })
  })
  return (
    <section id='cocktails' className='noisy'>
      <img src="/images/cocktail-left-leaf.png" alt="left leaf" id='c-left-leaf'/>
      <img src="/images/cocktail-right-leaf.png" alt="richt leaf" id='c-right-leaf'/>

      <div className='list'>
        <div className='popular'>
          <h2>Most popular Cocktails</h2>
          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className='md:me-28 '>
                  <h3>{drink.name}</h3>
                  <p>{drink.country} | {drink.detail}</p>
                  <span>- {drink.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className='loved'>
          <h2>Most popular Mocktails</h2>
          <ul>
            {mockTailLists.map((drink) => (
              <li key={drink.name}>
                <div className='md:me-28 '>
                  <h3>{drink.name}</h3>
                  <p>{drink.country} | {drink.detail}</p>
                  <span>- {drink.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Cocktails
