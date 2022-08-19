import admin from "firebase-admin";
import { cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";


admin.initializeApp({
     credential: cert({
       projectId: "box-24x7",
       clientEmail: "firebase-adminsdk-n45aw@box-24x7.iam.gserviceaccount.com",
       privateKey: process.env.GOOGLE_PRIVATE_KEY
     })
});


const firebaseAuth = getAuth();


export default firebaseAuth;
