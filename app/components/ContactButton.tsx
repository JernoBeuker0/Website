'use client';
import { useState } from "react";

export default function ContactButton() {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    const email = "jernobeuker0@gmail.com";

    // Always copy email first
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Clipboard copy failed:', error);
    }

    // Then try to open mail client in a new tab
    const mailWindow = window.open(`mailto:${email}`, '_blank');
    if (mailWindow) {
      mailWindow.focus();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
    >
      {copied ? "Copied!" : "Contact Me"}
    </button>
  );
}
