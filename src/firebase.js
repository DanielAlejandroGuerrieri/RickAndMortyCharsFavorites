import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyASn2HLLna5d8i4FpkT0f49gFUiejAk3Qo",
    authDomain: "validacionricksandmorty-r2d2.firebaseapp.com",
    databaseURL: "https://validacionricksandmorty-r2d2.firebaseio.com",
    projectId: "validacionricksandmorty-r2d2",
    storageBucket: "validacionricksandmorty-r2d2.appspot.com",
    messagingSenderId: "542823925782",
    appId: "1:542823925782:web:cb7cafc92de17539e7cd37"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore().collection('favs') //referenciamos a la BD de firebase, una base Favs

export function updateDB(array, uid) {
    return db.doc(uid).set({ array })
        //return db.doc(uid).set({ favoritos: [...array] })

}

export function getFavs(uid) {
    return db.doc(uid).get()
        .then(snap => {
            return snap.data().array
        })
}

export function signOutGoogle() {
    firebase.auth().signOut()
}

export function loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider)
        .then(snap => snap.user)
}