import { ToastContainer } from "react-toastify";
import Route from "./pages/Route/Route";

function App() {
  return (
    <div className="overflow-hidden">
      <Route></Route>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
