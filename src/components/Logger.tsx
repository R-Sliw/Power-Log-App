import styled from 'styled-components'

const Log = styled.div`
    border: 1px solid white;
    margin: 40px;
    width: 400px;
`
export function Logger({ data }: any): JSX.Element {
    return (
        <div>
            {data
                .map((newData: any) => (
                    <Log>
                        <p>{newData.date}</p>
                        <p>{newData.type}</p>
                        <p>{newData.series}</p>
                        <p>{newData.workout}</p>
                    </Log>
                ))
                .slice(1)}
        </div>
    )
}
