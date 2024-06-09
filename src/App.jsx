import './global.css';
import { useSelector } from 'react-redux';
import { Navbar, TaskModal, AllTask } from './components';

function App() {
  const { openAddTaskModal } = useSelector(state => state.tasks);

  return (
    <div className='container'>
      <Navbar />
      <div className='task__container'>
        {openAddTaskModal && <TaskModal />}
        <AllTask />
      </div>
    </div>
  )
}

export default App