import { IconLink } from "./icon-link";
import { paramCase } from "change-case";

export const Heading = ({ level, text, href = paramCase(text) }) => {
  const Tag = `h${level}`;
  const copyPermalink = () => {
    navigator.clipboard.writeText(`${window.location.origin}#${href}`);
  };

  return (
    <>
      <Tag>
        <a
          href={`#${href}`}
          class="permalink"
          onClick={copyPermalink}
          aria-label="Copy permalink"
        >
          <IconLink />
        </a>

        {text}
      </Tag>
    </>
  );
};
