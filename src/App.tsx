import { useState, useEffect, useRef } from 'react'
import './App.css'

import "@animxyz/core";
import { XyzTransition } from '@animxyz/react'

const WORDS = [
  'bitch',
  'lover',
  'child',
  'mother',
  'sinner',
  'saint',
]

type Interval = number | undefined

function App() {
  const [index, setIndex] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);
  let interval:Interval = undefined;

  useEffect(() => {
    interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        const newIndex = index + 1
        setIndex(newIndex === WORDS.length ? 0 : newIndex);
        setShow(true);
      }, 1000)
      
    }, 2000);

    return () => clearInterval(interval);
  }, [index])

  return (
    <div>
        <div className='container'>
          <div className='static'>
            <span>I'm a</span>
          </div>
          <XyzTransition
            xyz="fade up"
            duration={{ appear: 'auto', in: 1000, out: 1000 }}
          >
            { show && <span className='word'>{WORDS[index]}</span> }
          </XyzTransition>
        </div>
    </div>
  )
}

export default App