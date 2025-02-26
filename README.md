# Todo List Application - React

A simple and intuitive Todo List application built with React. This application allows users to manage their tasks efficiently with features like adding, editing, marking as complete, and reordering tasks.

## Features

- **Add Tasks**: Create new tasks with a simple input field
- **Edit Tasks**: Modify existing task content
- **Delete Tasks**: Remove unwanted tasks from the list
- **Mark as Complete**: Toggle tasks between complete and incomplete states
- **Reorder Tasks**: Move tasks up or down in the list to prioritize them

## Installation

Clone the repository to your local machine:
   ```
   git clone <repository-url>
   ```
Install dependencies:
   ```
   npm install
   ```
Start the development server:
   ```
   npm run dev
   ```

### Managing Tasks
- **Complete/Uncomplete a Task**: Click the "✓" button to mark a task as complete. Click the "↩️" button to mark it as incomplete again.
- **Edit a Task**: Click the "Edit" button, modify the text, and click "Save" to confirm or "Cancel" to discard changes.
- **Delete a Task**: Click the "Delete" button to remove a task from the list.
- **Reorder Tasks**: Use the "⬆️" and "⬇️" buttons to move tasks up or down in the list.


## Component Functions
- `handleInputChange` - Updates the newTask state as the user types
- `handleEditChange` - Updates the editText state during task editing
- `addTask` - Adds a new task to the list
- `deleteTask` - Removes a task from the list
- `startEditing` - Initiates the editing mode for a task
- `saveEdit` - Saves the edited task content
- `cancelEdit` - Exits the editing mode without saving changes
- `toggleComplete` - Marks a task as complete or incomplete
- `moveTaskUp` - Moves a task one position up in the list
- `moveTaskDown` - Moves a task one position down in the list
