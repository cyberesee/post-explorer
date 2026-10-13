# Dynamic Post Explorer

**Course:** WAD 1 – Web Application Development  
**Activity:** Week 7 – Fetch API & Asynchronous Data  
**Student:** Guevarra, Mary Therese C. – BSIS 2

---

## Description

A single-page web application that loads five short, readable Harry Potter-themed stories using the Fetch API and `async/await`.  

The page **never refreshes**. All content is updated dynamically through the DOM. The app correctly handles:

- Loading state (spinner + disabled button)
- Success state (5 post cards)
- Empty state
- Error state with a **Try again** button

**API used:** `GET https://jsonplaceholder.typicode.com/posts`  
(The original data is fetched, then replaced with clean Harry Potter content for better readability while keeping all required fetch logic intact.)

---

## Features (mapped to the 8 required behavior specifications)

| #  | Requirement                  | How it is implemented |
|----|------------------------------|-----------------------|
| 01 | Load Button Integration      | `loadBtn.addEventListener("click", loadPosts)` |
| 02 | Async / Await Syntax         | `async function loadPosts()` with `await fetch()` and `await response.json()` |
| 03 | First 5 Posts Limit          | `const POST_LIMIT = 5` |
| 04 | Safe DOM Rendering           | Only `createElement` + `textContent` (never `innerHTML`) |
| 05 | Loading Indicators           | Spinner + “Loading posts...” message + button disabled |
| 06 | Error Handling               | `try / catch / finally` + manual `response.ok` check |
| 07 | Retry Capability             | “Try again” button appears in the catch block |
| 08 | No Page Refresh              | All updates are done through the DOM |

---

## Project Structure

```
post-explorer/
├── index.html          # Page structure
├── style.css           # Layout, colors, spinner, error styles
├── app.js              # Fetch logic, rendering, error handling
├── README.md           # This file
└── screenshots/
    ├── success.png     # App after successful load
    └── error.png       # App showing error + Try again button
```

---

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/cyberesee/post-explorer.git
   cd post-explorer
   ```

2. Start a local server (required to avoid CORS issues):
   - **VS Code:** Right-click `index.html` → “Open with Live Server”
   - **Python:** `python -m http.server 5500` then open http://localhost:5500
   - **Node:** `npx serve .`

3. Click the **Load posts** button.

### Quick testing shortcuts

| URL | What happens |
|-----|--------------|
| Normal page | Loads the 5 Harry Potter posts |
| `?simulate=empty` | Shows the empty-state message |
| `?simulate=error` | Forces the error state + Try again button |

---

## Testing Checklist

| Test | Action | Expected result |
|------|--------|-----------------|
| Normal click | Click **Load posts** | 5 Harry Potter posts appear |
| Repeated clicks | Click the button rapidly | Button disables immediately; only one request is sent |
| Throttling | DevTools → Network → Slow 3G → click | Spinner and “Loading posts...” appear during the delay |
| Offline mode | DevTools → Network → Offline → click | Red error message + **Try again** button appear |
| Retry | Restore network → click **Try again** | Posts load successfully |

---

## Screenshots

### Success State
![Success – 5 Harry Potter posts loaded]
(screenshots/success.png)
(screenshots/success (2).png)

### Error State
![Error – network failure with Try again button]
(screenshots/error.png)
(screenshots/error (2).png)

---

## Technologies Used

- HTML5
- CSS3 (custom properties, grid layout, accessibility)
- JavaScript (ES6+)
  - Fetch API
  - async / await
  - DOM manipulation with `textContent`
- JSONPlaceholder (practice REST API)

---

## Author

Guevarra, Mary Therese C.
WAD 1 – Week 7 Activity
