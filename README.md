# 🚀 CareerFlow: Job Board SaaS with Next.js, Inngest, Arcjet, and TailwindCSS

Welcome to **CareerFlow**! This cutting-edge Job Board SaaS leverages top-tier technologies to provide a seamless experience for job seekers and organizations. Whether you're a developer expanding your portfolio or a business recruiting top talent, **CareerFlow** is the solution for you. 🌟

---

## 🌟 Features

### 🔐 **Authentication & Security**
- **Arcjet Security**: Protects against XSS, SQL injection, and other common attacks.
- **Auth.js**: Supports Google and GitHub OAuth for a smooth login experience.

### 👥 **User Roles**
- **Organization Role**:
  - Add necessary information and upload a logo.
- **Job Seeker Role**:
  - Provide details and upload a CV in PDF format.

### 📝 **Job Post Management**
- Custom salary range slider.
- Rich text editor built with **Tiptap**.
- Smooth image uploading with **Uploadthing**.
- Configurable job listing durations (30, 60, 90 days).

### 📬 **Inngest Background Workflow**
- Sends a summary of new job postings every two days for 30 days.

### 💳 **Stripe Payment Integration**
- Handles job post payments.
- Webhooks for activation and expiration.

### ⏳ **Job Expiration**
- Automatically marks job listings as expired after their duration.

### 📄 **Job Board Index Page**
- Displays all job posts with:
  - Filtering.
  - Pagination.
  - Suspense for better performance.

### ⭐ **Favorites Route**
- View all jobs marked as favorites.

### 🆔 **Job Post Details**
- Shows job information with an "Apply" button.
- Custom rate-limiting for bot protection.

### 🗂️ **CRUD Functionality**
- View, edit, and delete posted jobs.

---

## 🛠️ **Technologies Used**

| **Category**          | **Tech Stack**                                                |
|-----------------------|--------------------------------------------------------------|
| **Framework**         | [Next.js 15](https://nextjs.org)                             |
| **Styling**           | [TailwindCSS](https://tailwindcss.com), [Shadcn/UI](https://ui.shadcn.com) |
| **Database**          | [Neon Postgres](https://neon.tech/), [Prisma](https://prisma.io) |
| **Authentication**    | [Auth.js](https://authjs.dev/)                               |
| **Workflow**          | [Inngest](https://innge.st/yt-jm-1)                          |
| **Security**          | [Arcjet](https://launch.arcjet.com/hIZ0QxX)                  |
| **Payments**          | [Stripe](https://stripe.com/)                                |
| **File Uploads**      | [Uploadthing](https://uploadthing.com/)                      |
| **Validation**        | [Zod](https://zod.dev/)                                      |
| **Hosting**           | [Vercel](https://vercel.com/)                                |
| **APIs**              | [Google Cloud Console](https://console.cloud.google.com/)    |

---

## 🎨 **UI Highlights**
- Fully responsive design for seamless use across devices.
- Modern and clean architecture with performance optimization.
- TailwindCSS and Shadcn UI for a polished look.

---

## 📬 **Background Workflow**

Powered by **Inngest**, the application sends a summary of new job postings every two days for a period of 30 days.

---

## 📄 **Job Listings**

- Filter, paginate, and view all active job postings.
- Mark jobs as favorites for easy access.

---

## 📂 **CRUD Operations**

Organizations can:
- Create, view, edit, and delete job postings.

---

## ⭐ **Additional Features**
- **Job Details Page**: Includes detailed job info with an "Apply" button.
- **Rate Limiting**: Enhanced limits for authenticated users and bot protection.
- **Job Expiration**: Automatically marks jobs as expired.

---

## 🌐 **Deployment**

Easily deploy **CareerFlow** to **Vercel** for a production-ready application.

---

## 💬 **Connect with Me**

- 🌟 [Arcjet](https://launch.arcjet.com/hIZ0QxX)
- 🚀 [Inngest](https://innge.st/yt-jm-1)

---

## 📜 **License**

This project is licensed under the [MIT License](LICENSE).

---

Enjoy building with **CareerFlow**! 🚀
