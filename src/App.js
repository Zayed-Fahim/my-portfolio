import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Loading from "./pages/Components/Loading";
import ScrollUp from "./pages/Components/ScrollUp";
import Route from "./pages/Route/Route";
import "react-photo-view/dist/react-photo-view.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3400);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-hidden">
      <Route />
      <ScrollUp />
      <ToastContainer />
    </div>
  );
}

export default App;
