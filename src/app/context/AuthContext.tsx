"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { User, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase"; // Adjust path if needed
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // This listener handles user state persistence
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/dashboard"); // Redirect on successful login
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      router.push("/"); // Redirect to home on logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};