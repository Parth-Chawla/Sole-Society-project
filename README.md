# Sole Society

👨‍💻 Developed by Parth Chawla (in collaboration with Mohakk(mohakkm))

⭐ A collaborative full-stack web project demonstrating frontend-backend integration.

A modern sneaker storefront application built with a Java (Spark) backend and a responsive frontend. The platform allows users to browse, search, and explore sneaker collections with an interactive UI.

---

## 🌐 Live Demo

https://parth-chawla.github.io/Sole-Society-project/

---

## ✨ Features

* Interactive search with real-time suggestions
* Brand-based sneaker collections (Jordan, Yeezy, Onitsuka Tiger)
* Fully responsive design for all devices
* Shopping cart functionality
* Detailed product pages
* Customer reviews section

---

## 💡 My Contributions

Worked collaboratively with Mohakk to develop and enhance the application:

* Improved frontend UI and user experience
* Assisted in implementing dynamic search functionality
* Integrated frontend with backend APIs
* Participated in debugging and testing

---

## 🛠️ Tech Stack

### Frontend

* HTML5, CSS3, JavaScript
* Tailwind CSS
* Responsive design principles

### Backend

* Java (Spark Framework)
* PostgreSQL
* Maven

---

## 🚀 How to Run Locally

1. Clone the repository

```
git clone https://github.com/Parth-Chawla/Sole-Society-project.git
cd Sole-Society-project
```

2. Setup database

```
createdb solesociety
psql -d solesociety -f db/migrations/001_create_tables.sql
psql -d solesociety -f db/seeds/001_seed_sneakers.sql
```

3. Run backend

```
cd backend
mvn clean package
mvn exec:java -Dexec.mainClass="com.solesociety.app.App"
```

4. Open frontend
   👉 Open `index.html` in your browser

---

## 📁 Project Structure

```
Sole-Society-project/
├── index.html
├── assets/
├── backend/
├── db/
└── README.md
```

---

## 🔌 API Endpoints

| Endpoint               | Method | Description           |
| ---------------------- | ------ | --------------------- |
| `/api/sneakers`        | GET    | Get sneakers by brand |
| `/api/sneakers/all`    | GET    | Get all sneakers      |
| `/api/sneakers/search` | GET    | Search sneakers       |
| `/api/sneakers/:id`    | GET    | Get sneaker by ID     |
| `/health`              | GET    | Health check          |

---

## 🚀 Future Improvements

* User authentication (login/signup)
* Payment gateway integration
* Admin dashboard
* AI-based sneaker recommendations

---

## 👥 Team

* Parth Chawla
* Mohakk Malvankar

---

## 📞 Contact

📧 [chawlaparth2711@gmail.com](mailto:chawlaparth2711@gmail.com)

---

⭐ If you like this project, consider giving it a star!
