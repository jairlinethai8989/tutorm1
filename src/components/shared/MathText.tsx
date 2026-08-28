'use client';

import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Auto-detect raw LaTeX commands and math formatting that aren't wrapped in $...$ delimiters
const LATEX_COMMAND_RE = /^\\(frac|dfrac|cfrac|sqrt|binom|sum|prod|int|lim|vec|hat|bar|dot|ddot|overline|underline|mathbb|mathcal|mathrm)\{/;

function preprocessMathText(text: string): string {
  let processed = text;
  const trimmed = processed.trim();
  // If the entire content is a single raw LaTeX command without any $ delimiters, wrap it
  if (!trimmed.includes('$') && LATEX_COMMAND_RE.test(trimmed)) {
    return `$${trimmed}$`;
  }
  return processed;
}

interface MathTextProps {
  content?: string;
  text?: string;
  className?: string;
  blockClassName?: string;
  inline?: boolean;
  plainBlock?: boolean;
}

export const MathText: React.FC<MathTextProps> = ({
  content,
  text,
  className = '',
  blockClassName = '',
  inline = false,
  plainBlock = false,
}) => {
  const actualContent = content !== undefined && content !== null ? content : text;
  if (actualContent === undefined || actualContent === null || actualContent === '') return null;

  // Split by $$...$$ (display math) and $...$ (inline math)
  const renderFormattedText = (textToRender: string) => {
    // Preprocess math text
    const processedText = preprocessMathText(textToRender);
    // Split by block math $$...$$
    const blockParts = processedText.split(/(\$\$[\s\S]*?\$\$)/g);

    return blockParts.map((blockPart, blockIdx) => {
      if (blockPart.startsWith('$$') && blockPart.endsWith('$$')) {
        const math = blockPart.slice(2, -2).trim();
        try {
          const html = katex.renderToString(math, {
            displayMode: true,
            throwOnError: false,
          });
          if (inline || plainBlock) {
            return (
              <div
                key={blockIdx}
                className={`my-1 py-1 text-center w-full max-w-full overflow-visible ${blockClassName}`}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          }
          return (
            <div
              key={blockIdx}
              className={`my-2.5 py-2 px-3 bg-slate-50/70 rounded-xl text-slate-800 text-center border border-slate-200/60 overflow-visible ${blockClassName}`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return (
            <span key={blockIdx} className="my-1 p-1 bg-slate-100 text-center inline-block">
              {math}
            </span>
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
                    className="inline-block px-1 text-indigo-700 font-semibold align-middle"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                );
              } catch {
                return (
                  <span key={inlineIdx} className="text-indigo-600 font-semibold">
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

  if (inline) {
    return (
      <span className={`leading-relaxed text-slate-700 text-sm sm:text-base ${className}`}>
        {renderFormattedText(String(actualContent))}
      </span>
    );
  }

  return (
    <div className={`leading-relaxed text-slate-700 text-sm sm:text-base ${className}`}>
      {renderFormattedText(String(actualContent))}
    </div>
  );
};
