import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCYm-O_8a4CNFmi-Uu2s5FNYq5hRl2RzOY",
  authDomain: "turnout-589ad.firebaseapp.com",
  databaseURL: "https://turnout-589ad.firebaseio.com",
  projectId: "turnout-589ad",
  storageBucket: "turnout-589ad.appspot.com",
  messagingSenderId: "954867460771"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')


