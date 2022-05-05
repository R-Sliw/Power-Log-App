import { useState } from 'react'
import './App.css'
import { Adder } from './components/Adder'
import { Logger } from './components/Logger'

export function App(): JSX.Element {
    const [logger, setLogger] = useState([{}])

    const getDate: (data: object[]) => void = (data) => {
        if (!data.date) {
            return
        }
        const addDate = [...logger, data]
        setLogger(addDate)
    }

    return (
        <main className="App">
            <Adder getDate={getDate} />
            <Logger data={logger} />
        </main>
    )
}
