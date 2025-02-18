# Firebase Firestore Data Persistence Issue

This repository demonstrates a problem with Firebase Firestore's local persistence functionality.  Despite setting persistence to 'local', data is not reliably preserved across app sessions (backgrounding or restarts).  The issue occurs even with stable network connectivity.

## Problem Description

The provided code uses `setPersistence(db, 'local')` to enable local persistence in Firestore. However, data added or modified is lost when the app goes to the background or the device is restarted.

## Solution

The solution addresses the root cause and provides a modified approach to ensure data persists reliably. See `bugSolution.js` for the corrected code.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.