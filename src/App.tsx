import { useState } from 'react'
import './App.css'
import { Adder } from './components/Adder'
import { Logger } from './components/Logger'

export function App(): JSX.Element {
    const [date, setDate] = useState('')
    const [newData, setNewData] = useState('')

    const getDate: () => void = () => {
        setNewData(date)
    }

    return (
        <main className="App">
            <Adder setDate={setDate} getDate={getDate} />
            <Logger newData={newData} />
        </main>
    )
}
