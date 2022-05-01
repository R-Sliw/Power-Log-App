import { useState } from 'react'
import './App.css'
import { Adder } from './components/Adder'
import { Logger } from './components/Logger'

export function App(): JSX.Element {
    const [adata, setaData] = useState({})

    const getDate: (a: object) => void = (data) => {
        setaData(data)
    }

    return (
        <main className="App">
            <Adder getDate={getDate} />
            <Logger data={adata} />
        </main>
    )
}
