import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Trabalhe Conosco - PrimeCode Solutions | Captador de Leads',
  description: 'Junte-se à equipe PrimeCode Solutions como Captador de Leads. Trabalho remoto, comissões atrativas e crescimento profissional garantido.',
  keywords: 'trabalho remoto, captador de leads, vendas, PrimeCode Solutions, vaga emprego',
  robots: 'index, follow',
  openGraph: {
    title: 'Trabalhe Conosco - PrimeCode Solutions',
    description: 'Vaga: Captador de Leads - Trabalho Remoto com comissões atrativas',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💼</text></svg>" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}