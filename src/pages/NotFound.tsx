import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-dvh items-center justify-center bg-background px-4">
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Sorry, this page could not be found.</p>
        <Link to="/" className="underline text-foreground hover:opacity-80">
          Return to Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
