"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext"; // Adjust path if needed
import { ComponentType } from "react";

// This is our Higher-Order Component
const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const Wrapper = (props: P) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      // This effect runs when the component mounts and whenever the user state changes.
      // We check if the user object is null, which means they are not logged in.
      if (user === null) {
        // Redirect them to the home page if they are not authenticated.
        router.push("/");
      }
    }, [user, router]);

    // While waiting for the user state to be determined, or if the user is null
    // (and the redirect is in progress), show a loading indicator.
    if (!user) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
          <p>Loading & Verifying Access...</p>
        </div>
      );
    }

    // If the user is authenticated, render the component they were trying to access.
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;