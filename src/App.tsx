
import './App.css';

function App() {
  return (
    <main className="App">
      <label htmlFor="date">Dzień treningu: </label>
      <input type="date" name="date" id="date" />
      <button> OK </button>
      <label htmlFor="workout">Rodzaj treningu: </label>
      <select name="workout" id="workout">
        <option value="">Klatka</option>
        <option value="">Nogi</option>
        <option value="">Barki</option>
      </select>
      <button> OK </button>
       <label htmlFor="workout">Nr serii: </label>
      <input type="number" name="" id="" />
      <button> OK </button>
       <label htmlFor="workout">Ilość potworzeń: </label>
      <input type="number" name="" id="" />
      <button> OK </button>
    </main>
  );
}

export default App;
