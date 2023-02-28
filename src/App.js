import Chart from "./components/Chart";
import { data } from "./data/data";

const App = () => {
  return (
    <>
      <Chart nodes={data} />
    </>
  );
};

export default App;
