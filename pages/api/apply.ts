import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { candidateSchema } from '@/lib/validation';
import { generateEmailHTML, generateConfirmationEmailHTML } from '@/lib/email-template';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Método não permitido'
    });
  }

  try {
    // Validate the request body
    const validatedData = candidateSchema.parse(req.body);

    // Create nodemailer transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'naoresponda@primecode.com.br',
        pass: process.env.EMAIL_PASS || 'your-app-password-here'
      }
    });

    const adminEmails = (process.env.ADMIN_EMAIL || 'rh@primecode.com.br,contato@primecode.com.br').split(',');

    // Send email to administrators
    const adminMailOptions = {
      from: process.env.EMAIL_USER || 'naoresponda@primecode.com.br',
      to: adminEmails,
      subject: `Nova Candidatura para Captador de Leads - ${validatedData.fullName}`,
      html: generateEmailHTML(validatedData)
    };

    // Send confirmation email to candidate
    const candidateMailOptions = {
      from: process.env.EMAIL_USER || 'naoresponda@primecode.com.br',
      to: validatedData.email,
      subject: 'Candidatura Recebida - PrimeCode Solutions',
      html: generateConfirmationEmailHTML(validatedData.fullName)
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(candidateMailOptions)
    ]);

    res.status(200).json({
      success: true,
      message: 'Candidatura enviada com sucesso! Verifique seu email para confirmação.'
    });

  } catch (error) {
    console.error('Error processing application:', error);
    
    if (error instanceof Error && error.name === 'ZodError') {
      return res.status(400).json({
        success: false,
        message: 'Dados inválidos. Verifique os campos e tente novamente.'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor. Tente novamente em alguns minutos.'
    });
  }
}