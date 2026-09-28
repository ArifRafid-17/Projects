import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "react-toastify";
import Logo from "../assets/logo.png";

const quickLinks = ["Home", "Services", "About", "Contact"];

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [footerEmail, setFooterEmail] = useState("");

  const subscribe =
    (value: string, reset: (v: string) => void) => (e: FormEvent) => {
      e.preventDefault();
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        return toast.error("Please enter a valid email");
      }
      toast.success("Subscribed successfully!");
      reset("");
    };

  return (
    <section className="relative mt-24">
      {/* Newsletter card (overlaps the dark footer) */}
      <div className="container relative z-10 mx-auto -mb-36 px-4">
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-300/60 bg-white/40 p-3 shadow-sm backdrop-blur">
          <div className="rounded-3xl bg-white bg-[radial-gradient(circle_at_top_right,#fde3c0,transparent_45%),radial-gradient(circle_at_bottom_left,#bfe6fb,transparent_45%)] px-6 py-14 text-center">
            <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Subscribe to our Newsletter
            </h3>
            <p className="mt-3 text-gray-600">
              Get the latest updates and news right in your inbox!
            </p>

            <form
              onSubmit={subscribe(newsletterEmail, setNewsletterEmail)}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="input w-full border-gray-200 bg-white"
              />
              <button
                type="submit"
                className="btn border-0 bg-linear-to-r from-pink-300 to-yellow-300 font-bold text-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Dark footer */}
      <footer className="bg-[#06091f] pt-52 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <img src={Logo} alt="Logo" className="h-20 w-20 object-contain" />
          </div>

          <div className="mt-12 grid gap-10 pb-14 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-3">
            <div>
              <h4 className="mb-4 font-semibold">About Us</h4>
              <p className="max-w-xs text-sm leading-relaxed text-gray-400">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-gray-400">
                {quickLinks.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="mb-4 font-semibold">Subscribe</h4>
              <p className="mb-4 text-sm text-gray-400">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form
                onSubmit={subscribe(footerEmail, setFooterEmail)}
                className="join w-full max-w-sm"
              >
                <input
                  type="email"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input join-item w-full bg-white text-black"
                />
                <button
                  type="submit"
                  className="btn join-item border-0 bg-linear-to-r from-yellow-300 to-pink-300 font-bold text-black"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-gray-400">
          @2024 Your Company All Rights Reserved.
        </div>
      </footer>
    </section>
  );
}
