import { useState } from 'react'
import './App.css'

import { Adder } from './components/Adder'
import { Logger } from './components/Logger'
import { Log } from './model'

export function App(): JSX.Element {
    const [logs, setLogs] = useState<Log[]>([])
    const [text, setText] = useState('')

    const createLog = (e: React.FormEvent<EventTarget>): void => {
        e.preventDefault()
        if (text === '') {
            return
        }
        setLogs([...logs, { date: text, muscle: '' }])
        setText('')
    }

    const addMuscle = (e: string): void => {
        console.log(e)
        setLogs(logs.map((log) => ({ ...log, muscle: e })))
    }

    return (
        <main className="App">
            <Adder createLog={createLog} setText={setText} text={text} />
            <Logger logs={logs} addMuscle={addMuscle} />
        </main>
    )
}
