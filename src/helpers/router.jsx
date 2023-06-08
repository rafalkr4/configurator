import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import configure from "../components/configure.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <App />,
            },
        ],
    },
]);