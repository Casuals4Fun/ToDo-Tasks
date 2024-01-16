import { createSlice, nanoid } from '@reduxjs/toolkit';

const storedTasks = localStorage.getItem('tasks');
const initialTasks = storedTasks ? JSON.parse(storedTasks) : [
    { id: 1, text: 'This is first task.', status: 'Complete' },
    { id: 2, text: 'This is second task.', status: 'Complete' },
    { id: 3, text: 'This is third task.', status: 'Incomplete' },
    { id: 4, text: 'This is fourth task.', status: 'Incomplete' },
    { id: 5, text: 'This is fifth task.', status: 'Complete' },
    // { id: 6, text: 'This is sixth task.', status: 'Complete' }
];

const initialState = {
    openAddTaskModal: false,
    openFilter: false,
    filter: "",
    tasks: initialTasks
};

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        toggleAddTaskModal: (state) => {
            state.openFilter = false;
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
            const task = {
                id: nanoid(),
                text: action.payload.text,
                date: action.payload.date
            };
            state.tasks.push(task);
        },
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        removeTask: (state, action) => {
            const id = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== id);
        }
    }
});

export const {
    toggleAddTaskModal,
    toggleFilter,
    handleFilter,
    addTask,
    setTasks,
    removeTask
} = taskSlice.actions;

export default taskSlice.reducer;