'use client';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 p-8 text-center">
      <header className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Jerno Beuker</h1>
        <p className="text-lg max-w-2xl text-gray-800">
          Student BSc Artificial Intelligence at RUG
        </p>
      </header>

      <main className="flex flex-col gap-12 w-full max-w-4xl text-left">

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Education</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Bachelor of Artificial Intelligence - Rijksuniversiteit Groningen (2022-2025)</li>
            <li>VWO - Het Drachtster Lyceum (2016-2022)</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section>
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
        </section>
        
      </main>

      <footer className="mt-16 text-gray-600 text-sm">
        © 2025 Jerno Beuker. Built with ❤️ using Next.js.
      </footer>
    </div>
  );
}
