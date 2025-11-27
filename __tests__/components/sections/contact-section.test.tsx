/**
 * @fileoverview Tests for ContactSection component
 * TDD: RED phase - Write tests first
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { ContactSection } from '@/components/sections/contact-section';

describe('ContactSection', () => {
  describe('Rendering', () => {
    it('should render as a section element', () => {
      render(<ContactSection />);
      expect(screen.getByTestId('contact-section')).toBeInTheDocument();
    });

    it('should have proper id for navigation', () => {
      render(<ContactSection />);
      const section = screen.getByTestId('contact-section');
      expect(section).toHaveAttribute('id', 'contact');
    });

    it('should have section heading', () => {
      render(<ContactSection />);
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    });

    it('should display section title', () => {
      render(<ContactSection />);
      const elements = screen.getAllByText(/연락/i);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  describe('Contact Information', () => {
    it('should display email contact', () => {
      render(<ContactSection />);
      expect(screen.getByTestId('contact-email')).toBeInTheDocument();
    });

    it('should have email link with mailto', () => {
      render(<ContactSection />);
      const emailLink = screen.getByTestId('contact-email').querySelector('a');
      expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'));
    });

    it('should display GitHub contact', () => {
      render(<ContactSection />);
      expect(screen.getByTestId('contact-github')).toBeInTheDocument();
    });

    it('should have GitHub link with correct URL', () => {
      render(<ContactSection />);
      const githubLink = screen.getByTestId('contact-github').querySelector('a');
      expect(githubLink).toHaveAttribute('href', expect.stringContaining('github.com'));
    });
  });

  describe('Contact Form', () => {
    it('should render contact form', () => {
      render(<ContactSection />);
      expect(screen.getByTestId('contact-form')).toBeInTheDocument();
    });

    it('should have name input field', () => {
      render(<ContactSection />);
      expect(screen.getByLabelText(/이름/i)).toBeInTheDocument();
    });

    it('should have email input field', () => {
      render(<ContactSection />);
      expect(screen.getByLabelText(/이메일/i)).toBeInTheDocument();
    });

    it('should have message textarea', () => {
      render(<ContactSection />);
      expect(screen.getByLabelText(/메시지/i)).toBeInTheDocument();
    });

    it('should have submit button', () => {
      render(<ContactSection />);
      expect(screen.getByRole('button', { name: /보내기/i })).toBeInTheDocument();
    });
  });

  describe('Form Validation', () => {
    it('should mark name field as required', () => {
      render(<ContactSection />);
      const nameInput = screen.getByLabelText(/이름/i);
      expect(nameInput).toBeRequired();
    });

    it('should mark email field as required', () => {
      render(<ContactSection />);
      const emailInput = screen.getByLabelText(/이메일/i);
      expect(emailInput).toBeRequired();
    });

    it('should mark message field as required', () => {
      render(<ContactSection />);
      const messageInput = screen.getByLabelText(/메시지/i);
      expect(messageInput).toBeRequired();
    });

    it('should have email type on email input', () => {
      render(<ContactSection />);
      const emailInput = screen.getByLabelText(/이메일/i);
      expect(emailInput).toHaveAttribute('type', 'email');
    });

    it('should show error for invalid email format', () => {
      render(<ContactSection />);
      const emailInput = screen.getByLabelText(/이메일/i);
      const form = screen.getByTestId('contact-form');

      fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
      fireEvent.submit(form);

      // Browser validation should prevent submission
      expect(emailInput).toBeInvalid();
    });
  });

  describe('Form Interaction', () => {
    it('should update name value on input', () => {
      render(<ContactSection />);
      const nameInput = screen.getByLabelText(/이름/i) as HTMLInputElement;

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      expect(nameInput.value).toBe('John Doe');
    });

    it('should update email value on input', () => {
      render(<ContactSection />);
      const emailInput = screen.getByLabelText(/이메일/i) as HTMLInputElement;

      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      expect(emailInput.value).toBe('john@example.com');
    });

    it('should update message value on input', () => {
      render(<ContactSection />);
      const messageInput = screen.getByLabelText(/메시지/i) as HTMLTextAreaElement;

      fireEvent.change(messageInput, { target: { value: 'Hello!' } });
      expect(messageInput.value).toBe('Hello!');
    });
  });

  describe('Social Links', () => {
    it('should render social links section', () => {
      render(<ContactSection />);
      expect(screen.getByTestId('social-links')).toBeInTheDocument();
    });

    it('should have GitHub social link', () => {
      render(<ContactSection />);
      const socialLinks = screen.getByTestId('social-links');
      const githubLink = socialLinks.querySelector('a[href*="github"]');
      expect(githubLink).toBeInTheDocument();
    });

    it('should open social links in new tab', () => {
      render(<ContactSection />);
      const socialLinks = screen.getByTestId('social-links');
      const links = socialLinks.querySelectorAll('a');
      links.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
      });
    });
  });

  describe('Layout', () => {
    it('should have grid layout', () => {
      render(<ContactSection />);
      const section = screen.getByTestId('contact-section');
      const grid = section.querySelector('.grid');
      expect(grid).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have form with accessible labels', () => {
      render(<ContactSection />);
      const nameInput = screen.getByLabelText(/이름/i);
      const emailInput = screen.getByLabelText(/이메일/i);
      const messageInput = screen.getByLabelText(/메시지/i);

      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(messageInput).toBeInTheDocument();
    });

    it('should have icons with aria-hidden', () => {
      render(<ContactSection />);
      const icons = screen.getByTestId('contact-section').querySelectorAll('svg');
      icons.forEach(icon => {
        // Icons should be decorative
        expect(icon).toHaveAttribute('aria-hidden', 'true');
      });
    });
  });
});
