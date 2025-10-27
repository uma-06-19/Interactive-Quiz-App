Interactive Quiz App with Python Flask and SQLite
 
  This repository demonstrates a full-stack interactive quiz application built using Python Flask as the backend and HTML/JavaScript for the frontend. The app uses SQLite as the database to store user credentials, quizzes, and user responses.

Features:

  Python Flask Backend: RESTful APIs for user authentication, quiz management, and results tracking.
SQLite Database: Lightweight relational database for persistent data storage.
Interactive Frontend: Clean, responsive HTML and JavaScript-based UI for taking quizzes and viewing results.
User Authentication: Secure login system with password hashing and session management.
CRUD Operations: Create, read, update, and delete quizzes and questions easily.
Customizable: Extend with new features or UI improvements as needed.

Prerequisites:

Before running the project, ensure you have the following installed:

Python 3.x – for running the backend server
Flask – install via pip install flask
Werkzeug – included with Flask, used for password hashing
SQLite – usually included with Python installations
Modern Web Browser – for using the frontend interface

Getting Started:
1️⃣ Clone the Repository:

Bash

git clone https://github.com/Jerma-5/Interactive-Quiz-App/

cd Interactive-Quiz-App

2️⃣ Create the Database and Tables:

Bash

python create_db.py

3️⃣ Start the Flask Development Server

Bash

python app.py

4️⃣ Open in Browser

Visit http://127.0.0.1:5000 to access the application.

Project Structure:
interactive-quiz-app/

│

├── app.py # Main Flask backend

├── create_db.py # Script to initialize the SQLite database

├── static/

│ ├── style.css # Frontend styling

│ └── script.js # Frontend logic

├── templates/

│ ├── index.html # Login page and quiz interface

│

├── quiz.db # SQLite database file (auto-created)

└── README.md # Project documentation

Future Improvements:
Add quiz categories and difficulty levels
Implement a leaderboard system
Add timer-based quizzes
Include admin panel for quiz management
License:
This project is open-source and available under the MIT License.

Feel free to modify and enhance it as you wish.
