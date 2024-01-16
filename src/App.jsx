import './global.css';
import { Navbar, TaskModal, AllTask } from './components';

function App() {

  return (
    <div className='container'>
      <Navbar />
      <div className='task__container'>
        <TaskModal />
        <AllTask />
      </div>
    </div>
  )
}

export default App
