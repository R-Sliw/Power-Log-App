export function Logger({ data }: any): JSX.Element {
    return (
        <div>
            <p>{data.date}</p>
            <p>{data.type}</p>
            <p>{data.series}</p>
            <p>{data.workout}</p>
        </div>
    )
}
