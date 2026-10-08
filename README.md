# Cloud-Based Employee Management System

## 1. Project Overview

The Cloud-Based Employee Management System is a web application designed to manage employee information through a simple dashboard.

The project demonstrates cloud-computing concepts such as centralized data management, browser-based access, cloud-ready architecture, and deployment.

## 2. Objectives

- Add and manage employee records.
- Search employee information.
- Display employee statistics.
- Delete employee records.
- Provide a foundation for cloud database integration.
- Deploy the application online.

## 3. Technologies Used

- HTML5
- CSS3
- JavaScript
- Firebase Firestore (cloud extension)
- GitHub
- Firebase Hosting / GitHub Pages

## 4. Current Demo

The included version uses browser localStorage so the project can run immediately in VS Code without configuration.

## 5. How to Run in VS Code

1. Extract the ZIP file.
2. Open the extracted folder in VS Code.
3. Open `index.html`.
4. Install the **Live Server** extension if needed.
5. Right-click `index.html`.
6. Select **Open with Live Server**.
7. Add employee records and test search/delete.

## 6. Cloud Deployment

For a real cloud implementation, connect the project to Firebase Firestore and deploy it using Firebase Hosting.

Basic deployment flow:

```text
VS Code
   ↓
Test Application
   ↓
Firebase Project
   ↓
Firestore Database
   ↓
GitHub Repository
   ↓
Firebase Hosting
   ↓
Live Website
```

## 7. GitHub Commands

After creating a GitHub repository:

```bash
git init
git add .
git commit -m "Initial Employee Management System"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## 8. Future Enhancements

- Firebase Authentication
- Firestore cloud database
- Employee profile photos
- Attendance management
- Salary management
- Admin and employee login
- Cloud Storage
- Role-based access control

## 9. Author

Student Cloud Computing Project
