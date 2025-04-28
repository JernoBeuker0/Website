'use client';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-8 text-center">
      <header className="mb-8">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gray-900">
          Hi, I'm Jerno
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
          I'm a passionate developer exploring the world of web technology.
          Welcome to my personal website built with Next.js!
        </p>
      </header>

      <main className="flex flex-col gap-4">
        <a
          href="mailto:jernobeuker0@gmail.com"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
        >
          Contact Me
        </a>
        <a
          href="https://github.com/jernobeuker0"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full font-medium transition-colors"
        >
          Visit my GitHub
        </a>
      </main>

      <footer className="mt-12 text-gray-600 text-sm">
        © 2025 Jerno. Built with ❤️ using Next.js.
      </footer>
    </div>
  );
}
