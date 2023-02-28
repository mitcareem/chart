import Chart from "./components/Chart";
import { data } from "./data/data";

const App = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Chart nodes={data} />
    </div>
  );
};

export default App;
