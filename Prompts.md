## Prompt 1 — Initial scaffolding request

**Prompt:**
"Make this assignment stepwise — first give me folder structure, then step by step file-wise raw code for copy paste, for Track B. Also give me all the necessary installs since I don't know anything."

**Purpose:** Understand the required project structure (`middleware/`, `routes/`, `server.js`) and get a working baseline for Express server setup, in-memory CRUD, custom middleware, and mock auth.

**What I did with it:** Used it as a reference to scaffold the project — typed out `server.js`, `middleware/logger.js`, and `routes/posts.js` manually rather than blind-pasting, and ran `npm install` for `express` and `nodemon` myself.

---

## Prompt 2 — Debugging `req.body` undefined error

**Prompt (with screenshot):** Shared a Postman screenshot showing a `500 Internal Server Error` — `TypeError: Cannot destructure property 'title' of 'req.body' as it is undefined`.

**Purpose:** Understand why the POST request was failing.

**What I learned:** The Postman **Body** tab was set to JSON but the actual text box was empty (only showing the line-number placeholder `1`, not real content). Root cause was operator error, not a code bug — I hadn't typed the JSON payload into the request body before hitting Send.

**What I did with it:** Fixed by actually typing the JSON body (`{ "title": ..., "content": ... }`) into the raw/JSON body editor before sending. Verified fix worked — request returned `201 Created`.

---

## Prompt 3 — Debugging cascading 404 errors

**Prompt (with screenshots):** Shared screenshots of `GET /posts/2`, `PUT /posts/2`, and `DELETE /posts/2` all returning `404 Not Found`, plus a `POST /posts/2` returning "Cannot POST /posts/2".

**Purpose:** Understand why these requests were failing even though the routes existed in `posts.js`.

**What I learned:**
- Post `id: 2` never existed because the earlier POST (Prompt 2 issue) had failed — so GET/PUT/DELETE by `id: 2` correctly returned 404.
- `POST /posts/2` is not a valid route by design — POST always targets `/posts` (no id in the URL), since the server generates the id itself. Hitting `/posts/2` with POST correctly returns Express's default "Cannot POST" error since no such route is defined.

**What I did with it:** Corrected my testing sequence — POST to `/posts` first to create the record, then used the returned `id` for subsequent GET/PUT/DELETE calls.

---

## Prompt 4 — Deployment configuration

**Prompt:** Asked about deploying to Render.com and whether the hardcoded `PORT = 5000` would cause issues in production.

**Purpose:** Understand platform-as-a-service port binding.

**What I learned:** Render assigns its own dynamic port via `process.env.PORT`; hardcoding `5000` would prevent the app from starting on the platform.

**What I did with it:** Changed the line in `server.js` from:
```js
const PORT = 5000;
```
to:
```js
const PORT = process.env.PORT || 5000;
```
This keeps local development working (`5000`) while allowing Render to inject its own port in production.

---

## Prompt 5 — Git workflow

**Prompt:** Asked for git commands to push files individually rather than one bulk commit.

**Purpose:** Learn to structure a clean, file-by-file commit history for the GitHub submission.

**What I did with it:** Used the suggested sequence (`.gitignore` → `package.json` → `middleware/logger.js` → `routes/posts.js` → `server.js`) to create a readable commit history before pushing to `origin main`.