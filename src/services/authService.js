import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

import { createUserDocument } from "./userService";

const googleProvider = new GoogleAuthProvider();

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export async function register(name, email, password) {
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  await updateProfile(credential.user, {
    displayName: name,
  });

  await createUserDocument(credential.user, name);

  return credential.user;
}

export async function loginWithGoogle() {
  const credential = await signInWithPopup(auth, googleProvider);

  await createUserDocument(credential.user, credential.user.displayName);

  return credential.user;
}

export async function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export const logout = () => signOut(auth);
