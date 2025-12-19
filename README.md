# 🕵️‍♂️ Anonymous Messaging Application 
  made with ❤️ by krishna

A full-stack **Anonymous Messaging Platform** built with **Next.js (App Router)**, **TypeScript**, and **MongoDB** that allows users to send and receive anonymous messages through a unique shareable link — without revealing sender identity.

---

## 🚀 Live Demo
> *(Add deployment link here when hosted on Vercel)*

---

## 📸 Screenshots

> Landing Page  
> Anonymous Message Flow  
> Authentication (Signup / Login)  
> Dashboard & Message Management  

*(Screenshots included in the repository)*

---

## ✨ Features

### 🔐 Authentication & Security
- Secure password hashing using **bcrypt**
- Cookie-based authentication
- **JWT authentication work in progress** ✅

### 💬 Anonymous Messaging
- Send messages anonymously without login
- No sender identity stored
- Character-limited messages (up to 1000 chars)

### 👤 User Dashboard
- View received messages
- Delete messages
- Toggle message-accepting status
- Copy & share unique profile link

### 🎨 Modern UI
- Built using **shadcn/ui**
- Toast notifications
- Hover cards & carousels
- Responsive & accessible design

---

## 🛠 Tech Stack

**Frontend**
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

**Backend**
- Next.js API Routes
- MongoDB Atlas
- Mongoose
- bcrypt for password hashing

**Other**
- Zod (validation)

---

## 📂 Project Structure

anonymous-messaging-app/
├── app/
│ ├── api/
│ ├── auth/
│ ├── dashboard/
│ └── send/
├── components/
├── lib/
├── models/
├── public/
├── .env.local
├── package.json
└── README.md


---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root:
```env
`MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/anonymous_app
JWT_SECRET=your_jwt_secret  # JWT work in progress`

--
 
