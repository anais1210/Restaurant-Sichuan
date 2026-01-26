import Footer from "@/components/Footer";
import Image from "next/image";

export default function Contact() {
  const address = "17 Rue Le Peletier, 75009 Paris, France";
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapSrc = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
    address,
  )}&key=${apiKey}`;

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/imgs/epice.jpg"
            alt="Restaurant Sichuan"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 text-center px-4">
          <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-down roboto-light">
            Venez nous voir
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in-up">
            Nous <span className="text-red-600">Contacter</span>
          </h1>
          <p className="text-gray-400 text-lg mt-4 animate-fade-in delay-2 roboto-light">
            Au coeur du 9ème arrondissement
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Address Card */}
              <div className="card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      Adresse
                    </h3>
                    <p className="text-gray-400 roboto-light">
                      17 Rue Le Peletier
                    </p>
                    <p className="text-gray-400 roboto-light">
                      75009 Paris, France
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 hover:text-red-500 mt-3 text-sm roboto-regular transition-colors"
                    >
                      Ouvrir dans Google Maps
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      Téléphone
                    </h3>
                    <p className="text-gray-400 roboto-light">+33147706411</p>
                    <a
                      href="tel:+33147706411"
                      className="inline-flex items-center gap-2 mt-3 px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-full transition-all duration-300 roboto-regular"
                    >
                      Appeler maintenant
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-bold mb-4">
                      Horaires d&apos;ouverture
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-gray-400 roboto-light">
                          Lundi
                        </span>
                        <span className="text-white roboto-regular">
                          12h-14h30 / 18h30-22h30
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-gray-400 roboto-light">
                          Mardi
                        </span>
                        <span className="text-white roboto-regular">
                          12h-14h30 / 18h30-22h30
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-red-600 roboto-light">
                          Mercredi
                        </span>
                        <span className="text-red-600 roboto-regular">
                          Fermé
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-gray-400 roboto-light">
                          Jeudi
                        </span>
                        <span className="text-white roboto-regular">
                          12h-14h30 / 18h30-22h30
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-gray-400 roboto-light">
                          Vendredi
                        </span>
                        <span className="text-white roboto-regular">
                          12h-14h30 / 18h30-22h30
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 roboto-light">
                          Samedi
                        </span>
                        <span className="text-white roboto-regular">
                          12h-14h30 / 18h30-22h30
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 roboto-light">
                          Dimanche
                        </span>
                        <span className="text-white roboto-regular">
                          12h-14h30 / 18h30-22h30
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="card overflow-hidden h-[600px] lg:h-auto">
              <iframe
                title="Adresse du restaurant"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                loading="lazy"
                allowFullScreen
                src={mapSrc}
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section className="py-16 px-4 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-red-600 text-sm tracking-[0.3em] uppercase mb-4 roboto-light">
              Accès
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Comment nous rejoindre
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🚇</span>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Metro</h3>
                <p className="text-gray-400 text-sm roboto-light">
                  Ligne 7 - Station Le Peletier
                </p>
                <p className="text-gray-400 text-sm roboto-light">
                  Ligne 12 - Station Notre-Dame-de-Lorette
                </p>
              </div>
            </div>

            <div className="card p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🚌</span>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Bus</h3>
                <p className="text-gray-400 text-sm roboto-light">
                  Lignes 26, 32, 42, 43
                </p>
                <p className="text-gray-400 text-sm roboto-light">
                  Arrêt Le Peletier
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
