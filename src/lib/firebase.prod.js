import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCxx5NkF7o7DpHGprjdLCM9SGw0tfLDRDc",
    authDomain: "netflix-clone-92e2a.firebaseapp.com",
    projectId: "netflix-clone-92e2a",
    storageBucket: "netflix-clone-92e2a.appspot.com",
    messagingSenderId: "516747497015",
    appId: "1:516747497015:web:92a8a48cc05e0e990db9b2"
}

const firebase = Firebase.initializeApp(config)

export { firebase };