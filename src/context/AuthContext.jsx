import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

const STORAGE_KEY = "pathpulse_demo_signed_in";

export const DEMO_EMAIL = "test@pathpulseapp.com";
export const DEMO_PASSWORD = "test123";

function readStoredSignedIn() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isSignedIn, setIsSignedIn] = useState(readStoredSignedIn);

  const signIn = useCallback((email, password) => {
    const ok =
      email.trim().toLowerCase() === DEMO_EMAIL.toLowerCase() && password === DEMO_PASSWORD;
    if (ok) {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setIsSignedIn(true);
    }
    return ok;
  }, []);

  const signOut = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setIsSignedIn(false);
  }, []);

  const value = useMemo(
    () => ({ isSignedIn, signIn, signOut }),
    [isSignedIn, signIn, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
