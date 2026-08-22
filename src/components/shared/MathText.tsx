'use client';

import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathTextProps {
  content: string;
  className?: string;
}

export const MathText: React.FC<MathTextProps> = ({ content, className = '' }) => {
  if (!content) return null;

  // Split by $$...$$ (display math) and $...$ (inline math)
  const renderFormattedText = (text: string) => {
    // Split by block math $$...$$
    const blockParts = text.split(/(\$\$[\s\S]*?\$\$)/g);

    return blockParts.map((blockPart, blockIdx) => {
      if (blockPart.startsWith('$$') && blockPart.endsWith('$$')) {
        const math = blockPart.slice(2, -2).trim();
        try {
          const html = katex.renderToString(math, {
            displayMode: true,
            throwOnError: false,
          });
          return (
            <div
              key={blockIdx}
              className="my-3 py-2 px-3 bg-slate-50/80 rounded-xl overflow-x-auto text-slate-800 text-center font-mono border border-slate-100 shadow-xs"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return (
            <div key={blockIdx} className="my-2 p-2 bg-slate-100 font-mono text-center">
              {math}
            </div>
          );
        }
      }

      // Inside normal text, look for inline math $...$ and bold markdown **...**
      const inlineParts = blockPart.split(/(\$[^\$]+?\$)/g);

      return (
        <span key={blockIdx}>
          {inlineParts.map((inlinePart, inlineIdx) => {
            if (inlinePart.startsWith('$') && inlinePart.endsWith('$') && inlinePart.length > 2) {
              const math = inlinePart.slice(1, -1).trim();
              try {
                const html = katex.renderToString(math, {
                  displayMode: false,
                  throwOnError: false,
                });
                return (
                  <span
                    key={inlineIdx}
                    className="inline-block px-1 font-mono text-indigo-700"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                );
              } catch {
                return (
                  <span key={inlineIdx} className="font-mono text-indigo-600">
                    {math}
                  </span>
                );
              }
            }

            // Handle line breaks and markdown bold
            const lines = inlinePart.split('\n');
            return lines.map((line, lineIdx) => {
              // Convert **bold** to <strong>
              const boldParts = line.split(/(\*\*[^*]+?\*\*)/g);

              return (
                <React.Fragment key={`${inlineIdx}-${lineIdx}`}>
                  {lineIdx > 0 && <br />}
                  {boldParts.map((bPart, bIdx) => {
                    if (bPart.startsWith('**') && bPart.endsWith('**')) {
                      return (
                        <strong key={bIdx} className="font-bold text-slate-900">
                          {bPart.slice(2, -2)}
                        </strong>
                      );
                    }
                    return <span key={bIdx}>{bPart}</span>;
                  })}
                </React.Fragment>
              );
            });
          })}
        </span>
      );
    });
  };

  return <div className={`leading-relaxed text-slate-700 text-base ${className}`}>{renderFormattedText(content)}</div>;
};
