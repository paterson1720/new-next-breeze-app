export default function PressLogos() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h3 className="w-full text-center text-5xl font-bold">Stack</h3>
        <div className="py-6 border-b border-gray-800">
          {/* Items */}
          <div className="max-w-sm md:max-w-5xl mx-auto grid gap-2 grid-cols-6 md:grid-cols-7">
            {/* Item */}
            <div
              className="flex items-center justify-center py-2 col-span-2 md:col-auto"
              data-aos="zoom-out"
            >
              <img className="w-24" src="/images/react-logo.webp" alt="nextjs" />
            </div>
            {/* Item */}
            <div
              className="flex items-center justify-center py-2 col-span-2 md:col-auto"
              data-aos="zoom-out"
            >
              <img className="w-24" src="/images/nextjs-logo.webp" alt="nextjs" />
            </div>
            {/* Item */}
            <div
              className="flex items-center justify-center py-2 col-span-2 md:col-auto"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <img className="w-12" src="/images/typescript-logo.webp" alt="typescript" />
            </div>
            {/* Item */}
            <div
              className="flex items-center justify-center py-2 col-span-2 md:col-auto"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <img className="w-12 md:w-24" src="/images/authjs-logo.png" alt="tailwindcss" />
            </div>
            {/* Item */}
            <div
              className="flex items-center justify-center py-2 col-span-2 md:col-auto"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img className="w-12" src="/images/postgres-logo.png" alt="postgres" />
            </div>
            {/* Item */}
            <div
              className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2"
              data-aos="zoom-out"
              data-aos-delay="400"
            >
              <img className="w-8" src="/images/stripe-logo.webp" alt="stripe" />
            </div>
            {/* Item */}
            <div
              className="flex items-center justify-center py-2 col-span-2 md:col-auto"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <img className="w-24" src="/images/tailwindcss-logo.webp" alt="tailwindcss" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
