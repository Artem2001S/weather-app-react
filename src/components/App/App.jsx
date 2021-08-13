import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../AppRouter';
import Navbar from '../Navbar/Navbar';

function App({ routes }) {
  return (
    <Router>
      <Navbar />
      <AppRouter routes={routes} />
    </Router>
  );
}

export default App;
