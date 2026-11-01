# MOODS — Music for every mood

A responsive React + Vite music-player web app with mood playlists, search, playlist navigation, song list, bottom player controls, shuffle, repeat, volume and likes.

## Run locally

1. Install Node.js (LTS) from https://nodejs.org/
2. Extract this project and open a terminal in the `moods` folder.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL shown in the terminal (usually http://localhost:5173).

## Firebase sign-in and shared listening setup

1. The supplied web app config is now in the root `.env` and `.env.example` files for project `moods-aa9d2`.
2. In **Authentication → Sign-in method**, enable **Google**. In **Authentication → Settings → Authorized domains**, add `localhost` for local development and your deployed domain.
3. In Google Cloud Console **APIs & Services → Credentials**, copy the project's Google **Web client ID** into `VITE_GOOGLE_CLIENT_ID` in `.env`. Add `http://localhost:5173` and your deployed app origin to that OAuth client’s Authorized JavaScript origins.
4. Create a **Realtime Database**. Copy its exact URL from the Realtime Database page into `VITE_FIREBASE_DATABASE_URL` in `.env`.
5. In the Realtime Database **Rules** tab, publish the rules from `database.rules.json`. Mood lists are public to read and only `modpapai@gmail.com` can change them; room controls are limited to room members.
6. In Google Cloud Console, enable **YouTube Data API v3**, create an API key, restrict it to this app's web referrers and the YouTube Data API, and set `VITE_YOUTUBE_API_KEY` in `.env`.
7. Restart Vite. The top-right avatar opens the compact sign-in dialog; Google account selection uses FedCM where supported. The Admin badge opens mood management. YouTube playlist links import public video titles and use the MOODS controls with a visible YouTube player; Spotify titles can be pasted into the Admin form; JioSaavn opens its player. Then choose **Listen together** to create a room or join with a room code. Only local audio playlists sync in listening rooms.

For Vercel, add the same `VITE_FIREBASE_*` values, `VITE_GOOGLE_CLIENT_ID`, and `VITE_YOUTUBE_API_KEY` in the project's Environment Variables and redeploy. Restrict the YouTube API key by referrer and API. The Realtime Database rules enforce mood writes for `modpapai@gmail.com`.

## Deploy to GitHub + Vercel

1. Create a new GitHub repository named `moods`.
2. Upload/push all project files in this folder to the repository root.
3. Sign in to https://vercel.com/ and choose **Add New → Project**.
4. Import your `moods` GitHub repository.
5. Vercel detects Vite automatically. Build command: `npm run build`; output directory: `dist`.
6. Click **Deploy**. Vercel will provide your live URL and redeploy on every push to the connected branch.

## Song source

The included demo entries use publicly reachable SoundHelix sample MP3 URLs to demonstrate playback. They are sample/demo audio, not licensed commercial songs or a production music catalog. To use your own permitted audio URLs, edit the `playlists` array in `src/main.jsx`, replacing each song's `url`, `title`, `artist`, and `duration`.

For production, use direct audio URLs from a source that grants streaming permission and supports browser playback (CORS, HTTPS, and audio MIME type). YouTube watch URLs are not direct audio files and cannot be used as the `Audio` source in this app. Avoid hotlinking copyrighted tracks.

## Features

- Mood playlist cards: Alone, Love, Sad, Happy, Focus and Chill
- Playlist page and clickable song list
- Fixed bottom player with play/pause, next/previous, seek and volume
- Shuffle toggle, repeat toggle, liked songs UI
- Search by song, artist or playlist
- Admin mood management with Spotify, YouTube/YouTube Music and JioSaavn playlist links
- Firebase Google sign-in with member-only listening rooms
- Realtime shared track, playback, seek, shuffle, repeat and volume controls
- Responsive desktop and mobile layout

## Notes

- Firebase project configuration is required for Google sign-in and shared rooms.
- The Firebase web config is client-side; database access is protected by `database.rules.json`.
- Browser audio may require a user click before playback.
- The current repeat toggle is a UI control; looping a single track can be added if desired.
