# 🧠 Controllers – RydFixr Backend

The **Controllers** folder in the RydFixr backend contains the core business logic that powers both the **Customer** and **Fixpert** modules. Controllers act as an intermediary between the **routes** and the **database models**, handling validation, authentication, and operational workflows for all API requests.

---

## 🚀 Overview

Each controller file is responsible for managing a specific feature or entity within the application.  
Controllers process incoming HTTP requests, interact with the MongoDB models, and return appropriate responses to the frontend.

For example:
- When a customer registers, the `customerController.js` handles OTP generation, temporary data storage, and email sending.
- When a Fixpert verifies their OTP, the `fixpertController.js` generates a unique Fixpert ID and password, sends them via email, and finalizes registration.

---

## 🧩 Key Responsibilities

- 🧾 **Data Validation:** Ensures input data from routes is accurate and complete.  
- 🔐 **Authentication:** Manages login, OTP verification, and JWT token creation.  
- 📧 **Email Handling:** Uses Nodemailer to send OTPs and Fixpert credentials.  
- 📦 **Database Interaction:** Connects with Mongoose models to perform CRUD operations.  
- ⚡ **Real-Time Triggers:** Emits WebSocket events (e.g., new requests, updates).  
- 📊 **Response Handling:** Sends structured success or error responses to the client.

---
