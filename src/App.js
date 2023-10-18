import { ToastContainer } from "react-toastify";
import Route from "./pages/Route/Route";
import ScrollUp from "./pages/Components/ScrollUp";

function App() {
  return (
    <div className="overflow-hidden">
      <Route></Route>
      <ScrollUp />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
