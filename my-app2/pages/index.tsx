import moment from 'moment'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [num, setNum] = useState<number>(0)
  const [texto, setTexto] = useState<string>("")
  const [style, setStyle] = useState<string>("")
  
  useEffect(() => {
    const day = moment().format('DD');
    setNum(parseInt(day))
  }, []) 

  useEffect(() => {
    const result = num%2 === 0 ? 'par' : 'impar'
    setTexto(`O número ${num} é ${result}`)
    setStyle(result === 'par' ? styles.green : styles.red)
  }, [num])

  return (
    <div className={styles.container}>
      <h1 className={style}>{texto}</h1>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  )
}

export default Home
