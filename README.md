# 🏠 Airbnb Clone

A full-stack **Node.js + Express + EJS** web application inspired by Airbnb, allowing users to list, browse, and review rental properties.

---

## 🚀 Features

- 🔐 User authentication & sessions (Login / Register)
- 🏡 Hosts can create, edit, and delete property listings
- 🔎 Guests can browse and view listings with images
- 💬 Review system for guests to rate listings
- 📱 Fully responsive UI (HTML, CSS, JS)
- ⚙️ Asynchronous error handling with custom utilities
- 🧩 Modular code structure (MVC pattern)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | HTML, CSS, EJS, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (via Mongoose) |
| **Utilities** | Custom `wrapAsync` and `ExpressError` modules |

---

## 📂 Folder Structure

Airbnb_Clone/

├── classroom/

│ ├── routes/

│ └── server.js

├── init/

│ ├── data.js

│ └── index.js

├── models/

│ ├── listing.js

│ └── review.js

├── public/

│ ├── css/

│ └── js/

├── routes/

│ ├── listing.js

│ └── review.js

├── utils/

│ ├── ExpressError.js

│ └── wrapAsync.js

├── views/ # EJS templates

├── app.js # Main server file

├── schema.js # Database connection/schema setup

├── package.json

├── package-lock.json

└── .gitignore

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Suraj3155/Airbnb_Clone.git
cd Airbnb_Clone
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Configure environment variables
Create a .env file in the project root:

env
Copy code
PORT=3000
MONGO_URI=<your-mongodb-uri>
SESSION_SECRET=<your-secret>
4️⃣ Run the app
bash
Copy code
node app.js
Then visit 👉 http://localhost:3000

🧠 Key Files Explained
File	Description
app.js	Main server entry, middleware setup, routes mounting
schema.js	MongoDB connection and schema initialization
models/listing.js	Listing model (property details)
models/review.js	Review model (ratings & comments)
routes/listing.js	Handles listing-related routes
routes/review.js	Handles review-related routes
utils/wrapAsync.js	Helper for async route handlers
utils/ExpressError.js	Custom error class

💡 Future Enhancements
🧭 Add Google Maps API for location display

💳 Payment gateway integration

🪶 Image upload via Cloudinary

📊 Admin dashboard for analytics

🗺️ Filter and sorting functionality

📜 License
This project is licensed under the MIT License.

👨‍💻 Author
Suraj Patil
📧 [YourEmail@example.com]
🔗 GitHub Profile

yaml
Copy code

---

Would you like me to **generate this as a ready-to-upload `README.md` file** (so you can directly add it to your GitHub repo)?






