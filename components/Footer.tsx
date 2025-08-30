import { Code2, Mail, Globe, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo and Company */}
          <div className="flex items-center justify-center mb-6">
            <Code2 className="h-8 w-8 text-purple-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">PrimeCode Solutions</h3>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:contato@primecode.com.br" 
              className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              <Mail className="h-5 w-5 mr-2" />
              contato@primecode.com.br
            </a>
            <a 
              href="#" 
              className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              <Globe className="h-5 w-5 mr-2" />
              www.primecode.com.br
            </a>
            <a 
              href="#" 
              className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              © 2025 PrimeCode Solutions. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Desenvolvendo soluções tecnológicas inovadoras
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}