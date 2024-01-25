import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Page from './components/page/Page';
import Sugguestions from './components/sugguestions/Sugguestions';

function App() {
  return (
    <div className='instagram-page'>
      <Sidebar />
      <Page />
      <Sugguestions />
    </div>
  );
}

export default App;
