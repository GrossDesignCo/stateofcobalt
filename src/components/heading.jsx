import { IconLink } from "./icon-link";
import { paramCase } from "change-case";

const copyPermalink = (href) => {
  return navigator.clipboard.writeText(`${window.location.origin}#${href}`);
};

export const Heading = ({
  level,
  children,
  href = paramCase(children.toString()),
  noAnchor,
}) => {
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

        {children}
      </Tag>
    </>
  );
};
