'use client';

import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Global In-Memory LRU/Map Cache for compiled KaTeX HTML
const katexBlockCache = new Map<string, string>();
const katexInlineCache = new Map<string, string>();
const MAX_CACHE_SIZE = 1000;

function renderCachedKatex(math: string, displayMode: boolean): string {
  const cache = displayMode ? katexBlockCache : katexInlineCache;
  const cached = cache.get(math);
  if (cached !== undefined) {
    return cached;
  }

  try {
    const html = katex.renderToString(math, {
      displayMode,
      throwOnError: false,
    });
    if (cache.size > MAX_CACHE_SIZE) {
      // Clear oldest entries if exceeding limit
      const firstKey = cache.keys().next().value;
      if (firstKey) cache.delete(firstKey);
    }
    cache.set(math, html);
    return html;
  } catch {
    return '';
  }
}

// Auto-detect raw LaTeX commands and math formatting that aren't wrapped in $...$ delimiters
const LATEX_COMMAND_RE = /^\\(frac|dfrac|cfrac|sqrt|binom|sum|prod|int|lim|vec|hat|bar|dot|ddot|overline|underline|mathbb|mathcal|mathrm)\{/;

function preprocessMathText(text: string): string {
  const trimmed = text.trim();
  if (!trimmed.includes('$') && LATEX_COMMAND_RE.test(trimmed)) {
    return `$${trimmed}$`;
  }
  return text;
}

interface MathTextProps {
  content?: string;
  text?: string;
  className?: string;
  blockClassName?: string;
  inline?: boolean;
  plainBlock?: boolean;
}

const MathTextComponent: React.FC<MathTextProps> = ({
  content,
  text,
  className = '',
  blockClassName = '',
  inline = false,
  plainBlock = false,
}) => {
  const actualContent = content !== undefined && content !== null ? content : text;
  if (actualContent === undefined || actualContent === null || actualContent === '') return null;

  const stringContent = String(actualContent);

  const renderedElements = useMemo(() => {
    const processedText = preprocessMathText(stringContent);
    const blockParts = processedText.split(/(\$\$[\s\S]*?\$\$)/g);

    return blockParts.map((blockPart, blockIdx) => {
      if (blockPart.startsWith('$$') && blockPart.endsWith('$$')) {
        const math = blockPart.slice(2, -2).trim();
        const html = renderCachedKatex(math, true);

        if (html) {
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
        }

        return (
          <span key={blockIdx} className="my-1 p-1 bg-slate-100 text-center inline-block">
            {math}
          </span>
        );
      }

      // Inside normal text, look for inline math $...$ and bold markdown **...**
      const inlineParts = blockPart.split(/(\$[^\$]+?\$)/g);

      return (
        <span key={blockIdx}>
          {inlineParts.map((inlinePart, inlineIdx) => {
            if (inlinePart.startsWith('$') && inlinePart.endsWith('$') && inlinePart.length > 2) {
              const math = inlinePart.slice(1, -1).trim();
              const html = renderCachedKatex(math, false);

              if (html) {
                return (
                  <span
                    key={inlineIdx}
                    className="inline-block px-1 text-indigo-700 font-semibold align-middle"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                );
              }

              return (
                <span key={inlineIdx} className="text-indigo-600 font-semibold">
                  {math}
                </span>
              );
            }

            // Handle line breaks and markdown bold
            const lines = inlinePart.split('\n');
            return lines.map((line, lineIdx) => {
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
  }, [stringContent, inline, plainBlock, blockClassName]);

  if (inline) {
    return (
      <span className={`leading-relaxed text-slate-700 text-sm sm:text-base ${className}`}>
        {renderedElements}
      </span>
    );
  }

  return (
    <div className={`leading-relaxed text-slate-700 text-sm sm:text-base ${className}`}>
      {renderedElements}
    </div>
  );
};

export const MathText = React.memo(MathTextComponent);
