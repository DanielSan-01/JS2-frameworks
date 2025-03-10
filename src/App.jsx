import { useEffect } from "react";
import { Layout } from "./Layout";
import { Outlet } from "react-router-dom";
import { useProductStore } from "./stores";

function App() {
  useEffect(() => {
    useProductStore.getState().fetchProducts(); 
  }, []); 

  return (
    <div className="flex flex-col h-screen">
      <Layout>
        <Outlet />
      </Layout>
    </div>    
  );
}

export default App;
