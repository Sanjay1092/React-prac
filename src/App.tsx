import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
// import HookForm from "./pages/hook-form";
// import Form from "./pages/form";
// import ReactQuery from './pages/r.query'
// import CardSec from "./pages/cardSec";
// import TableComponent from "./table";
// import HookForm from "./pages/hook-form";
import TanstackTable from "./Tanstacktable";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {/* <ReactQuery/> */}
        {/* <CardSec /> */}
        {/* <TableComponent /> */}
        {/* <Form /> */}
        {/* <HookForm /> */}
        <TanstackTable />
      </div>
    </QueryClientProvider>
  );
}

export default App;
