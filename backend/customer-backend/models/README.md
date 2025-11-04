# 👤 Customer Model – RydFixr Backend

The **Customer Model** defines the structure and schema for storing and managing customer data in the RydFixr application.  
It handles user registration, OTP verification, authentication, and booking-related data, forming the backbone of all customer operations within the platform.

---

## 🚀 Overview

The RydFixr **Customer Model** is built using **Mongoose**, a MongoDB Object Data Modeling (ODM) library for Node.js.  
It ensures that customer information, such as name, email, mobile number, and booking history, is securely stored and easily retrievable for the application’s operations.

This model plays a crucial role in the **customer registration flow**, **OTP verification**, and **login authentication**, as well as in maintaining real-time data for booking and location-based services.

---

## 🧩 Key Responsibilities

- 📋 Store customer registration details such as name, email, and mobile number.  
- ✉️ Manage OTP and verification status during sign-up.  
- 🔐 Securely store and validate login credentials.  
- 📍 Maintain location data for service request mapping.  
- 🗂️ Connect customers to booking and service history collections.  

---
