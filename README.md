Certainly! Here's an updated README.md file that reflects the changes in the file structure:

# React User Management Dashboard

## 📋 Project Overview

A modern, responsive user management dashboard built with React, Redux Toolkit, and Tailwind CSS. The application provides features like user listing, search, pagination, and user deletion.

## ✨ Features

- 🔍 Real-time search functionality with debounce
- 📄 Pagination support
- 🗑️ User deletion
- 💻 Responsive design
- 🚀 Performant state management with Redux Toolkit
- 🎨 Tailwind CSS styling
- 📊 User Analytics


## 🛠 Tech Stack

- React
- TypeScript
- Redux Toolkit
- Axios
- Tailwind CSS
- Lucide React Icons
- React Charts
## 🚦 Prerequisites

- Node.js (v14 or later)
- npm or yarn

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/user-management-dashboard.git
cd user-management-dashboard
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or 
yarn start
```

## 📂 Project Structure

```
src/
│
├── components/
│   └── NavBar.tsx       # Main dashboard component
│
├── utils/
│   └── useDebounce.ts          # Custom hooks /utility files such as dummy data
│
├── pages/
│   ├── Analytics.tsx
│   ├── Dashboard.tsx
│   └── Login.tsx
│
├── redux/
│   ├── store.ts                # Redux store configuration
│   └── userSlice.ts            # Users slice with reducers and actions
    └── Slices.ts            #User Analytics Slices
│
├── utils/
│   └── analyticsData.json          
│
└── App.tsx                     # Main application component
```

## 🔑 Key Components

### UserDashboard
- Renders user list with search and pagination
- Handles user deletion
- Implements debounced search

### Redux Slice
- Manages global state for users
- Handles async user fetching
- Provides actions for search and pagination

## 🔍 Search Functionality

- Debounced search with 300ms delay
- Filters users by name or email
- Real-time results update

## 📄 Pagination

- 5 users per page
- Previous/Next page navigation
- Dynamically calculates total pages

## 🌐 API Integration

Uses JSONPlaceholder as a mock API for user data:
- Endpoint: `https://jsonplaceholder.typicode.com/users`
- Fetches users on component mount

## 🎨 Styling

Utilizes Tailwind CSS for responsive and clean design:
- Centered layout
- Hover effects
- Responsive tables
- Loading and error states

## Mock Credentilas
Mail:user@gmail.com
Password:password123


