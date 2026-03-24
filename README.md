# 🧭 Saarthi – सारथी
### Your Smart Guide to Government Schemes

A **multilingual**, **voice-enabled**, **animated** kiosk app for hackathons.

---

## 📁 FOLDER STRUCTURE

After setup, your project should look like this:

```
saarthi/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── context/
    │   └── AppContext.jsx
    ├── data/
    │   ├── translations.js
    │   └── schemes.js
    ├── screens/
    │   ├── WelcomeScreen.jsx
    │   ├── LanguageScreen.jsx
    │   ├── ChatScreen.jsx
    │   └── ResultsScreen.jsx
    └── components/
        ├── ParticleBg.jsx
        └── SchemeModal.jsx
```

---

## 🚀 HOW TO RUN (Step by Step)

### STEP 1 — Install Node.js
1. Go to: https://nodejs.org
2. Download the **LTS version** (green button)
3. Install it (just click Next, Next, Finish)
4. To verify: open **Terminal** (Mac/Linux) or **Command Prompt** (Windows) and type:
   ```
   node --version
   ```
   You should see something like `v20.x.x`

---

### STEP 2 — Copy the project files
1. Create a new folder called `saarthi` on your Desktop
2. Copy **all** the files you received into that folder
3. Make sure the folder structure matches what's shown above

---

### STEP 3 — Open Terminal in the project folder
- **Windows**: Open the `saarthi` folder → click in the address bar → type `cmd` → press Enter
- **Mac**: Right-click the `saarthi` folder → "New Terminal at Folder"
- **VS Code**: Open the folder in VS Code → Terminal → New Terminal

---

### STEP 4 — Install dependencies
Type this command and press Enter:
```bash
npm install
```
Wait for it to finish (may take 1–2 minutes). You'll see a `node_modules` folder appear.

---

### STEP 5 — Run the app
```bash
npm run dev
```

You'll see output like:
```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
```

---

### STEP 6 — Open in browser
Go to: **http://localhost:5173**

🎉 Your Saarthi kiosk is running!

---

## 🌐 FOR DEMO / PRESENTATION

To open full-screen in Chrome:
- Press **F11** (Windows) or **Cmd+Shift+F** (Mac)

To show on a touchscreen kiosk:
- Use Chrome in kiosk mode:
  ```
  chrome --kiosk http://localhost:5173
  ```

---

## 🎤 VOICE FEATURES

Voice input works in **Chrome** and **Edge** browsers.

- On language screen: Say "English", "Hindi", or "Marathi"
- On chat screen: Say your age number or occupation
- After selecting language: App speaks a greeting aloud

---

## 🖨️ PRINT FEATURE

1. Click any scheme card
2. In the popup, click "Print Details"
3. Browser print dialog opens with clean layout

---

## 📦 TECH STACK

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Fast build tool |
| Tailwind CSS | Styling |
| qrcode.react | QR code generation |
| react-to-print | Print functionality |
| Web Speech API | Voice input/output |
| CSS Animations | Transitions & effects |

---

## ✨ FEATURES

- ✅ Multilingual (English, Hindi, Marathi)
- ✅ Voice input & voice output
- ✅ Smooth screen transitions
- ✅ Animated particles background
- ✅ Glowing hover effects on all cards
- ✅ Match % scoring (Age + Income + Occupation)
- ✅ "Best Match" highlighted card
- ✅ 8 real government schemes
- ✅ QR code for portal link
- ✅ Print with document checklist
- ✅ Fullscreen kiosk layout
- ✅ Touch-friendly large buttons
- ✅ Zero runtime errors

---

## 🛠️ IF SOMETHING GOES WRONG

**"npm not found"** → Install Node.js first (Step 1)

**"port 5173 in use"** → Use `npm run dev -- --port 3000`

**Voice not working** → Use Chrome or Edge browser

**QR not showing** → Run `npm install` again

---

Good luck at the hackathon! 🏆
