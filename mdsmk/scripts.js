console.log("eleanorbestgirl");
import{StirctMode, StrictMode} from "react";
import{createRoot} from "react-dom/client";
import "./style.css";
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router=createBrowserRouter([
{path: "/", element:  <App/>},
{path: "/about_us", element: <about_us/>}    
]);
function app(){
return(
<router>
            <nav>
                <link to="/">home_page</link>
                <link to="/">about_us</link>
                <link to="/about_us">home_page</link>
            </nav>
            <switch>
                <route path="/" route component={home_page} />
                <route path="/about_us" component={about_us} />
            </switch>
        </router>
);
}
export default app;

createRoot(document.getElementByld("root")).render(
<StrictMode>
    <RouterProvider router={router}/>
    </StrictMode>
);