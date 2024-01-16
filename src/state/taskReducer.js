import { createSlice, nanoid } from '@reduxjs/toolkit';
import formatDate from '../utils/formatData';

const storedTasks = localStorage.getItem('tasks');
const initialTasks = storedTasks ? JSON.parse(storedTasks) : [];

const initialState = {
    openAddTaskModal: false,
    openFilter: false,
    filter: "",
    tasks: initialTasks,
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
            state.openFilter = !state.openFilter
        },
        handleFilter: (state, action) => {
            const newFilter = action.payload;
            state.openFilter = false;
            if (state.filter === newFilter) state.filter = "";
            else state.filter = newFilter;
            state.tasks = state.filter ? initialTasks.filter(task => task.status === state.filter) : initialTasks;
        },
        addTask: (state, action) => {
            state.openAddTaskModal = false;
            const task = {
                id: nanoid(),
                text: action.payload.text,
                status: action.payload.status,
                date: formatDate(new Date())
            };
            state.tasks = [...state.tasks, task];
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        editTask: (state, action) => {
            state.openAddTaskModal = false;
            const { id, text, status } = action.payload;
            const editedTasks = state.tasks.map((task) =>
                task.id === id ? { ...task, text, status, date: formatDate(new Date()) } : task
            );
            state.tasks = editedTasks;
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        removeTask: (state, action) => {
            const idToRemove = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== idToRemove);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
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