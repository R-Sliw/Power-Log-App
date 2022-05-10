import styled from 'styled-components'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Log } from '../model'

const Box = styled.div`
    border: 1px solid white;
    margin: 40px;
    width: 400px;
`
interface Props {
    logs: Log[]
    addMuscle: (e: string) => void
}

export function Logger({ logs, addMuscle }: Props): JSX.Element {
    // const [add, setAdd] = useState(true)
    // const [addMuscle, setAddMuscle] = useState('')
    const unique = uuid().slice(0, 8)

    return (
        <div>
            {logs
                .map((log) => (
                    <Box key={unique}>
                        <p>Data treningu: {log.date}</p>
                        <p>
                            <label htmlFor="muscle">
                                Partia mięśniowa: {log.muscle}
                            </label>
                            <select
                                defaultValue="partia"
                                id="muscle"
                                onChange={(
                                    e: React.ChangeEvent<HTMLSelectElement>
                                ) => addMuscle(e.target.value)}
                            >
                                <option value="partia" disabled>
                                    Wybierz Partie
                                </option>
                                <option value="klata">Klata</option>
                                <option value="nogi">Nogi</option>
                            </select>
                        </p>
                    </Box>
                ))
                .reverse()}
        </div>
    )
}
