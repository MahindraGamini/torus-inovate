# React User Management & Analytics Dashboard

## 📋 Project Overview

A modern, responsive user management and analytics dashboard built with React, Redux Toolkit, and Tailwind CSS. This application provides a comprehensive suite of features, including user listing, real-time search, pagination, analytics, and visualizations.

## ✨ Features

### 🔍 User Management
- Real-time search functionality with debounce (300ms delay).
- Pagination with dynamic page calculation (5 users per page).
- User deletion with immediate UI updates.

### 📊 Analytics Dashboard
- Overview Cards:
  - Total Users: Displays the count of all fetched users.
  - Active Users: Simulated data representing active user count based on mock fields like status.
  - Deleted Users: Tracks the count of users deleted during the session.
- Charts Section:
  - User Registration Trend: Line chart showing user registration trends over the last 6 months (mock data).
  - Active vs. Inactive Users: Pie chart visualizing the ratio of active to inactive users.
  - Users by Region: Bar chart representing user distribution across mock regions.

### 🎨 Styling
- Fully responsive with Tailwind CSS.
- Clean, modern design with hover effects and animations.
- Intuitive layout for a seamless user experience.

## 🛠 Tech Stack
- React: For UI development.
- TypeScript: For type-safe JavaScript.
- Redux Toolkit: For state management.
- Axios: For API requests.
- Tailwind CSS: For styling.
- Lucide React Icons: For beautiful and consistent icons.
- Chart.js: For creating dynamic, interactive charts.

## 🚦 Prerequisites
- Node.js (v14 or later).
- npm or yarn package manager.

## 📦 Installation

1. Clone the repository:
 
   git clone https://github.com/MahindraGamini/torus-inovate/

 src/
│
├── pages/
│   ├── UserDashboard.tsx       # User Management Dashboard
│   ├── AnalyticsDashboard.tsx  # Analytics Dashboard with charts
│   └──Login.tsx                # Login Page
|
|__ components/
|  |___NavBar.tsx
|
├── utils/
│   └── useDebounce.ts          # Custom debounce hook
│
├── redux/
│   ├── store.ts                # Redux store configuration
│   └── usersSlice.ts           # Users slice with reducers and actions
│   └── Slices.ts              #Analytic Slices with reducers and actions
├── utils/
│   └── mockData.ts             # Mock data for analytics and charts
│
└── App.tsx                     # Main application component
  
Here’s the complete content in Markdown syntax. You can copy this and paste it into your `README.md` file:


# React User Management & Analytics Dashboard

## 📋 Project Overview

A modern, responsive user management and analytics dashboard built with React, Redux Toolkit, and Tailwind CSS. This application provides a comprehensive suite of features, including user listing, real-time search, pagination, analytics, and visualizations.

## ✨ Features

### 🔍 User Management
- Real-time search functionality with debounce (300ms delay).
- Pagination with dynamic page calculation (5 users per page).
- User deletion with immediate UI updates.

### 📊 Analytics Dashboard
- Overview Cards:
  - Total Users: Displays the count of all fetched users.
  - Active Users: Simulated data representing active user count based on mock fields like status.
  - Deleted Users: Tracks the count of users deleted during the session.
- Charts Section:
  - User Registration Trend: Line chart showing user registration trends over the last 6 months (mock data).
  - Active vs. Inactive Users: Pie chart visualizing the ratio of active to inactive users.
  - Users by Region: Bar chart representing user distribution across mock regions.

### 🎨 Styling
- Fully responsive with Tailwind CSS.
- Clean, modern design with hover effects and animations.
- Intuitive layout for a seamless user experience.

## 🛠 Tech Stack
- React: For UI development.
- TypeScript: For type-safe JavaScript.
- Redux Toolkit: For state management.
- Axios: For API requests.
- Tailwind CSS: For styling.
- Lucide React Icons: For beautiful and consistent icons.
- Chart.js: For creating dynamic, interactive charts.

## 🚦 Prerequisites
- Node.js (v14 or later).
- npm or yarn package manager.

## 📦 Installation

1. Clone the repository:
 
   git clone https://github.com/yourusername/user-management-dashboard.git
   cd user-management-dashboard
  
2. Install dependencies:
 
   npm install
   # or
   yarn install
  
3. Start the development server:
 
   npm start
   # or
   yarn start
  

## 📂 Project Structure


src/
│
├── components/
│   ├── UserDashboard.tsx       # User Management Dashboard
│   ├── AnalyticsDashboard.tsx  # Analytics Dashboard with charts
│
├── hooks/
│   └── useDebounce.ts          # Custom debounce hook
│
├── redux/
│   ├── store.ts                # Redux store configuration
│   └── usersSlice.ts           # Users slice with reducers and actions
│
├── utils/
│   └── mockData.ts             # Mock data for analytics and charts
│
└── App.tsx                     # Main application component
```

## 🔑 Key Components

### User Management Dashboard
- Search: Dynamically filters users by name or email with a 300ms debounce delay.
- Pagination: Displays users in pages (5 users per page). Supports previous/next navigation.
- Delete: Removes users from the list with an updated state.

### Analytics Dashboard
- Displays high-level metrics in cards (Total Users, Active Users, Deleted Users).
- Visualizes data using charts:
  - Line Chart: User registration trends over the past 6 months.
  - Pie Chart: Active vs. Inactive user ratio.
  - Bar Chart: User distribution by regions.
- Allows filtering by date range and region (mock data).

## 🌐 API Integration
- API Endpoint: `https://jsonplaceholder.typicode.com/users`.
- Fetches user data on component mount.
- Simulates analytics data with mock utilities.

## 🎨 Styling
- Tailwind CSS for responsive design:
  - Centered layout.
  - Hover effects on buttons and rows.
  - Responsive tables and charts.
  -Chart.js for dynamic visualizations.

## 📄 Features Breakdown

### 🔍 Search Functionality
- Debounced search with 300ms delay for optimal performance.
- Filters users by name or email in real time.

### 📄 Pagination
- Displays 5 users per page.
- Dynamically calculates total pages based on the user count.

### 📊 Analytics Features
- Overview Cards: Key statistics displayed prominently.
- Line Chart: Visualizes user registration trends over the past 6 months.
- Pie Chart: Shows the proportion of active vs. inactive users.
- Bar Chart: Highlights user distribution across different regions.

## 🔧 Customization
Easily adjustable parameters:
- Modify users per page.
- Adjust search debounce delay.
- Customize chart labels and mock data/

## 🙌 Acknowledgements
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)





## Mock Credentials
-Email: user@gmail.com
- Password: password123


