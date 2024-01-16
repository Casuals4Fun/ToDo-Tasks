import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    openAddTaskModal: false,
    openFilter: false,
    filter: "",
    tasks: [],
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
            state.openFilter = false;
            state.filter = action.payload
        },
        addTask: (state, action) => {
            const task = {
                id: nanoid(),
                text: action.payload.text,
                date: action.payload.date
            };
            state.tasks.push(task);
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
    removeTask
} = taskSlice.actions;

export default taskSlice.reducer;