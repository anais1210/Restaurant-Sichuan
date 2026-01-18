import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const GOOGLE_DRIVE_FILE_ID = "1uLnEyCFJvQ4shQl3vqQwdkjn-U2bzWIW";
const pdfViewUrl = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/view`;

export default function Menu() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/imgs/epice.png"
            alt="Epices Sichuan"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 text-center px-4">
          <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-down roboto-light">
            Découvrez nos plats
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in-up">
            Notre <span className="text-red-600">Menu</span>
          </h1>
          <p className="text-gray-400 text-lg mt-4 animate-fade-in delay-2 roboto-light">
            Cuisine authentique du Sichuan
          </p>
        </div>
      </section>

      {/* Menu CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Menu Card */}
          <div className="card p-8 md:p-12 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-600/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Consultez notre carte
              </h2>
              <p className="text-gray-400 text-lg roboto-light max-w-lg mx-auto">
                Explorez notre sélection de plats traditionnels du Sichuan, des
                entrées aux desserts, en passant par nos spécialités maison.
              </p>
            </div>

            <a
              href={pdfViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 px-10 py-4 text-white text-lg rounded-full roboto-regular"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Voir le Menu (PDF)
            </a>

            <p className="text-gray-500 text-sm mt-6 roboto-light">
              Le menu s&apos;ouvrira dans un nouvel onglet
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card p-6 text-center">
              <div className="text-red-600 text-3xl mb-3">🌶️</div>
              <h3 className="text-white font-bold mb-2">Niveau de piment</h3>
              <p className="text-gray-400 text-sm roboto-light">
                Nos plats sont notes selon leur niveau de piquant
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-red-600 text-3xl mb-3">🥢</div>
              <h3 className="text-white font-bold mb-2">Fait maison</h3>
              <p className="text-gray-400 text-sm roboto-light">
                Tous nos plats sont préparés sur place chaque jour
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-red-600 text-3xl mb-3">👨‍🍳</div>
              <h3 className="text-white font-bold mb-2">Chef Sichuanais</h3>
              <p className="text-gray-400 text-sm roboto-light">
                Notre chef vient directement de la province du Sichuan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-16 px-4 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-red-600 text-sm tracking-[0.3em] uppercase mb-4 roboto-light">
              Aperçu
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Quelques-uns de nos plats
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/imgs/rice.png",
              "/imgs/chicken.png",
              "/imgs/beef.png",
              "/imgs/haricot.png",
              "/imgs/beef2.png",
              "/imgs/pork.png",
              "/imgs/tofu.webp",
              "/imgs/soup.jpg",
            ].map((img, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden img-zoom"
              >
                <Image
                  src={img}
                  alt={`Plat ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Une question sur notre menu ?
          </h2>
          <p className="text-gray-400 mb-8 roboto-light">
            N&apos;hesitez pas a nous contacter pour toute information sur les
            allergènes ou pour des demandes spéciales.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 roboto-regular"
          >
            Nous Contacter
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
