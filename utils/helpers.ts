/**
 *  a function to truncate text and add ellipsis
 * @param limit  number of characters to truncate
 * @param text  text to truncate
 * @returns  truncated text
 */
export const truncate = (limit: number, text?: string) => {
  if (text && text.length > limit) {
    return `${text.substring(0, limit)}...`;
  } else {
    return text;
  }
};

export const shortenName = (text?: string) => {
  if (text?.length) {
    const _text = text.split(" ");
    const firstName = _text[0];

    return firstName;
  }
}
