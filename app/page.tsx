import NewsletterSection from "./newsletter-section";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center h-screen bg-gray-200">
        <NewsletterSection />
      </main>
      <footer>
        <div className="credits">
          A challenge by
          <a
            href="https://www.greatfrontend.com/projects?ref=challenges"
            target="_blank"
          >
            GreatFrontEnd Projects
          </a>
          . Built by
          <a href="https://www.greatfrontend.com/u/kevinn858" target="_blank">
            Kevin Nguyen
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
