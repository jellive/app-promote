'use client';

import * as React from 'react';
import { useState } from 'react';
import { Mail, Github, Send, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ContactInfo {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  testId: string;
}

interface SocialLink {
  icon: React.ElementType;
  label: string;
  href: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: '이메일',
    value: 'contact@jell.dev',
    href: 'mailto:contact@jell.dev',
    testId: 'contact-email',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/jellive',
    href: 'https://github.com/jellive',
    testId: 'contact-github',
  },
];

const socialLinks: SocialLink[] = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/jellive',
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-16 md:py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            연락하기
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            프로젝트 협업이나 문의사항이 있으시면 언제든지 연락해 주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">연락처</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={info.testId}
                      data-testid={info.testId}
                      className="flex items-center gap-4 p-4 rounded-lg bg-background border"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">
                          {info.label}
                        </span>
                        <a
                          href={info.href}
                          className="block font-medium hover:text-primary transition-colors"
                          target={info.href.startsWith('mailto:') ? undefined : '_blank'}
                          rel={info.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">소셜</h3>
              <div
                data-testid="social-links"
                className="flex flex-wrap gap-3"
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 rounded-lg',
                        'bg-background border hover:border-primary transition-colors',
                        'text-sm font-medium'
                      )}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                      {social.label}
                      <ExternalLink className="w-3 h-3 opacity-50" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5" aria-hidden="true" />
              <span>Seoul, South Korea</span>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">메시지 보내기</h3>
            <form
              data-testid="contact-form"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={cn(
                    'w-full px-4 py-2 rounded-lg border bg-background',
                    'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
                    'transition-colors'
                  )}
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    'w-full px-4 py-2 rounded-lg border bg-background',
                    'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
                    'transition-colors'
                  )}
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={cn(
                    'w-full px-4 py-2 rounded-lg border bg-background resize-none',
                    'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
                    'transition-colors'
                  )}
                  placeholder="문의 내용을 입력해 주세요..."
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                보내기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
