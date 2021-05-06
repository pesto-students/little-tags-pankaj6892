import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
    this.auth = app.auth();

    this.googleAuthProvider = new app.auth.GoogleAuthProvider();
  }

  doGoogleSignIn = () => this.auth.signInWithPopup(this.googleAuthProvider);

  user = (uid) => this.db.ref(`/user/${uid}`);

  doSignOut = () => {
    console.log('In firebase');
    this.auth.signOut();
  };

  onAuthChangeListner = (next, fallback) => {
    return this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        this.user(authUser.uid)
          .once('value')
          .then((snapshot) => {
            const dbUser = snapshot.val();
            const user = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              username: authUser.displayName,
              displayPicture: authUser.photoURL,
              ...dbUser,
            };
            console.log(`authUser:: listner :: ${user}`);
            next(user);
          });
      } else {
        console.log('The user is not available now');
        fallback();
      }
    });
  };
}

export default Firebase;
