import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase-config';

const auth = getAuth(app);

export const logInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    return { token };  // Return the token to the frontend
  } catch (error) {
    throw new Error('Login failed: ' + error.message);
  }
};

export const signUpUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    return { token };  // Return the token to the frontend
  } catch (error) {
    throw new Error('Signup failed: ' + error.message);
  }
};
