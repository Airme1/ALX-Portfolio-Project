import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DrillCard from "../DrillCard"
import { Outlet } from "react-router-dom";
export default function Beginner() {
    return (
        <>
            <h1>Beginnner</h1>
            <DrillCard s_pass="/beginner/passing" s_shoot="/beginner/shoot"
                s_control="/beginner/control" s_dribble="/beginner/dribble" />
            <Outlet />
        </>
    )
}
