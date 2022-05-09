import styled from 'styled-components'

const Log = styled.div`
    border: 1px solid white;
    margin: 40px;
    width: 400px;
`
interface Props {
    log: any
}

export function Logger({ log }: Props): JSX.Element {
    console.log(log)

    return <div>{log.date}</div>
}
