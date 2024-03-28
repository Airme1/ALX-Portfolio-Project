import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DrillCard from "./DrillCard"
export default function Beginner() {
    return (
        <>
            <h1>Beginnner</h1>
            <DrillCard s_pass="/passing" s_shoot="/shoot"
                s_control="/control" s_dribble="/dribble" />
        </>
    )
}
