/**
 * trimNumber
 * - eg. 93500 > '93.5k'
 */
export const trimNumber = (number) => {
  return number
    ? new Intl.NumberFormat("en-US", {
        maximumSignificantDigits: 3,
        notation: "compact",
      })
        .format(number) // tons to lbs
        .toLocaleLowerCase()
    : null;
};
