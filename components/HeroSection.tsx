export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Trabalhe na <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">PrimeCode Solutions</span>
          </h1>
          
          <div className="bg-gradient-to-r from-[#0a2463] to-purple-600 text-white px-6 py-3 rounded-full inline-block mb-8">
            <h2 className="text-xl md:text-2xl font-semibold">
              Vaga: Captador de Leads - Remoto
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Junte-se à nossa equipe e faça parte de uma empresa em crescimento. 
            Trabalhamos com tecnologia de ponta e oferecemos oportunidades reais de desenvolvimento profissional.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg text-gray-400">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Trabalho 100% Remoto
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Comissões Atrativas
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Crescimento Profissional
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}