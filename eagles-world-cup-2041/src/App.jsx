import React from "react"
import TrainingCat from "./components/TrainingCat"
import './App.css'
import beginner from "../public/beginner.jpg"
import intermediate from "../public/intermediate.jpg"
import advanced from "../public/advanced.jpg"

export default function App() {
  return (
    <main className="landing">
      <h1>THE ULTIMATE FOOTBALL TRAINING</h1>
      <p>
        The Ultimate Football Training Guide, crafted by <span style={{ color: "white" }}>Elite Sports Performance</span>, is your passport to
        <span style={{ color: "white" }}> unleashing superhuman strength, explosive power, and lightning speed</span> on the pitch.
        Whether you're a towering center-back or a nimble winger, these techniques will propel your game
        to new heights. So lace up those boots, give it your all, and watch your performance soar! ⚽💪🔥
      </p>
      <h3 className="selection">Select Your Training Category</h3>
      <section className="category">
          <TrainingCat name="Beginner" pigment={"blue"} image={beginner} />        
          <TrainingCat name="Intermediate" pigment={"yellow"} image={intermediate} />
          <TrainingCat name="Advanced" pigment={"red"} image={advanced} />
      </section>

    </main>
  )
}