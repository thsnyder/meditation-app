# ☁️ IT Manager Meditation App ☁️

Welcome to the **IT Manager Meditation App** — your digital zen garden for the world of tech support, sysadmins, and anyone who's ever uttered the words, "Have you tried turning it off and on again?"

## 🧘‍♂️ What is this?
A playful, tongue-in-cheek meditation app for IT professionals. Each session is themed around the daily joys (and crises) of IT life, complete with:
- Custom cover art for select tracks
- Audio meditations (with real durations!)
- Session tags (like "Peace", "Release", "Gratitude")
- A modern, responsive UI powered by Tailwind CSS
- A snazzy audio player with all the controls you need

## 🚀 Features
- **De-Stress Sessions:** Meditate on the bliss of an empty ticket queue or a flawless Patch Tuesday.
- **Crisis Calming:** DNS is resolving? Everything pings? Breathe in, breathe out.
- **Vision Boards:** Imagine a world with zero meetings and 100% uptime (we can dream!).
- **Bonus Tracks:** For when you need to Ctrl+Alt+Delete your stress.
- **Cover Art:** Some sessions feature custom images for extra zen.
- **Audio Player:** Play, pause, skip, and see your progress — all in style.

## 🖥️ How to Run Locally
1. **Clone this repo:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/it-manager-meditation-app.git
   cd it-manager-meditation-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Build the CSS:**
   ```bash
   npm run build
   ```
4. **Start the app locally:**
   ```bash
   npm run dev
   ```
   Then open the provided localhost URL in your browser.

## 🌐 Deploying to GitHub Pages
- Make sure you've run `npm run build` and committed the `dist/output.css` file.
- Push all your files (including audio and images) to your repo.
- In your repo settings, enable GitHub Pages (set the source to your main branch and root folder).
- Visit your published site and enjoy IT enlightenment!

## 📝 Customizing
- Add your own audio tracks to the `audio/` directory and update `meditation-app.js`.
- Add cover art images to the `images/` directory and link them in the track data.
- Tweak the UI in `styles.css` or add new features in `meditation-app.js`.

## ❤️ Attribution
Made with ☕, ❤️, and a lot of patience for printers. 
Inspired by the daily adventures of IT pros everywhere.

---

*May your pings always reply, your tickets always close, and your VPN always connect on the first try.* 