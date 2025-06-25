import NewsletterSection from "./newsletter-section";
import { KevinGfeFooter } from "gfe-footer";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center h-full min-h-screen bg-gradient-to-b from-gray-50 to-[#d2d6db]">
        <NewsletterSection />
      </main>
      <KevinGfeFooter />
    </div>
  );
}
