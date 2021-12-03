
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Home from "./pages/Home";
import { Layout } from "antd";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function App() {
  




  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
      
    </div>
  );
}

export default App;
