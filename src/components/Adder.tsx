export function Adder({ setDate, getDate }: any): JSX.Element {
    return (
        <div>
            <label htmlFor="date">
                Dzień treningu:{' '}
                <input
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    name="date"
                    id="date"
                />
            </label>
            <button type="button" onClick={getDate}>
                {' '}
                OK{' '}
            </button>
            <label htmlFor="workout">
                Rodzaj treningu:
                <select name="workout" id="workout">
                    <option value="">Klatka</option>
                    <option value="">Nogi</option>
                    <option value="">Barki</option>
                </select>
            </label>
            <button type="button"> OK </button>
            <label htmlFor="series ">
                Nr serii:
                <input type="number" name="series" id="series" />
            </label>
            <button type="button"> OK </button>
            <label htmlFor="workout">
                Ilość potworzeń:
                <input type="number" name="repetition" id="repetition" />
            </label>
            <button type="button"> OK </button>
        </div>
    )
}
