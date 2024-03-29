import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Beginner from "./layouts/beginner/Beginner";
import Intermediate from "./layouts/intermediate/Intermediate";
import Advanced from "./layouts/advanced/Advanced";
import BeginnerPass from "./layouts/beginner/BeginnerPass";
import BeginnerShoot from "./layouts/beginner/BeginnerShoot";
import BeginnerControl from "./layouts/beginner/BeginnerControl";
import BeginnerDribble from "./layouts/beginner/BeginnerDribble";
import IntermediateControl from "./layouts/intermediate/IntermediateControl";
import IntermediateDribble from "./layouts/intermediate/IntermediateDribble";
import IntermediateShoot from "./layouts/intermediate/IntermediateShoot";
import IntermediatePass from "./layouts/intermediate/IntermediatePass";
import AdvancedControl from "./layouts/advanced/AdvancedControl";
import AdvancedPass from "./layouts/advanced/AdvancedPass";
import AdvancedShoot from "./layouts/advanced/AdvancedShoot";
import AdvancedDribble from "./layouts/advanced/AdvancedDribble";

const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [
        {
            path: "/beginner",
            element: <Beginner />,
            children: [
                {
                    path: "/beginner/passing",
                    element: <BeginnerPass />
                },
                {
                    path: "/beginner/shoot",
                    element: <BeginnerShoot />
                },
                {
                    path: "/beginner/control",
                    element: <BeginnerControl />
                },
                {
                    path: "/beginner/dribble",
                    element: <BeginnerDribble />
                }
            ]
        },
        {
            path: "/intermediate",
            element: <Intermediate />,
            children: [
                {
                    path: "/intermediate/passing",
                    element: <IntermediatePass />
                },
                {
                    path: "/intermediate/shoot",
                    element: <IntermediateShoot />
                },
                {
                    path: "/intermediate/control",
                    element: <IntermediateControl />
                },
                {
                    path: "/intermediate/dribble",
                    element: <IntermediateDribble />
                }
            ]
        },
        {
            path: "/advanced",
            element: <Advanced />,
            children: [
                {
                    path: "/advanced/passing",
                    element: <AdvancedPass />
                },
                {
                    path: "/advanced/shoot",
                    element: <AdvancedShoot />
                },
                {
                    path: "/advanced/control",
                    element: <AdvancedControl />
                },
                {
                    path: "/advanced/dribble",
                    element: <AdvancedDribble />
                }
            ]
        }
    ]
}]
)

export default router;