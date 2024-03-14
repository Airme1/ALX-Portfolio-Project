import TrainingCat from "./components/TrainingCat"
import './App.css'

export default function App() {
  return (
    <main className="landing Page">
      <h1>2041 WORLD CUP FOOTBALL TRAINING</h1>
      <section className="category">
        <TrainingCat name="Beginner" />
        <TrainingCat name="Intermediate" />
        <TrainingCat name="Advanced" />
      </section>

    </main>
  )
}