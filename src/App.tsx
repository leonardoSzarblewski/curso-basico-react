import { Home } from "./pages/home";
import { AppLayout } from "./shared/layout/AppLayout";


export function App() {

    return (
    <div>
      <AppLayout>
        <Home/>
      </AppLayout>
    </div>
    )
  } 
