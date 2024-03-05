import Header from './components/Header.jsx';
import RefsLogin from './components/RefsLogin.jsx';
import Signup from './components/Signup.jsx';
import StateLogin from './components/StateLogin.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Signup /> */}
        <StateLogin />
        {/* <RefsLogin /> */}
      </main>
    </>
  );
}

export default App;
