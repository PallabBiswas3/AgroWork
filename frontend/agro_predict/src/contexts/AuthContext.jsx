import React, { createContext, useState, useEffect, useContext } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Get additional user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          ...userDoc.data()
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      console.error('Login failed:', error);
      let message = 'Login failed. Please check your credentials.';
      
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          message = 'Invalid email or password.';
          break;
        case 'auth/too-many-requests':
          message = 'Too many failed attempts. Please try again later or reset your password.';
          break;
        case 'auth/user-disabled':
          message = 'This account has been disabled.';
          break;
      }
      
      return { success: false, message };
    }
  };

  const register = async (userData) => {
    try {
      // Create user with email and password
      const { user: firebaseUser } = await createUserWithEmailAndPassword(
        auth, 
        userData.email, 
        userData.password
      );

      // Create user document in Firestore
      const userDoc = {
        uid: firebaseUser.uid,
        email: userData.email,
        name: userData.name,
        farmType: userData.farmType || 'general',
        createdAt: new Date().toISOString(),
      };

      await setDoc(doc(db, 'users', firebaseUser.uid), userDoc);
      
      // Update local user state
      setUser({
        uid: firebaseUser.uid,
        ...userDoc
      });
      
      return { success: true };
    } catch (error) {
      console.error('Registration failed:', error);
      let message = 'Registration failed. Please try again.';
      
      if (error.code === 'auth/email-already-in-use') {
        message = 'An account with this email already exists.';
      } else if (error.code === 'auth/weak-password') {
        message = 'Password should be at least 6 characters.';
      } else if (error.code === 'auth/invalid-email') {
        message = 'Please enter a valid email address.';
      }
      
      return { success: false, message };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      return { success: true };
    } catch (error) {
      console.error('Logout failed:', error);
      return { success: false, message: 'Logout failed. Please try again.' };
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (error) {
      console.error('Password reset failed:', error);
      let message = 'Failed to send password reset email.';
      
      if (error.code === 'auth/user-not-found') {
        message = 'No account found with this email address.';
      }
      
      return { success: false, message };
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    resetPassword,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
