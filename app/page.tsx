'use client';
import Image from "next/image";
import ContactButton from "./components/ContactButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 p-8 text-center">

        <header className="mb-12">
        <div className="flex items-center justify-center gap-6 flex-wrap">
            {/* Text section */}
            <div className="text-center sm:text-left">
            <h1 className="text-6xl font-bold mb-2 text-gray-900">Jerno Beuker</h1>
            <p className="text-xl text-lg text-gray-800">
                Student BSc Artificial Intelligence at RUG
            </p>
            </div>

            {/* Image section */}
            <Image
            src="/Mee.jpeg" // <- make sure this file is in your /public folder
            alt="Profile picture"
            width={96}
            height={96}
            className="rounded-full object-cover w-24 h-24 sm:w-32 sm:h-32"
            />
        </div>
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
            <div className="flex flex-row justify-center items-center gap-4 flex-wrap">
                <ContactButton />
                <a
                href="https://github.com/jernobeuker0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full font-medium transition-colors"
                >
                Visit my GitHub
                </a>
            </div>
        </section>

        
      </main>

      <footer className="mt-16 text-gray-600 text-sm">
        © 2025 Jerno Beuker. Built with ❤️ using Next.js.
      </footer>
    </div>
  );
}
