interface Props {
  developmentPageName: string;
}
const OnDevelopment = ({ developmentPageName }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-8">
      <h1 className="text-5xl font-bold mb-4">
        🚧 {developmentPageName} Page Under Development 🚧
      </h1>
      <p className="text-lg text-gray-300 max-w-lg">
        We're working hard to bring you this page soon. Stay tuned for updates!
      </p>
      <div className="mt-8">
        <a
          href="/"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default OnDevelopment;
