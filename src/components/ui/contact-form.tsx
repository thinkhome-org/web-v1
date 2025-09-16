"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { IconMail, IconPhone, IconSend, IconCheck, IconCopy, IconMapPin } from '@tabler/icons-react';

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

interface ContactFormProps {
  contactInfo: ContactInfo;
}

export function ContactForm({ contactInfo }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState<{ email?: boolean; phone?: boolean }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Kontakt z webu');
    const body = encodeURIComponent(`
Jméno: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone}
Předmět: ${formData.subject}

Zpráva:
${formData.message}
    `);
    
    const mailtoLink = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      // Check if clipboard API is available
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
        } catch (err) {
          console.error('Fallback copy failed: ', err);
        }
        
        document.body.removeChild(textArea);
      }
      
      setCopied(prev => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setCopied(prev => ({ ...prev, [type]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Email Card */}
        <Card className="p-4 hover:shadow-lg transition-all duration-300 group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                <IconMail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(contactInfo.email, 'email')}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label={`Kopírovat email ${contactInfo.email}`}
            >
              {copied.email ? (
                <IconCheck className="h-4 w-4 text-green-600" />
              ) : (
                <IconCopy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </Card>

        {/* Phone Card */}
        <Card className="p-4 hover:shadow-lg transition-all duration-300 group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                <IconPhone className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefon</p>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm font-medium text-green-600 dark:text-green-400 hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label={`Kopírovat telefon ${contactInfo.phone}`}
            >
              {copied.phone ? (
                <IconCheck className="h-4 w-4 text-green-600" />
              ) : (
                <IconCopy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </Card>

        {/* Address Card */}
        <Card className="p-4 hover:shadow-lg transition-all duration-300 group md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
              <IconMapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Adresa</p>
              <p className="text-sm font-medium">{contactInfo.address}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Contact Form */}
      <Card className="p-6 lg:p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">Napište nám</h3>
          <p className="text-muted-foreground">
            Máte dotaz nebo potřebujete konzultaci? Rádi vám pomůžeme!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Jméno a příjmení *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                placeholder="Vaše jméno"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                placeholder="vas@email.cz"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                placeholder="+420 123 456 789"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Předmět *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                placeholder="O čem chcete mluvit?"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Zpráva *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background resize-none"
              placeholder="Popište váš požadavek nebo dotaz..."
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Odesílám...
                </>
              ) : (
                <>
                  <IconSend className="h-4 w-4 mr-2" />
                  Odeslat zprávu
                </>
              )}
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              Zpráva se otevře ve vašem emailovém klientovi
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
}
