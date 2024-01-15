import './global.css';
import { Navbar, AddTask, AllTask } from './components';

function App() {

  return (
    <div className='container'>
      <Navbar />
      <div className='task__container'>
        <AddTask />
        <AllTask />
      </div>
    </div>
  )
}

export default App
