"use client";
import MarketingPoint from "./marketing-point";
import { ReactElement, useCallback, useEffect, useState } from "react";

const title = "Get the finest curated abstracts delivered weekly to your inbox";
const marketingPoints = [
  "Exclusive access to new abstract images and collections",
  "Unlock special promotions only for subscribers",
  "Regular doses or artistic inspiration",
];
const preSubscribeAssuranceText = "We only send you the best! No spam.";
const emailRequiredText = "Email address is required.";
const emailInvalidText = "Please enter a valid email.";

export default function NewsletterSection(): ReactElement {
  const [emailAddress, setEmailAddress] = useState("");
  const [hasValidated, setHasValidated] = useState(false);
  const [error, setError] = useState("");

  const getValidateEmailText = useCallback((): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = emailAddress.trim();
    if (!trimmedEmail.length) return emailRequiredText;
    if (!emailRegex.test(emailAddress)) return emailInvalidText;
    return "";
  }, [emailAddress]);

  const handleSubmit = (): void => {
    setError(getValidateEmailText());
    setHasValidated(true);
  };

  useEffect(() => {
    if (hasValidated) {
      setError(getValidateEmailText());
    }
  }, [hasValidated, emailAddress, getValidateEmailText]);

  return (
    <div className="flex flex-col md:flex-row items-start gap-4 m-4 p-4 bg-white rounded text-neutral-900 sm:h-full sm:items-center sm:pt-16 sm:pb-16 sm:gap-16 md:h-full">
      <div className="textContent flex flex-col gap-8 sm:gap-16 w-full md:w-1/2 md:ml-16">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="marketingPoints flex flex-col gap-4">
          {marketingPoints.map((point, index) => (
            <MarketingPoint key={`point-${index}`} point={point} />
          ))}
        </div>
        <form className="flex flex-col items-start gap-2 w-full sm:flex-row sm:flex-wrap sm:gap-4">
          <div className="input-wrapper w-full md:w-1/2 flex flex-col gap-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border rounded w-full text-neutral-600 border-neutral-200 bg-neutral-50 focus:bg-white focus:border-gray-400"
              required
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            {error && (
              <p className="error-message text-red-600 text-sm">{error}</p>
            )}
          </div>
          <p className="preSubscribeAssuranceText text-md text-neutral-600 sm:order-3">
            {preSubscribeAssuranceText}
          </p>
          <button
            type="submit"
            className="p-2 text-white rounded w-full sm:w-auto sm:pl-4 sm:pr-4 bg-indigo-800 text-sm hover:bg-indigo-950"
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            disabled={!!error}
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
