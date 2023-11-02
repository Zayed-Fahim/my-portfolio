import { ToastContainer } from "react-toastify";
import Route from "./pages/Route/Route";
import ScrollUp from "./pages/Components/ScrollUp";
import "react-photo-view/dist/react-photo-view.css";
import { useState, useEffect } from "react";
import Loading from "./pages/Components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-hidden">
      <Route loading={isLoading} isLoading={setIsLoading}></Route>
      <ScrollUp />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
