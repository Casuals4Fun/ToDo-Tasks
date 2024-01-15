import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
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

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;