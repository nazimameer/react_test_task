import { RegForm } from "../components";
/**
 * Home page component.
 * Renders the main content for the home page, including the registration form.
 * @returns React component representing the home page.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RegForm />
    </main>
  );
}

