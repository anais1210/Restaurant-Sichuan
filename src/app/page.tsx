import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const featuredDishes = [
  {
    image: "/imgs/beef2.png",
    name: "Boeuf Sur Plaque Chauffante",
    chinese: "铁板牛肉",
  },
  {
    image: "/imgs/marmite.png",
    name: "Marmite de poulet Chongqing",
    chinese: "重庆鸡公煲",
  },
  { image: "/imgs/nouille2.png", name: "Nouilles Dan Dan", chinese: "担担面" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/imgs/background.jpg"
            alt="Plat Sichuan"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-2" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-amber-400 text-lg md:text-xl tracking-[0.3em] uppercase mb-4 animate-fade-in-down roboto-light">
            Restaurant Authentique
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up">
            SICHUAN{" "}
            <span className="text-red-600 longcang text-6xl md:text-8xl lg:text-9xl">
              四川
            </span>
          </h1>

          <p className="text-gray-300 text-xl md:text-2xl mb-4 animate-fade-in-left delay-2 roboto-light">
            L&apos;authenticité du Sichuan dans chaque bouchée
          </p>

          <p className="text-gray-400 text-lg mb-12 animate-fade-in-right delay-3 roboto-light-italic">
            Paris 9ème - Cuisine traditionnelle chinoise
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-4">
            <Link
              href="/menu"
              className="btn-primary px-12 py-4 text-white text-lg rounded-full roboto-regular inline-block"
            >
              Voir le Menu
            </Link>
            <Link
              href="/contact"
              className="px-12 py-4 border-2 border-white/30 text-white text-lg rounded-full hover:bg-white/10 transition-all duration-300 roboto-regular inline-block"
            >
              Nous Trouver
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-600 text-sm tracking-[0.3em] uppercase mb-4 roboto-light">
              Nos Specialités
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Saveurs du <span className="text-red-600 longcang">四川</span>
            </h2>
            <div className="divider w-24 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={dish.name}
                className="group card overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-72 img-zoom">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <p className="text-red-600 longcang text-3xl mb-2">
                    {dish.chinese}
                  </p>
                  <h3 className="text-white text-xl roboto-regular">
                    {dish.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-500 transition-colors roboto-regular group"
            >
              Découvrir tous nos plats
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/imgs/pork-fried.png"
                  alt="Cuisine Sichuan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-xl overflow-hidden border-4 border-[#111111] hidden lg:block">
                <Image
                  src="/imgs/epice.png"
                  alt="Epices"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:pl-12">
              <p className="text-red-600 text-sm tracking-[0.3em] uppercase mb-4 roboto-light">
                Notre Histoire
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Une cuisine qui <span className="gradient-text">enflamme</span>{" "}
                les sens
              </h2>
              <p className="text-gray-400 text-lg mb-6 roboto-light leading-relaxed">
                Notre restaurant vous invite a un voyage culinaire au coeur du
                Sichuan, une province célèbre pour ses saveurs audacieuses et
                son art du piment.
              </p>
              <p className="text-gray-400 text-lg mb-8 roboto-light leading-relaxed">
                Chaque plat est preparé avec des ingredients authentiques et des
                recettes traditionnelles transmises de generation en generation.
              </p>

              <div className="flex gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-600">15+</p>
                  <p className="text-gray-400 text-sm roboto-light">
                    Années d&apos;expérience
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-600">60+</p>
                  <p className="text-gray-400 text-sm roboto-light">
                    Plats authentiques
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/imgs/fruit-de-mer1.png"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à découvrir nos <span className="text-red-600">saveurs</span> ?
          </h2>
          <p className="text-gray-400 text-xl mb-10 roboto-light">
            Consultez notre menu et laissez-vous tenter par nos spécialités
            sichuanaises
          </p>
          <Link
            href="/menu"
            className="btn-primary px-16 py-5 text-white text-xl rounded-full roboto-regular inline-block animate-pulse-glow"
          >
            Voir le Menu
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">
                SICHUAN <span className="text-red-600 longcang">四川</span>
              </h3>
              <p className="text-gray-400 roboto-light">
                L&apos;authenticité du Sichuan a Paris
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Horaires</h4>
              <p className="text-gray-400 roboto-light">
                Lun - Sam: 12h - 14h30
              </p>
              <p className="text-gray-400 roboto-light">
                Lun - Sam: 18h30 - 22h30
              </p>
              <p className="text-red-600 roboto-light mt-2">
                Fermé le mercredi
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-gray-400 roboto-light">17 Rue Le Peletier</p>
              <p className="text-gray-400 roboto-light">75009 Paris</p>
              <p className="text-gray-400 roboto-light mt-2">
                +33 1 47 70 64 11
              </p>
            </div>
          </div>
          <div className="divider mt-8 mb-6" />
          {/* <p className="text-center text-gray-500 text-sm roboto-light">
            &copy; 2025 Restaurant Sichuan Paris. Tous droits réservés.
          </p> */}
          <Footer />
        </div>
      </footer>
    </div>
  );
}
