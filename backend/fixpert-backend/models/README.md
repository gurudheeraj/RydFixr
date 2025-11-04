# 🧱 Fixpert Model – RydFixr Backend

The **Fixpert Model** defines the structure and schema for storing and managing Fixpert (mechanic) data in the RydFixr application.  
It serves as the backbone for all Fixpert-related operations, including registration, OTP verification, login authentication, and dashboard data management.

---

## 🚀 Overview

In RydFixr, Fixperts are verified mechanics who respond to service requests from nearby customers.  
The `Fixpert` model stores their personal information, authentication credentials, and service details.  
This model is built using **Mongoose** to interact seamlessly with the **MongoDB** database.

---

## 🧩 Key Responsibilities

- 📋 Store Fixpert registration details such as name, email, phone number, and expertise.  
- 🔐 Securely handle password hashing and OTP-based registration.  
- ✉️ Store and verify OTPs during the sign-up process.  
- 🆔 Generate and store Fixpert IDs and credentials sent via email.  
- 📍 Support real-time updates such as location and availability status.  
- 💼 Connect with other collections such as bookings and schedules.

---
