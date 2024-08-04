
import { RouterProvider } from "react-router-dom";
import {mainRouter} from "./routes/mainRouter"

function App() {
  

  return (
    <>
         <RouterProvider router={mainRouter} />
    </>
  )
}

export default App
