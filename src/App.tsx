import './App.css'
import { Adder } from './components/Adder'
import { Logger } from './components/Logger'

export function App(): JSX.Element {
    return (
        <main className="App">
            <Adder />
            <Logger />
        </main>
    )
}
