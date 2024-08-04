import { createBrowserRouter } from "react-router-dom"; 
import Login from "../pages/Login";
import TrackShipment from "../pages/TrackShipment";
import ShipmentList from "../components/ShipmentList/ShipmentList";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    },
    {
        path: "/shipmentTrack",
        element:<TrackShipment/>
  },
      {
        path: "/all-shipment",
        element:<ShipmentList/>
    }
]);