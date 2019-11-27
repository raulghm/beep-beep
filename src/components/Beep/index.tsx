import React from 'react'
import Wrapper from './style'
import { sample, range } from 'lodash'

/**
 * Beep.
 *
 * @example <Beep />
 * @returns {void}
 */
const Beep: React.FC = () => {
  const start = async () => {
    console.log('start')

    const beep: any = document.getElementById('beep')
    const buzz: any = document.getElementById('buzz')
    const time: any = sample<any>(range(15, 60)) * 1000
    const fases = sample<any>(range(4, 7))
    const timeFases = time / fases
    let interval: any
    clearInterval(interval)

    console.log({ time, fases, timeFases })

    const prom = (index: number) => {
      const intervalTime = Math.round(1500 / index)
      console.log({ intervalTime })
      interval = setInterval(() => beep.play(), intervalTime)
      return new Promise(resolve =>
        setTimeout(() => {
          resolve()
        }, timeFases)
      )
    }

    for (let i = 1; i <= fases; i++) {
      console.log('fase', i)
      await prom(i)
      clearInterval(interval)
    }
    buzz.play()
  }

  return (
    <Wrapper>
      <div className="Beep-body">
        <div className="Beep-button" onClick={start}></div>
        <audio id="beep">
          <source src={require('~/assets/beep.mp3')} />
        </audio>
        <audio id="buzz">
          <source src={require('~/assets/buzz-final.mp3')} />
        </audio>
      </div>
    </Wrapper>
  )
}

export default Beep
