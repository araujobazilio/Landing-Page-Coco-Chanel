import React from 'react';
import { Star, Truck, CreditCard, MapPin, Clock, Shield, Sparkles, Heart, CheckCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Header */}
      <header className="bg-black text-white py-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium">
            🔥 OFERTA LIMITADA - Entrega em até 24h com FRETE GRÁTIS
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              COCO CHANEL<br />
              <span className="text-pink-600">MADEMOISELLE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 font-light">
              A Essência da Mulher Livre e Audaciosa,<br />
              Agora ao Seu Alcance
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Decant Exclusivo 25ml
            </div>
          </div>

          {/* Product Image Placeholder */}
          <div className="mb-8">
            <div className="w-64 h-80 mx-auto bg-gradient-to-br from-pink-100 to-rose-200 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white">
              <div className="text-center">
                <Sparkles className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Coco Mademoiselle</p>
                <p className="text-sm text-gray-500">25ml Decant</p>
              </div>
            </div>
          </div>

          {/* Price and Benefits */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-pink-100">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-pink-600 mb-2">R$ 90,00</div>
              <p className="text-gray-600">Pagamento somente na entrega</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center bg-green-50 p-4 rounded-xl">
                <Clock className="w-6 h-6 text-green-600 mr-3" />
                <div>
                  <p className="font-semibold text-green-800">Entrega 24h</p>
                  <p className="text-sm text-green-600">Via motoboy</p>
                </div>
              </div>
              <div className="flex items-center justify-center bg-blue-50 p-4 rounded-xl">
                <Truck className="w-6 h-6 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold text-blue-800">Frete GRÁTIS</p>
                  <p className="text-sm text-blue-600">Sem custos extras</p>
                </div>
              </div>
              <div className="flex items-center justify-center bg-purple-50 p-4 rounded-xl">
                <CreditCard className="w-6 h-6 text-purple-600 mr-3" />
                <div>
                  <p className="font-semibold text-purple-800">Pague na entrega</p>
                  <p className="text-sm text-purple-600">Dinheiro ou Pix</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="https://entrega.logzz.com.br/pay/mem5mygq7/vzwaz-1-unidadee"
              onClick="return gtag_report_conversion('https://entrega.logzz.com.br/pay/mem5mygq7/vzwaz-1-unidadee')"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-8 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🛒 COMPRAR AGORA - ENTREGA 24H
            </a>
          </div>
        </div>
      </section>

      {/* Why You'll Love It */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            🔥 Por que você vai se apaixonar pelo Coco Mademoiselle?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Star className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-bold mb-3">Fragrância Premiada</h3>
              <p className="text-pink-100">
                Um dos perfumes femininos mais desejados do mundo. A assinatura da mulher moderna e confiante.
              </p>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Shield className="w-12 h-12 mx-auto mb-4 text-green-300" />
              <h3 className="text-xl font-bold mb-3">Fixação Impecável</h3>
              <p className="text-pink-100">
                Mesma fórmula do original. Nosso decant mantém a potência e evolução na pele intactas.
              </p>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Heart className="w-12 h-12 mx-auto mb-4 text-red-300" />
              <h3 className="text-xl font-bold mb-3">Versatilidade Pura</h3>
              <p className="text-pink-100">
                Perfeito para o dia no escritório ou eventos especiais. Chipre frutal amadeirada vibrante e sensual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Decant */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            O que é um Decant? A Forma Inteligente de Ter um Chanel
          </h2>
          
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Um decant é o perfume <strong>100% original</strong>, transferido de seu frasco de luxo para um frasco menor, 
              de vidro e com borrifador de alta qualidade. Você recebe a fragrância autêntica do Coco Mademoiselle, 
              que em seu frasco tradicional pode custar mais de <strong>R$ 1.000</strong>, com vantagens incríveis:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Economia Inteligente</h3>
                <p className="text-gray-600 text-sm">
                  Experimente na sua pele antes de investir no frasco grande.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <CheckCircle className="w-8 h-8 text-blue-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Portabilidade Máxima</h3>
                <p className="text-gray-600 text-sm">
                  Leve seu Chanel para qualquer lugar! Ideal para bolsa e viagem.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <CheckCircle className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Compra sem Riscos</h3>
                <p className="text-gray-600 text-sm">
                  Teste e confirme por que é um sucesso mundial sem alto custo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <MapPin className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Áreas de Entrega</h2>
            <p className="text-lg text-gray-600">Entregamos APENAS nas seguintes cidades:</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              {[
                'Arujá', 'Barueri', 'Caieiras', 'Cajamar', 'Campo Limpo Paulista', 'Carapicuíba',
                'Cotia', 'Diadema', 'Embu das Artes', 'Ferraz de Vasconcelos', 'Francisco Morato',
                'Franco da Rocha', 'Guarulhos', 'Itapevi', 'Itaquaquecetuba', 'Jandira', 'Jundiaí',
                'Mairiporã', 'Mauá', 'Mogi das Cruzes', 'Osasco', 'Poá', 'Santo André',
                'São Bernardo do Campo', 'São Caetano do Sul', 'São Paulo', 'Suzano', 'Taboão da Serra'
              ].map((city, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Como Comprar AGORA (É Super Simples e Seguro!)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3">Clique e Preencha</h3>
              <p className="text-gray-300">Clique no link e preencha seu endereço de entrega</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3">Confirmamos</h3>
              <p className="text-gray-300">Confirmamos seu pedido e agendamos a rota de entrega</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3">Receba e Pague</h3>
              <p className="text-gray-300">Motoboy chega em 24h. Pague somente ao receber!</p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://entrega.logzz.com.br/pay/mem5mygq7/vzwaz-1-unidadee"
              onClick="return gtag_report_conversion('https://entrega.logzz.com.br/pay/mem5mygq7/vzwaz-1-unidadee')"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-6"
            >
              🚀 GARANTIR MEU DECANT AGORA
            </a>
            
            <p className="text-gray-400 mb-4">Ou tire suas dúvidas no WhatsApp:</p>
            <a 
              href="https://wa.me/5522992613485?text=Ola!%20Vim%20do%20an%C3%BAncio%20no%20google%2C%20tenho%20interesse%20no%20Coco%20Chanel%20Mademoiselle%2025%20ml!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
            >
              💬 Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Garanta já o seu! O estoque é LIMITADO.
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Esta é sua chance de ter a fragrância que representa luxo e feminilidade por um preço acessível. 
            Nossa remessa com decants do Coco Mademoiselle é limitada e acaba rápido.
          </p>
          
          <a 
            href="https://entrega.logzz.com.br/pay/mem5mygq7/vzwaz-1-unidadee"
            onClick="return gtag_report_conversion('https://entrega.logzz.com.br/pay/mem5mygq7/vzwaz-1-unidadee')"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-pink-600 font-bold py-4 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            💥 CLIQUE E SINTA O PODER DE CHANEL AMANHÃ
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 - Decants Premium. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Produto 100% original. Pagamento seguro na entrega.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;