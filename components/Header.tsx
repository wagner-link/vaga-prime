import { Code2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#0a2463] to-purple-900 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center md:justify-start">
          <Code2 className="h-8 w-8 text-white mr-3" />
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            PrimeCode Solutions
          </h1>
        </div>
      </div>
    </header>
  );
}