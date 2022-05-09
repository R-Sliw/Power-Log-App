import { useState } from 'react'
import './App.css'
import { Adder } from './components/Adder'
import { Logger } from './components/Logger'

export function App(): JSX.Element {
    const [log, setLog] = useState<any>([])
    const [text, setText] = useState('')

    const createLog = (e: React.FormEvent<EventTarget>): void => {
        e.preventDefault()
        setLog([...log, { date: text, muscle: '' }])
    }

    return (
        <main className="App">
            <Adder createLog={createLog} setText={setText} text={text} />
            <Logger log={log} />
        </main>
    )
}
