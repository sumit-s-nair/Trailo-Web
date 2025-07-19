"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext"; // Make sure this returns { user, loading }
import { ComponentType } from "react";

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const Wrapper = (props: P) => {
    const { user, loading } = useAuth(); // ⬅️ Make sure your context provides `loading`
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push("/");
      }
    }, [user, loading, router]);

    if (loading || (!user && typeof window !== "undefined")) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
          <p>Loading & Verifying Access...</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
