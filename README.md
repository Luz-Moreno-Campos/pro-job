# ProJob  
### *Professional growth, powered by you.*

ProJob is a modern, LinkedIn‑inspired personal profile website designed to showcase your professional identity, recent work, and network.  
Built with clean HTML, CSS, and JavaScript, the site includes a full login flow, a polished three‑column layout, and dynamic user suggestions powered by the Random User API.



## 🌐 Overview

ProJob consists of two main pages:

1. **Login Page (index.html)**  
   A full‑screen login interface where users enter their credentials.  
   The system validates the input against stored credentials and redirects to the home page upon success.

2. **Home Page (home.html)**  
   A structured, professional profile layout featuring:
   - A  header with navigation and user actions  
   - A three‑column grid (left profile, center content, right contact suggestions)  
   - A footer with branding and copyright info 


## ✨ Features

### 🔐 Login System
- Username and password are stored in **localStorage**.
- On login:
  - Credentials are compared with stored values.
  - Successful login redirects the user to the home page.
  - Failed login displays inline error message.

### 🧑‍💼 Personalized Profile
- The main user’s:
  - Name  
  - Title  
  - Location  
  - Profile photo  
  - Stats  
  - Links  
  - Experience  

### 🧑‍🤝‍🧑 “People You May Know”
- **10 suggested users** fetched from the **Random User API**.
- Each suggestion displays:
  - Profile picture  
  - Full name  
  - City and country  
  - Connect button  

### 🖼️ Recent Posts
- A grid of recent work or updates with:
  - Thumbnail images  
  - Titles  
  - Dates  

### 🎨 Consistent Visual Design
- Unified color palette  
- Shared typography  
- Consistent styling across pages  

### 🧱 Modern Layout
- Three‑column grid using CSS Grid + Flexbox.


## 🛠️ Technologies Used

- **HTML5** — semantic structure  
- **CSS3** — styling  
- **JavaScript (ES6+)** — login logic, API fetch, DOM rendering  
- **Random User API** — dynamic user suggestions  
- **Font Awesome** — icons for navigation and actions  



## 🚀 Project Demo

You can view our live ProJob demo here: https://luz-moreno-campos.github.io/pro-job/


