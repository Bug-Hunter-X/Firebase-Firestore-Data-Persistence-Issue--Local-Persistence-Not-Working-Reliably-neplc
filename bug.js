In a Firebase project, I encountered an unusual issue where data wasn't persisting across sessions, even though I was using the `setPersistence()` method with `LOCAL` storage.  The problem was particularly evident when the app went to the background or the device was restarted.  The following code snippet demonstrates my approach:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore, setPersistence, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  // ... your Firebase config
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Attempt to enable local persistence
setPersistence(db, 'local').catch((err) => {
  console.error('Failed to enable persistence: ', err);
});

// ... rest of the code to interact with Firestore
```