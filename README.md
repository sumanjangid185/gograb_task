__Todo App__
This is a simple Todo List App built using Expo and SQLite. It allows users to manage their daily tasks by providing features such as adding, marking tasks as complete or incomplete, deleting tasks, and storing data persistently using SQLite. The application is designed with a clean and intuitive user interface for seamless task management.

__Features__
The app allows users to add new tasks to a todo list, mark tasks as complete or incomplete by tapping on them, and delete tasks from the list as needed. All task-related data is stored in a local SQLite database, ensuring the information remains accessible even after the app is closed or restarted. The user interface is designed to be simple, allowing users to quickly and efficiently manage their daily activities.

__Installation__
To run the Todo App on your local machine, you need to have Node.js installed. You should also have Expo CLI set up. To begin, clone the repository from GitHub by using the appropriate Git clone command. Once the repository is cloned, navigate into the project folder and install the necessary dependencies using the npm install command. After the installation is complete, you can start the development server using Expo by running npx expo start. This will launch the Expo server, and you can then run the app on your physical device using the Expo Go app by scanning the QR code, or you can run it on an iOS or Android emulator.

__Usage__
Once the app is up and running, users can begin by typing a new task in the input field provided at the top of the interface. Clicking the "Add Task" button will add the new task to the list. Users can mark tasks as completed by simply tapping on the task, and if a task is no longer needed, they can delete it by clicking the corresponding "Delete" button. The app stores all tasks in an SQLite database, ensuring that tasks remain saved even when the app is closed.

__Project Structure__
The project is structured with a main file, App.js, which serves as the entry point for the application. There are components that handle various parts of the UI, such as the TodoItem.js component, which displays individual tasks, and the AddTodo.js component, which handles the logic for adding new tasks. The db.js file manages the SQLite database, performing tasks such as creating tables, inserting new tasks, and removing completed or deleted tasks. All static resources such as images or fonts are stored in the assets folder, and the package.json file contains the project's metadata, including dependencies required for the app to run.

__Technologies Used__
This Todo App is built using React Native, which provides a robust framework for developing mobile applications using JavaScript and React. Expo is used to streamline the development process, allowing for easier deployment and testing of the app across multiple platforms. SQLite is used as the local database solution to ensure persistent data storage for tasks, allowing users to access their saved todos even after closing the app. The app’s logic and interface are powered by JavaScript, utilizing modern ES6+ features for cleaner and more efficient code.

__Contributing__
If you wish to contribute to this project, the process is simple. You will need to fork the repository on GitHub, which will create a copy of the project under your account. After forking, clone your forked repository to your local machine. Create a new branch in your local repository for the feature or fix you want to work on. After making changes, commit them with a clear message describing the work you’ve done, and push your changes to your GitHub fork. Finally, open a pull request to the original repository, detailing what changes have been made and why they are beneficial.
