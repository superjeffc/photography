import React, { useState } from 'react';
import { Mail, Phone, Lock, Check, Copy } from 'lucide-react';

interface ProtectedEmailProps {
  user?: string;
  domain?: string;
  className?: string;
  showIcon?: boolean;
}

/**
 * Obfuscated Email Component:
 * Prevents basic email harvester bots from scraping raw text in HTML source code.
 * Assembles the email dynamically on user interaction or via client JS.
 */
export const ProtectedEmail: React.FC<ProtectedEmailProps> = ({
  user = 'jeff',
  domain = 'superjeffc.com',
  className = '',
  showIcon = true,
}) => {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const fullEmail = `${user}@${domain}`;

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!revealed) {
      setRevealed(true);
    } else {
      window.location.href = `mailto:${fullEmail}`;
    }
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(fullEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      {showIcon && <Mail className="w-4 h-4 text-amber-400 shrink-0" />}
      {!revealed ? (
        <button
          onClick={handleAction}
          className="hover:text-amber-300 transition-colors underline decoration-dashed decoration-amber-500/50 flex items-center gap-1 text-xs"
          title="Click to reveal email (Protected against spam bots)"
        >
          <span>{user} [at] {domain}</span>
          <Lock className="w-3 h-3 text-amber-400/70" />
        </button>
      ) : (
        <span className="flex items-center gap-2">
          <a href={`mailto:${fullEmail}`} className="text-amber-300 hover:underline font-mono">
            {fullEmail}
          </a>
          <button
            onClick={handleCopy}
            className="p-1 rounded bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 text-[10px]"
            title="Copy email address"
          >
            {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
          </button>
        </span>
      )}
    </span>
  );
};

interface ProtectedPhoneProps {
  number?: string;
  formatted?: string;
  className?: string;
  showIcon?: boolean;
}

/**
 * Obfuscated Phone Component:
 * Hides raw phone tel links until clicked or hovered by a human visitor.
 */
export const ProtectedPhone: React.FC<ProtectedPhoneProps> = ({
  number = '9293985478',
  formatted = '(929) 398-5478',
  className = '',
  showIcon = true,
}) => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (!revealed) {
      e.preventDefault();
      setRevealed(true);
    }
  };

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      {showIcon && <Phone className="w-4 h-4 text-amber-400 shrink-0" />}
      <a
        href={revealed ? `tel:${number}` : '#'}
        onClick={handleClick}
        className="hover:text-amber-300 transition-colors font-mono"
        title="Click to call or reveal phone number"
      >
        {revealed ? formatted : '(929) 398-•••• (Click to Reveal)'}
      </a>
    </span>
  );
};
