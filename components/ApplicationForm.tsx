'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { candidateSchema, type CandidateFormData } from '@/lib/validation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<CandidateFormData>({
    resolver: zodResolver(candidateSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      availability: undefined,
      linkedinProfile: '',
      dataConsent: false
    }
  });

  const watchedDataConsent = watch('dataConsent');

  const onSubmit = async (data: CandidateFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message);
        reset();
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Erro ao processar candidatura.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Erro de conexão. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Candidate-se Agora
            </h2>
            <p className="text-xl text-gray-300">
              Preencha o formulário abaixo e comece sua jornada conosco
            </p>
          </div>

          <Card className="bg-white shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-[#0a2463] to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-center">
                Formulário de Candidatura
              </CardTitle>
              <CardDescription className="text-purple-100 text-center">
                Vaga: Captador de Leads - Trabalho Remoto
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-8">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <p className="text-green-800">{statusMessage}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                  <p className="text-red-800">{statusMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div>
                  <Label htmlFor="fullName" className="text-base font-medium text-gray-700">
                    Nome Completo *
                  </Label>
                  <Input
                    id="fullName"
                    {...register('fullName')}
                    placeholder="Digite seu nome completo"
                    className="mt-2"
                    disabled={isSubmitting}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-base font-medium text-gray-700">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="seu.email@exemplo.com"
                    className="mt-2"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="text-base font-medium text-gray-700">
                    Telefone/WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    placeholder="(11) 99999-9999"
                    className="mt-2"
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* LinkedIn */}
                <div>
                  <Label htmlFor="linkedinProfile" className="text-base font-medium text-gray-700">
                    Perfil LinkedIn (opcional)
                  </Label>
                  <Input
                    id="linkedinProfile"
                    type="url"
                    {...register('linkedinProfile')}
                    placeholder="https://linkedin.com/in/seu-perfil"
                    className="mt-2"
                    disabled={isSubmitting}
                  />
                  {errors.linkedinProfile && (
                    <p className="mt-1 text-sm text-red-600">{errors.linkedinProfile.message}</p>
                  )}
                </div>

                {/* Availability */}
                <div>
                  <Label className="text-base font-medium text-gray-700 mb-2 block">
                    Disponibilidade *
                  </Label>
                  <Select onValueChange={(value: any) => setValue('availability', value)} disabled={isSubmitting}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Selecione sua disponibilidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="part-time">Meio período</SelectItem>
                      <SelectItem value="full-time">Período integral</SelectItem>
                      <SelectItem value="freelancer">Freelancer</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.availability && (
                    <p className="mt-1 text-sm text-red-600">{errors.availability.message}</p>
                  )}
                </div>

                {/* Experience */}
                <div>
                  <Label htmlFor="experience" className="text-base font-medium text-gray-700">
                    Experiência Anterior *
                  </Label>
                  <Textarea
                    id="experience"
                    {...register('experience')}
                    placeholder="Conte-nos sobre sua experiência em vendas, captação de leads, ou áreas relacionadas. Inclua resultados alcançados, ferramentas utilizadas, e qualquer experiência relevante..."
                    className="mt-2 min-h-[120px]"
                    disabled={isSubmitting}
                  />
                  {errors.experience && (
                    <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>
                  )}
                </div>

                {/* Data Consent */}
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Checkbox
                    id="dataConsent"
                    checked={watchedDataConsent}
                    onCheckedChange={(checked) => setValue('dataConsent', checked as boolean)}
                    disabled={isSubmitting}
                  />
                  <Label htmlFor="dataConsent" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                    Concordo com o processamento dos meus dados pessoais para fins de recrutamento, 
                    conforme a Lei Geral de Proteção de Dados (LGPD). *
                  </Label>
                </div>
                {errors.dataConsent && (
                  <p className="text-sm text-red-600">{errors.dataConsent.message}</p>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || !watchedDataConsent}
                  className="w-full bg-gradient-to-r from-[#0a2463] to-purple-600 hover:from-[#0a2463]/90 hover:to-purple-600/90 text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando candidatura...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Candidatura
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}