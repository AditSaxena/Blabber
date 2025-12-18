import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

export async function CreateUser(userData) {
  console.log("CreateUser called");
  try {
    const userObject = userData.user;
    // const uid = userObject.uid;
    // const photoURL = userObject.photoURL;
    // const displayName = userObject.displayName;
    // const email = userObject.email;
    const { uid, photoURL, displayName, email } = userObject;
    console.log("Writing user:", uid);
    // console.log("id : ", userId, photoURL, name, email);
    await setDoc(doc(db, "users", uid), {
      email,
      profile_pic: photoURL,
      name: displayName,
    });
    console.log("user data is added");
  } catch (error) {
    console.error("Firestore error:", error);
  }
}
