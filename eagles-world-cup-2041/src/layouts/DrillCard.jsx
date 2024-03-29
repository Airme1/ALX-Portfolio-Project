import passImage from "../../public/pass.jpg"
import shootImage from "../../public/shoot.jpg"
import dribbleImage from "../../public/dribble.jpg"
import controlImage from "../../public/control.jpg"
import './Drill.css'
import { NavLink } from "react-router-dom"


export default function DrillCard({s_pass, s_shoot, s_control, s_dribble}) {
    // const categories = [passImage, shootImage, controlImage, dribbleImage];

    return (
        <div className="drill-card">
            <NavLink to={s_pass}>
                <div className="img-card">
                    <img src={passImage} alt="" />
                </div>
            </NavLink>

            <NavLink to={s_shoot}>
                <div className="img-card">
                    <img src={shootImage} alt="" />
                </div>
            </NavLink>

            <NavLink to={s_control}>
                <div className="img-card">
                    <img src={controlImage} alt="" />
                </div>
            </NavLink>

            <NavLink to={s_dribble}>
                <div className="img-card">
                    <img src={dribbleImage} alt="" />
                </div>
            </NavLink>

        </div>
    )
}