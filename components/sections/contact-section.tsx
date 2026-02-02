"use client";

import * as React from "react";
import { useState } from "react";
import {
  Mail,
  Github,
  Send,
  MapPin,
  Linkedin,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactInfo {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  testId: string;
  bgColor: string;
}

interface SocialLink {
  icon: React.ElementType;
  label: string;
  href: string;
  bgColor: string;
  textColor: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "jellive7@gmail.com",
    href: "mailto:jellive7@gmail.com",
    testId: "contact-email",
    bgColor: "bg-primary",
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "github.com/jellive",
    href: "https://github.com/jellive",
    testId: "contact-github",
    bgColor: "bg-foreground",
  },
];

const socialLinks: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/jellive",
    bgColor: "bg-foreground",
    textColor: "text-background",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/han-goon-yoo-429980113/",
    bgColor: "bg-primary",
    textColor: "text-foreground",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 grid-pattern opacity-10"
        aria-hidden="true"
      />

      {/* Decorative Elements */}
      <div
        className="absolute top-32 right-10 w-40 h-40 border-4 border-primary rotate-45 hidden xl:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/10 -rotate-12 hidden xl:block"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-foreground text-background font-mono text-sm font-bold brutal-shadow-sm">
              <MessageSquare className="w-4 h-4" />
              <span>GET IN TOUCH</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="block">Let&apos;s Work</span>
            <span className="block relative inline-block mt-2">
              <span className="relative z-10">Together</span>
              <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent -z-10 block" />
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            프로젝트 협업이나 문의사항이 있으시면{" "}
            <span className="font-bold text-foreground">언제든지 연락</span>해
            주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 border-2 border-foreground font-mono text-xs font-bold bg-card mb-4">
                CONTACT INFO
              </div>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.testId}
                    href={info.href}
                    data-testid={info.testId}
                    className="group block stagger-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    target={
                      info.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      info.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                  >
                    <div className="relative border-4 border-foreground bg-card p-6 hover-brutal transition-all duration-200">
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            "p-3 border-2 border-foreground",
                            info.bgColor,
                          )}
                        >
                          <Icon
                            className="w-6 h-6 text-background"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-1">
                          <span className="block text-xs font-mono font-bold text-muted-foreground mb-1">
                            {info.label}
                          </span>
                          <span className="block font-bold text-lg break-all">
                            {info.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 border-2 border-foreground font-mono text-xs font-bold bg-card">
                SOCIAL MEDIA
              </div>
              <div data-testid="social-links" className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "px-5 py-3 border-2 border-foreground font-mono font-bold text-sm",
                        "hover-brutal transition-all duration-200 stagger-fade-in",
                        social.bgColor,
                        social.textColor,
                      )}
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <span className="inline-flex items-center gap-2">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <div
              className="border-2 border-foreground p-4 bg-card stagger-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-3 font-mono font-bold">
                <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                <span>SEOUL, SOUTH KOREA 🇰🇷</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="stagger-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block px-3 py-1 border-2 border-foreground font-mono text-xs font-bold bg-card mb-6">
              SEND MESSAGE
            </div>
            <form
              data-testid="contact-form"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-mono font-bold mb-2"
                >
                  NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 border-2 border-foreground bg-background font-mono",
                    "focus:outline-none focus:border-primary focus:brutal-shadow-sm",
                    "transition-all",
                  )}
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-mono font-bold mb-2"
                >
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 border-2 border-foreground bg-background font-mono",
                    "focus:outline-none focus:border-primary focus:brutal-shadow-sm",
                    "transition-all",
                  )}
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-mono font-bold mb-2"
                >
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={cn(
                    "w-full px-4 py-3 border-2 border-foreground bg-background font-mono resize-none",
                    "focus:outline-none focus:border-primary focus:brutal-shadow-sm",
                    "transition-all",
                  )}
                  placeholder="문의 내용을 입력해 주세요..."
                />
              </div>

              <Button
                type="submit"
                className="w-full brutal-shadow hover-brutal bg-foreground text-background hover:bg-foreground font-bold text-lg h-14 px-8 border-2 border-foreground font-mono"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 border-4 border-foreground bg-card brutal-shadow-lg">
            <p className="text-lg font-bold mb-4">
              지금 바로 협업을 시작해보세요!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:jellive7@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-foreground font-bold border-2 border-foreground hover-lift transition-transform font-mono"
              >
                <Mail className="w-5 h-5" />
                <span>EMAIL ME</span>
              </a>
              <a
                href="https://github.com/jellive"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold border-2 border-foreground hover-lift transition-transform font-mono"
              >
                <Github className="w-5 h-5" />
                <span>VIEW GITHUB</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
