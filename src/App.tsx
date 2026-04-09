import { Outlet } from "react-router-dom";
import { AppLayout } from "./components/layout/appLayout";

function App() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export default App;
