import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"



export const firebaseConfig = {
    apiKey: "AIzaSyCrPpzBlyQbvTB_9S0tAdJ22Vqt25P1RP4",
    authDomain: "phonenumbeauth-e08ed.firebaseapp.com",
    projectId: "phonenumbeauth-e08ed",
    storageBucket: "phonenumbeauth-e08ed.appspot.com",
    messagingSenderId: "985028214103",
    appId: "1:985028214103:web:6a617d4b7837f52f5a1212"
}


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig )
}


