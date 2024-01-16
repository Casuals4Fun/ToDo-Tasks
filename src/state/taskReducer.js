import { createSlice, nanoid } from '@reduxjs/toolkit';
import formatDate from '../utils/formatDate';

// Attempt to load tasks from localStorage, or set to an empty array if none exist
const loadTasks = () => {
    try {
        const serializedTasks = localStorage.getItem('tasks');
        if (serializedTasks === null) return [];
        return JSON.parse(serializedTasks);
    } catch (err) {
        return [];
    }
};

const initialState = {
    openAddTaskModal: false,
    openFilter: false,
    filter: "",
    tasks: loadTasks(),
    tempTask: {
        id: "",
        text: "",
        status: "",
        date: ""
    }
};

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        toggleAddTaskModal: (state, action) => {
            state.openFilter = false;
            if (action.payload) state.tempTask = action.payload;
            state.openAddTaskModal = !state.openAddTaskModal;
        },
        toggleFilter: (state) => {
            state.openFilter = !state.openFilter;
        },
        handleFilter: (state, action) => {
            state.openFilter = false;
            state.filter = action.payload;
        },
        addTask: (state, action) => {
            state.openAddTaskModal = false;
            const task = {
                id: nanoid(),
                text: action.payload.text,
                status: action.payload.status,
                date: formatDate(new Date())
            };
            state.tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        editTask: (state, action) => {
            state.openAddTaskModal = false;
            const { id, text, status } = action.payload;
            const index = state.tasks.findIndex(task => task.id === id);
            if (index !== -1) {
                state.tasks[index] = { ...state.tasks[index], text, status, date: formatDate(new Date()) };
            }
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        removeTask: (state, action) => {
            const idToRemove = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== idToRemove);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        setTasks: (state, action) => {
            state.tasks = action.payload;
        }
    }
});

export const {
    toggleAddTaskModal,
    toggleFilter,
    handleFilter,
    addTask,
    editTask,
    removeTask,
    setTasks
} = taskSlice.actions;

export default taskSlice.reducer;