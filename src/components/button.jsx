import cx from "classnames";

/**
 * Button
 * @param text {string}
 * @param href {string}
 * @param level {string} 'primary' | 'secondary'
 * @param icon {node}
 * @
 */
export const Button = ({ text, href, level, icon, ...rest }) => {
  const Tag = href ? "a" : "button";

  return (
    <Tag
      href={href}
      class={cx("button", {
        [`${level}`]: level,
        flashy: level === "primary",
      })}
      {...rest}
    >
      {icon}
      {icon && text ? <span>{text}</span> : text}
    </Tag>
  );
};
