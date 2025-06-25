import MarketingPoint from "./marketing-point";

const title = "Get the finest curated abstracts delivered weekly to your inbox";
const marketingPoints = [
  "Exclusive access to new abstract images and collections",
  "Unlock special promotions only for subscribers",
  "Regular doses or artistic inspiration",
];
const preSubscribeAssuranceText = "We only send you the best! No spam.";

export default function NewsletterSection() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 m-4 p-4 bg-white rounded text-neutral-900 sm:h-full sm:items-center sm:pt-16 sm:pb-16 sm:gap-16 md:h-full">
      <div className="textContent flex flex-col gap-8 sm:gap-16 w-full md:w-1/2 md:ml-16">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="marketingPoints flex flex-col gap-4">
          {marketingPoints.map((point, index) => (
            <MarketingPoint key={`point-${index}`} point={point} />
          ))}
        </div>
        <form className="flex flex-col items-center gap-2 w-full sm:flex-row sm:flex-wrap sm:gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border rounded w-full text-neutral-600 border-neutral-200 bg-neutral-50 sm:w-1/2"
            required
          />
          <p className="preSubscribeAssuranceText text-sm text-neutral-600 sm:order-3">
            {preSubscribeAssuranceText}
          </p>
          <button
            type="submit"
            className="p-2 text-white rounded w-full sm:w-auto sm:pl-4 sm:pr-4 bg-indigo-800 text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
      <img
        src="/newsletter-section/abstract.jpg"
        alt="abstract samples"
        className="rounded-xl sm:rounded-2xl md:rounded-3xl object-fit md:w-1/2"
      />
    </div>
  );
}
