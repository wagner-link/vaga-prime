import { Target, DollarSign, Clock, Users, TrendingUp, Award } from 'lucide-react';

export default function JobDescription() {
  const requirements = [
    "Experiência com vendas ou captação de leads",
    "Facilidade de comunicação e persuasão",
    "Conhecimento básico de redes sociais",
    "Disponibilidade para trabalhar por metas",
    "Proatividade e foco em resultados"
  ];

  const benefits = [
    "Salário base + comissões por leads qualificados",
    "Trabalho 100% remoto",
    "Horários flexíveis",
    "Treinamento completo fornecido",
    "Oportunidade de crescimento na empresa"
  ];

  const responsibilities = [
    "Identificar e contatar potenciais clientes",
    "Qualificar leads através de conversas iniciais",
    "Agendar reuniões para a equipe comercial",
    "Manter CRM atualizado com informações dos contatos",
    "Atingir metas mensais de leads qualificados"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2463] text-center mb-12">
            Detalhes da Vaga
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-[#0a2463]">Requisitos</h3>
              </div>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-[#0a2463]">Benefícios</h3>
              </div>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-purple-500 mr-2 mt-1">🎁</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-[#0a2463]">Responsabilidades</h3>
              </div>
              <ul className="space-y-3">
                {responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-[#0a2463] mr-2 mt-1">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#0a2463]">R$ 2.000+</div>
              <div className="text-gray-600">Potencial mensal</div>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#0a2463]">Flexível</div>
              <div className="text-gray-600">Horários</div>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#0a2463]">Alto</div>
              <div className="text-gray-600">Crescimento</div>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#0a2463]">Equipe</div>
              <div className="text-gray-600">Colaborativa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}