import { useState } from 'react'

export function Adder({ getDate }: any): JSX.Element {
    const [data, setData] = useState({
        date: '',
        type: '',
        series: '',
        workout: '',
    })

    return (
        <div>
            <label htmlFor="date">
                Dzień treningu:
                <input
                    onChange={(e) => setData({ ...data, date: e.target.value })}
                    type="date"
                    name="date"
                    id="date"
                />
            </label>
            <button type="button" onClick={() => getDate(data)}>
                OK
            </button>
            <label htmlFor="workout">
                Rodzaj treningu:
                <select
                    name="workout"
                    id="workout"
                    onChange={(e) => setData({ ...data, type: e.target.value })}
                >
                    <option value="Klatka">Klatka</option>
                    <option value="Nogi">Nogi</option>
                    <option value="Barki">Barki</option>
                </select>
            </label>
            <button type="button" onClick={() => getDate(data)}>
                OK
            </button>
            <label htmlFor="series">
                Nr serii:
                <input
                    type="number"
                    name="series"
                    id="series"
                    onChange={(e) =>
                        setData({ ...data, series: e.target.value })
                    }
                />
            </label>
            <button type="button" onClick={() => getDate(data)}>
                {' '}
                OK{' '}
            </button>
            <label htmlFor="workout">
                Ilość potworzeń:
                <input
                    type="number"
                    name="repetition"
                    id="repetition"
                    onChange={(e) =>
                        setData({ ...data, workout: e.target.value })
                    }
                />
            </label>
            <button type="button" onClick={() => getDate(data)}>
                {' '}
                OK{' '}
            </button>
        </div>
    )
}
