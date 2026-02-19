# 🔐 JWT Authentication System  
### React + Django REST Framework + SimpleJWT

A full-stack authentication system built using **React (Frontend)** and **Django REST Framework (Backend)** implementing secure **JWT-based authentication** with access and refresh tokens.

This project demonstrates how modern authentication works in production-level applications using access tokens, refresh tokens, protected routes, and automatic token refresh handling.

---

## 🚀 Features

- User Login using JWT
- Access & Refresh Token System
- Protected Routes (Frontend)
- Auto Token Refresh
- 401 Error Handling with Retry
- Global Authentication State using Context API
- Secure Logout Functionality
- Custom Token Claims (Optional)
- Clean API Structure with DRF

---

## 🏗️ Tech Stack

### 🔹 Frontend
- React
- React Router DOM
- Context API
- Axios
- jwt-decode

### 🔹 Backend
- Django
- Django REST Framework
- SimpleJWT
- SQLite (Default)

---

## 📂 Project Structure

jwt-auth-project/
│
├── backend/
│ ├── api/
│ ├── project/
│ ├── manage.py
│
├── frontend/
│ ├── src/
│ │ ├── context/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── utils/
│ │ └── App.js
│
└── README.md


---

# ⚙️ Backend Setup (Django)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/jwt-auth-project.git
cd jwt-auth-project/backend
2️⃣ Create Virtual Environment
python -m venv venv
Activate it:

Windows

venv\Scripts\activate
Mac/Linux

source venv/bin/activate
3️⃣ Install Dependencies
pip install -r requirements.txt
4️⃣ Apply Migrations
python manage.py migrate
5️⃣ Create Superuser
python manage.py createsuperuser
6️⃣ Run Server
python manage.py runserver
Backend runs at:

http://127.0.0.1:8000/
🔐 JWT API Endpoints
Endpoint	Method	Description
/api/token/	POST	Get Access & Refresh Token
/api/token/refresh/	POST	Refresh Access Token
💻 Frontend Setup (React)
1️⃣ Navigate to Frontend
cd ../frontend
2️⃣ Install Dependencies
npm install
3️⃣ Start Frontend
npm start
Frontend runs at:

http://localhost:3000/
🔄 Authentication Flow
User logs in.

Backend returns:

Access Token (short expiry)

Refresh Token (long expiry)

Access token is attached to API requests.

If access token expires:

Refresh token is used to get a new access token.

If refresh token expires:

User is logged out.

🔒 Protected Routes
Protected routes are implemented using:

Context API

LocalStorage token check

Conditional rendering

React Router <Navigate />

Only authenticated users can access private pages.

📌 Environment Variables (Optional)
You may configure backend URL in frontend:

Create .env file in frontend:

REACT_APP_API_URL=http://127.0.0.1:8000/api
🧠 Learning Goals
This project helps understand:

How JWT works internally

Difference between Access & Refresh tokens

Secure API authentication

State management for auth

Handling expired tokens

Production-ready auth flow

📷 Future Improvements
Register API

Email Verification

Role-based Authorization

Token Blacklisting

Deployment (Docker + Nginx)

HTTPS Configuration

👨‍💻 Author
Sagar Shukla
Computer Science Student
Focused on Backend Development (Python & Django)
