/**
 * Takes all the line items and adds them up
 * @param {Array|undefined }lineItems
 * @returns {number}
 */

export const sumLineItems = (lineItems: LineItem[] | undefined): number => {
  if (!lineItems) return 0;

  return lineItems.reduce(
    (prevValue, curValue) => prevValue + curValue.amount,
    0
  );
};

/**
 * Takes and returns a dollor amount (USD). Formatted with commas and two decilams
 * @param {number} cents
 * @returns {string}
 */

export const centsToDollors = (cents: number): string => {
  const dollars = cents / 100;
  const addDecilams = twoDecilams(dollars);
  return addThousandsSeparator(addDecilams);
};

/**
 * Takes a dollor amount (USD) and returns cents
 * @param {number} dollars
 * @returns {number}
 */

export const dollarsToCents = (dollars: number): number => {
  return dollars * 100;
};

/**
 * Takes a number and returns a number with 2 decilam places
 * @param {number} myNum
 * @returns {string}
 */

export const twoDecilams = (myNum: number): string => {
  return myNum.toFixed(2);
};

/**
 * Adds a thousands separator
 * @param {string} myNum
 * @returns {string}
 */

export const addThousandsSeparator = (myNum: string): string => {
  return myNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Takes all the invoiced and finds the total
 * @param {Invoice} invoice
 * @returns {number}
 */

export const sumInvoices = (invoice: Invoice[] | undefined): number => {
  if (!invoice) return 0;
  return invoice.reduce((prevValue, curValue) => {
    const invoiceSum = sumLineItems(curValue.lineItems);
    return prevValue + invoiceSum;
  }, 0);
};
