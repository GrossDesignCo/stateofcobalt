import { IconLink } from "./icon-link";
import { paramCase } from "change-case";

const copyPermalink = (href) => {
  return navigator.clipboard.writeText(`${window.location.origin}#${href}`);
};

export const Heading = ({ level, text, href = paramCase(text), noAnchor }) => {
  const Tag = `h${level}`;

  return (
    <>
      <Tag>
        {!noAnchor && (
          <a
            href={`#${href}`}
            class="permalink"
            onClick={copyPermalink}
            aria-label="Copy permalink"
          >
            <IconLink />
          </a>
        )}

        {text}
      </Tag>
    </>
  );
};
