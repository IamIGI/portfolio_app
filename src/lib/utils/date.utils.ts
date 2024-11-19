function timeSpentOnActivity(startDate: string, endDate?: string) {
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

  return { years, months };
}

export default {
  timeSpentOnActivity,
};
