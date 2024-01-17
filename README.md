# Task Tracker <a href="https://www.buymeacoffee.com/lalshubham" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 30px !important;width: 100px !important;" ></a>

#### SETUP LOCALLY
1) First execute `npm install` command in your terminal to install all the packages. Remember to run this command on your root directory's terminal and not from any other directory.
2) To run the application, simply execute `npm run dev` command in terminal after the package installation is over.
3) The project will start running on the `http://localhost:3000`.

### TECHNOLOGIES USED
- `Vite` for Frontend
- `Redux` for State Management
- `react-beautiful-dnd` for Drag-and-Drop
- `react-icons` for Icons library

### FOLDER STRUCTURE
- src/
    - components/
        - AllTask/
            - AllTask.css
            - AllTask.jsx
            - Card.jsx
        - Navbar/
            - Navbar.css
            - Navbar.jsx
        - TaskModal/
            - TaskModal.css
            - TaskModal.jsx
        - index.js
    - state/
        - store.js
        - taskReducer.js
    - utils/
        - formatDate.js
    - App.jsx
    - global.css
    - main.jsx