/**
 * Calculates the time spent on an activity based on the provided start date and end date.
 *
 * @param {string} startDate - The starting date of the activity in the format 'YYYY.MM'.
 * @param {string} [endDate] - The optional ending date of the activity in the format 'YYYY.MM'.
 *                             If not provided, the current date is used for the calculation.
 *
 * @returns {string} A string representing the time spent on the activity in the format
 *                  "{years} year(s) {months} month(s)", or "0 months" if the duration is zero.
 *
 * @example
 * // Calculates the time spent from July 2023 to the current date
 * const duration = timeSpentOnActivity('2023.07');
 * console.log(duration); // Output: "1 year 4 months" (if current date is November 2024)
 *
 * @example
 * // Calculates the time spent from July 2023 to October 2024
 * const duration = timeSpentOnActivity('2023.07', '2024.10');
 * console.log(duration); // Output: "1 year 4 months"
 */
function timeSpentOnActivity(startDate: string, endDate?: string): string {
  const [startYear, startMonth] = startDate.split('.').map(Number);

  let endYear: number;
  let endMonth: number;

  if (endDate) {
    const [eYear, eMonth] = endDate.split('.').map(Number);
    endYear = eYear;
    endMonth = eMonth;
  } else {
    const now = new Date();
    endYear = now.getFullYear();
    endMonth = now.getMonth() + 1; // Months are 0-indexed
  }

  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth + 1); // Add 1 month

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearPart = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
  const monthPart = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

  const result = [yearPart, monthPart].filter(Boolean).join(' ');

  return result || '0 months'; // Handle case with no time spent
}

export default {
  timeSpentOnActivity,
};
