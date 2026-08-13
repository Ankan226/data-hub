# The Data Hub — RESTful API Server

Sprint 09 · Track B (Fullstack Development) submission.

A backend server built with **Node.js** and **Express** that serves a mock Blog resource over a REST API, backed by an in-memory data store. Includes custom request-logging middleware and a mock authentication endpoint.

**Live Link:**  https://data-hub-9bt5.onrender.com

---

## Tech Stack

- **Node.js** — runtime
- **Express** — web framework
- **nodemon** — dev-only hot-reload
- **Postman/** — API tes

---

### Clone the repo

```bash
git clone <https://github.com/Ankan226/data-hub>
cd data-hub
```

### Install dependencies

```bash
npm install
```

### Run the server

```bash
npm run dev
```

Server boots at `http://localhost:5000`. 
You should see:- Server running at http://localhost:5000

`npm run dev` uses **nodemon**, so the server auto-restarts on file save. Use `npm start` for a plain, non-watching run.

---

## Testing — Verified via Postman/Thunder Client

All five CRUD routes plus the login endpoint were tested end-to-end:

1. Create a post — `POST /posts` → `201 Created`
2. Fetch a single post — `GET /posts/:id` → `200 OK`
3. Fetch all posts — `GET /posts` → `200 OK`
4. Update a post (partial update) — `PUT /posts/:id` → `200 OK`
5. Delete a post — `DELETE /posts/:id` → `200 OK`
6. Mock login — `POST /login` → `200 OK`

---

## Deployment

Deployed on **Render.com** .

- **Build Command:** `npm install`
- **Start Command:** `node server.js`
- **Live URL:** `<https://data-hub-9bt5.onrender.com>`

The server reads its port from `process.env.PORT` (falling back to `5000` locally), since Render assigns its own port dynamically in production.

---

## Author

Ankan Pal