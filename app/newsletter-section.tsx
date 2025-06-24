export default function NewsletterSection() {
  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <h1>Newsletter Section</h1>
      <p className="text-center">
        This is a simple newsletter section component.
      </p>
      <form className="flex flex-col items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Subscribe
        </button>
      </form>
    </div>
  );
}
