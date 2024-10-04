# Drag-and-Drop Image Upload with Dynamic Input Fields in React

## Description

This project demonstrates a simple React application that allows users to upload images using a drag-and-drop interface and dynamically add and remove input fields. The app is designed with flexibility in mind, allowing for real-time image previews and a responsive, user-friendly interface. It utilizes React's state management for handling dynamic input and file uploads, ensuring smooth and intuitive user interaction.


## Table of Contents

- [Description](#description)
- [Features](#features)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [How to Run](#how-to-run)

## Features

- **Drag-and-Drop Image Upload**:  
  - Users can drag an image file and drop it in the defined drop zone.  
  - The app accepts image files only, preventing invalid file types from being uploaded.  
  - A preview of the image is displayed immediately after it's dropped.  

- **Dynamically Generated Input Fields**:  
  - Users can dynamically add new input fields to the form, allowing for flexible data collection.  
  - Each input field is generated dynamically, accommodating various types of inputs as needed.  

- **Remove Input Fields**:  
  - Users can easily remove any dynamically generated input field by clicking the "Remove" button next to it.  
  - This feature ensures a clean and manageable form interface, letting users maintain control over their inputs.  

- **Responsive and Intuitive UI**:  
  - The form and drag-and-drop area are fully responsive, ensuring a smooth experience across devices and screen sizes.  
  - Visual feedback is provided when files are dragged over the drop zone, enhancing usability.  
## Usage

1. **Drag-and-Drop Image Upload**:
   - Open the application in your browser.
   - Drag an image file (PNG, JPG, etc.) from your computer and drop it into the designated drop zone.
   - Once the image is dropped, a preview will be displayed inside the drop area.
   - Only valid image files will be accepted, and the drop zone will highlight when the file is dragged over it.

2. **Dynamically Add Input Fields**:
   - To add a new input field, click the "Add Input" button.
   - Each click generates a new input field where you can input your data.
   - The dynamically generated fields will appear below the existing ones.

3. **Remove Input Fields**:
   - To remove any dynamically added input field, click the "Remove" button next to the corresponding input field.
   - The selected input field will be removed, and the remaining fields will adjust accordingly.

4. **Responsive Layout**:
   - The application layout adjusts for different screen sizes, ensuring usability on both desktop and mobile devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces, utilized for creating interactive components and managing application state.
- **HTML5**: The standard markup language for creating web pages, used for structuring the application's layout and elements.
- **CSS3**: The style sheet language used for describing the presentation of the web application, enhancing the visual appeal and layout.
- **HTML5 Drag-and-Drop API**: Enables drag-and-drop functionality, allowing users to upload images seamlessly.
- **JavaScript**: The programming language used to implement the application's logic and interactivity.
## Installation

Follow these steps to set up the project on your local machine:

1. **Prerequisites**:
   - Ensure you have [Node.js](https://nodejs.org/) (version 14 or later) installed on your machine.
   - It’s also recommended to have a code editor such as [Visual Studio Code](https://code.visualstudio.com/) for better development experience.

2. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/drag-drop-image.git
   cd drag-drop-image.
3. **Install the dependencies**:

Run the following command to install the necessary packages:
 ```bash
npm install.
npm run dev

