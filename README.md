# 🎓 Student Assistance Chatbot  
A smart and interactive chatbot platform that helps students access syllabus content, textbooks, notes, PDFs, exam guidance, career suggestions, and more — all from a single unified interface.

---

## 🚀 Project Overview  
The Student Assistance Chatbot is designed to support students from **10th, 12th, UG, and PG levels** by providing:

- 📚 Subject-wise study materials  
- 📄 Notes, PDFs, and textbooks  
- 🎯 Career & Higher-Studies guidance  
- 💬 AI-powered chat support  
- 🔐 Secure login & dashboard  
- 📊 Personalized student experience  

This project was built as a **final-year major project**, focusing on real-time academic assistance and centralized learning support.

---

## 🧰 Tech Stack Used

### **Frontend**
- React (Vite)
- TailwindCSS
- JavaScript (ES6+)

### **Backend**
- Node.js  
- Express.js  
- JWT Authentication  
- bcryptjs (password hashing)

### **Other Tools**
- Git & GitHub  
- REST APIs  
- CORS  
- dotenv  

---

## 🔒 Features

### 👥 **Authentication**
- User Registration  
- Secure Login using JWT  
- Password hashing using bcrypt  

### 🎓 **Student Dashboard**
- Access study materials by class/subject  
- Personalized learning categories  

### 💬 **Chat Interface**
- AI-assisted support  
- Provides summaries, guidance, and links  

### 📘 **Resources Section**
- PDFs  
- Notes  
- Syllabus  
- External YouTube/Website references  

---

## 📁 Project Structure

```
project/
│
├── server/               # Backend API
│   ├── index.js          # Main server file
│   └── package.json
│
├── src/                  # React source code
│   ├── components/       # UI Components
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
│
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## ▶️ How to Run the Project Locally

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/prashanth3304/Student-Assistance-Chatbot.git
cd Student-Assistance-Chatbot
```

---

## **2️⃣ Install Frontend Dependencies**
```bash
npm install
npm run dev
```
Frontend runs at:
```
http://localhost:5173/
```

---

## **3️⃣ Start Backend Server**
```bash
cd server
npm install
node index.js
```

Backend runs at:
```
http://localhost:5000/
```

---

## 🧪 API Endpoints

### **Register User**
```
POST /api/register
```
### **Login User**
```
POST /api/login
```

---

## 🎯 Future Enhancements
- AI model integration (LLM)  
- Admin dashboard  
- Student performance tracking  
- Voice-enabled chatbot  
- Cloud deployment  

---

## 👨‍💻 Author
**Kodalwar Prashanth**  
B.Tech — CSIT | 2025 Graduate  
💼 Passionate about AI, Web Development, and Smart Education Systems.  
📧 Email: *your email here*

---

## ⭐ Support the Project
If you like this project, please give it a ⭐ on GitHub!

