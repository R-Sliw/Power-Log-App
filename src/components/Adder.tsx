interface Props {
    createLog: (e: React.FormEvent<EventTarget>) => void
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
}

export function Adder({ createLog, text, setText }: Props): JSX.Element {
    return (
        <div>
            <form onSubmit={(e) => createLog(e)}>
                <label htmlFor="workout">
                    <input
                        type="date"
                        name="date"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setText(e.target.value)
                        }
                        value={text}
                    />
                </label>
                <button type="submit">Dodaj trening</button>
            </form>
        </div>
    )
}
