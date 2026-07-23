import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export async function createOrder(orderData) {
  const docRef = await addDoc(collection(db, "orders"), {
    ...orderData,
    status: "Pending",
    paymentStatus: "Pending",
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function getUserOrders(uid) {
  const q = query(
    collection(db, "orders"),
    where("customerId", "==", uid),
    orderBy("createdAt", "desc"),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
