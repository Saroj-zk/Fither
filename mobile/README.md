# FitHer Mobile App

## How to Run on your Phone (Android/iOS)

Since this is a React Native Expo project, you don't need an APK file to test it during development. You can run it instantly on your phone using the **Expo Go** app.

### Steps:
1.  **Download Expo Go:**
    *   **Android:** Install "Expo Go" from the Google Play Store.
    *   **iOS:** Install "Expo Go" from the App Store.

2.  **Start the Server:**
    *   Open your terminal in this directory (`mobile`).
    *   Run the command: `npm start`
    *   Wait for the QR code to appear in the terminal.

3.  **Scan & Run:**
    *   Open Expo Go on your phone.
    *   Scan the QR code shown in your terminal.
    *   The app will load instantly on your device!

## Why is there no APK file?
An APK file is a compiled "Production Build". To generate one, you need to use **EAS Build** (Expo Application Services), which builds the app in the cloud.

If you strictly need an APK file:
1.  Create an account at [expo.dev](https://expo.dev).
2.  Install EAS CLI: `npm install -g eas-cli`
3.  Login: `eas login`
4.  Configure build: `eas build:configure`
5.  Run build: `eas build -p android --profile preview`

But for development and testing, **Expo Go** is the recommended and fastest way.
