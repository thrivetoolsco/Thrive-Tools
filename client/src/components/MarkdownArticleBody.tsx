import { ExternalLink } from "lucide-react";
import { type ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const tokenPattern = /(\[([^\]]+)\]\((https?:\/\/[^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenPattern.exec(text)) !== null) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));

    const key = `${keyPrefix}-${match.index}`;
    if (match[2] && match[3]) {
      nodes.push(
        <a
          key={key}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("article_link_click", {
              link_type: /\bshop\b/i.test(match[2]) ? "affiliate" : "external",
              page_path: window.location.pathname,
            })
          }
          className="inline-flex items-center gap-1 text-[#c4622d] font-semibold hover:underline"
        >
          {renderInline(match[2], `${key}-link`)}
          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
        </a>,
      );
    } else if (match[4]) {
      nodes.push(
        <strong key={key} className="text-black font-semibold">
          {match[4]}
        </strong>,
      );
    } else if (match[5]) {
      nodes.push(<em key={key}>{match[5]}</em>);
    }
    cursor = tokenPattern.lastIndex;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

export default function MarkdownArticleBody({
  source,
  skipLeadingLines = 6,
}: {
  source: string;
  skipLeadingLines?: number;
}) {
  const lines = source.split(/\r?\n/).slice(skipLeadingLines);
  const blocks: ReactNode[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (!line || line === "---") continue;

    if (line.startsWith("## ")) {
      blocks.push(
        <h2
          key={`heading-${index}`}
          className="font-display text-2xl sm:text-3xl font-bold text-black pt-6"
        >
          {line.slice(3)}
        </h2>,
      );
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      index -= 1;
      blocks.push(
        <ul key={`list-${index}`} className="list-disc pl-6 space-y-2 text-black/70 leading-relaxed">
          {items.map((item, itemIndex) => (
            <li key={`${index}-${itemIndex}`}>{renderInline(item, `list-${index}-${itemIndex}`)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s/, ""));
        index += 1;
      }
      index -= 1;
      blocks.push(
        <ol key={`ordered-list-${index}`} className="list-decimal pl-6 space-y-2 text-black/70 leading-relaxed">
          {items.map((item, itemIndex) => (
            <li key={`${index}-${itemIndex}`}>
              {renderInline(item, `ordered-list-${index}-${itemIndex}`)}
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    const isShopLink = line.startsWith("[→");
    blocks.push(
      <p
        key={`paragraph-${index}`}
        className={
          isShopLink
            ? "rounded-xl border border-[#c4622d]/25 bg-[#c4622d]/5 px-5 py-4 text-black/70 leading-relaxed"
            : "text-black/70 leading-relaxed"
        }
      >
        {renderInline(line, `paragraph-${index}`)}
      </p>,
    );
  }

  return <div className="contents">{blocks}</div>;
}