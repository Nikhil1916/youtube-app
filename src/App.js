import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./Utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Error from "./components/Error";
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    errorElement:<Error/>,
    children: [
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      },
    ]
  }
])
function App() {
  return (
    <Provider store={appStore}>
    <div>
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
