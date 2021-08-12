import AppRouter from '../AppRouter';
import Navbar from '../Navbar/Navbar';

function App({ routes }) {
  return (
    <>
      <Navbar />
      <AppRouter routes={routes} />
    </>
  );
}

export default App;
