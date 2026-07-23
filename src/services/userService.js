import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export async function createUserDocument(user, name) {
  const ref = doc(db, "users", user.uid);

  const snapshot = await getDoc(ref);

  // User already exists
  if (snapshot.exists()) {
    await updateDoc(ref, {
      lastLogin: serverTimestamp(),
    });

    return;
  }

  // Create new user
  await setDoc(ref, {
    uid: user.uid,
    name: name || user.displayName || "",
    email: user.email,
    phone: "",
    role: "customer",

    createdAt: serverTimestamp(),
    lastLogin: serverTimestamp(),

    addresses: [],
    wishlist: [],
    totalOrders: 0,
    totalSpent: 0,
  });
}

export async function getUser(uid) {
  const ref = doc(db, "users", uid);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;

  return snapshot.data();
}
