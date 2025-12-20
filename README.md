# 🕵️‍♂️ Anonymous Messaging Application 
  made with ❤️ by krishna

A full-stack **Anonymous Messaging Platform** built with **Next.js (App Router)**, **TypeScript**, and **MongoDB** that allows users to send and receive anonymous messages through a unique shareable link — without revealing sender identity.

---



---

## Screenshots


> Landing Page
<img width="1818" height="786" alt="Screenshot 2025-12-19 183132" src="https://github.com/user-attachments/assets/94da760e-88a1-4830-84af-6a203cda76e1" />

> Anonymous Message Flow <img width="1801" height="700" alt="Screenshot 2025-12-19 183144" src="https://github.com/user-attachments/assets/88ca894e-7911-4087-8e8f-8c2e249001c4" />
 
> Authentication (Signup / Login) <img width="1779" height="655" alt="Screenshot 2025-12-19 183154" src="https://github.com/user-attachments/assets/67b2c34f-25ec-4067-9f9e-10d1f2747c42" />
 
> Dashboard & Message Management  <img width="1895" height="1018" alt="Screenshot 2025-12-19 183243" src="https://github.com/user-attachments/assets/67678ba3-8f9f-4c81-bf3e-1ae135cebc70" />


*(Screenshots included in the repository)*

---

## Features

###  Authentication & Security
- Secure password hashing using **bcrypt**
- Cookie-based authentication
- **JWT authentication work in progress** ✅

###  Anonymous Messaging
- Send messages anonymously without login
- No sender identity stored
- Character-limited messages (up to 1000 chars)

###  User Dashboard
- View received messages
- Delete messages
- Toggle message-accepting status
- Copy & share unique profile link

###  Modern UI
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

##  Project Structure

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

##  Environment Variables

Create a `.env.local` file in the project root:
```env
`MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/anonymous_app
JWT_SECRET=your_jwt_secret  # JWT work in progress`

--
 
