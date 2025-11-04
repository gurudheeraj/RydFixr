# 🧩 Middleware – RydFixr Backend

The **Middleware** folder in the RydFixr backend contains reusable functions that handle authentication, validation, and request preprocessing before they reach the controllers. Middleware helps keep the code modular, secure, and maintainable by separating concerns like token verification, error handling, and input validation.

---

## 🚀 Overview

Middleware acts as the **gatekeeper** between incoming client requests and the main business logic.  
It ensures that:
- Only authenticated users (customers or Fixperts) can access protected routes.
- Incoming data is properly validated before database operations.
- Errors are caught and formatted consistently across the backend.

Every API route that requires authorization or verification passes through one or more middleware functions.

---

## 🧩 Key Responsibilities

- 🔐 **Authentication:** Validates JWT tokens for secure route access.  
- 🧾 **Validation:** Checks required fields and proper data format before controller logic runs.  
- ⚙️ **Error Handling:** Catches and responds to runtime or validation errors.  
- 🧠 **Request Logging:** (Optional) Logs details for debugging and monitoring API calls.  
- 🧭 **Role-Based Access:** Restricts routes based on user roles (Customer or Fixpert).  

---
