import { CandidateApplication } from './types';

export function generateEmailHTML(data: CandidateApplication): string {
  const availabilityMap = {
    'part-time': 'Meio período',
    'full-time': 'Período integral',
    'freelancer': 'Freelancer'
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Nova Candidatura - PrimeCode Solutions</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #0a2463, #6366f1); padding: 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 24px; font-weight: bold; }
        .header p { color: #e0e7ff; margin: 5px 0 0; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #0a2463; display: block; margin-bottom: 5px; }
        .value { color: #333; line-height: 1.5; }
        .experience { background: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #0a2463; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; color: #64748b; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎯 Nova Candidatura Recebida</h1>
          <p>Vaga: Captador de Leads</p>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">👤 Nome Completo:</span>
            <div class="value">${data.fullName}</div>
          </div>
          
          <div class="field">
            <span class="label">📧 Email:</span>
            <div class="value"><a href="mailto:${data.email}" style="color: #0a2463;">${data.email}</a></div>
          </div>
          
          <div class="field">
            <span class="label">📱 Telefone/WhatsApp:</span>
            <div class="value"><a href="tel:${data.phone}" style="color: #0a2463;">${data.phone}</a></div>
          </div>
          
          <div class="field">
            <span class="label">⏰ Disponibilidade:</span>
            <div class="value">${availabilityMap[data.availability]}</div>
          </div>
          
          ${data.linkedinProfile ? `
          <div class="field">
            <span class="label">💼 Perfil LinkedIn:</span>
            <div class="value"><a href="${data.linkedinProfile}" style="color: #0a2463;" target="_blank">${data.linkedinProfile}</a></div>
          </div>
          ` : ''}
          
          <div class="field">
            <span class="label">🎯 Experiência Anterior:</span>
            <div class="experience">${data.experience.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        <div class="footer">
          <p><strong>PrimeCode Solutions</strong> - Sistema de Recrutamento</p>
          <p>Candidatura recebida em ${new Date().toLocaleString('pt-BR')}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function generateConfirmationEmailHTML(candidateName: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Candidatura Recebida - PrimeCode Solutions</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #0a2463, #6366f1); padding: 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 24px; font-weight: bold; }
        .content { padding: 30px; }
        .success-icon { font-size: 48px; text-align: center; margin-bottom: 20px; }
        .message { color: #333; line-height: 1.6; text-align: center; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; color: #64748b; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Candidatura Confirmada</h1>
        </div>
        <div class="content">
          <div class="success-icon">🎉</div>
          <div class="message">
            <h2 style="color: #0a2463; margin-bottom: 15px;">Olá, ${candidateName}!</h2>
            <p>Recebemos sua candidatura para a vaga de <strong>Captador de Leads</strong> na PrimeCode Solutions.</p>
            <p>Nossa equipe de RH analisará seu perfil e entrará em contato em breve caso você seja selecionado(a) para a próxima etapa do processo seletivo.</p>
            <p><strong>Próximos passos:</strong></p>
            <ul style="text-align: left; max-width: 400px; margin: 20px auto;">
              <li>Análise do perfil pela equipe de RH</li>
              <li>Entrevista inicial (se selecionado)</li>
              <li>Teste prático</li>
              <li>Entrevista final</li>
            </ul>
            <p>Obrigado por seu interesse em fazer parte da nossa equipe!</p>
          </div>
        </div>
        <div class="footer">
          <p><strong>PrimeCode Solutions</strong></p>
          <p>Email: rh@primecode.com.br | Site: www.primecode.com.br</p>
        </div>
      </div>
    </body>
    </html>
  `;
}