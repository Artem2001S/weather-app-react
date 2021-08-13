import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from 'components/Navbar';
import AppRouter from 'components/AppRouter';

function App({ routes }) {
  return (
    <Router>
      <Navbar />
      <AppRouter routes={routes} />
    </Router>
  );
}

export default App;
