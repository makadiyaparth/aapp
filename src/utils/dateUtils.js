// Takes date string as input.
// Second parameter is optional. Considers today if not passed.
export const getYearTillToday = (from, to) => {
    const fromDate = new Date(from);
    const toDate = to ? new Date(to) : new Date();
    const differenceInTime = toDate.getTime() - fromDate.getTime();
    const differenceInYears = Math.floor(differenceInTime / (1000 * 3600 * 24 * 365.25));
    return differenceInYears;
}

// Takes date string as input
export const formatDate = (date) => {
    if (!date) {
        return '-'
    }

    const options = {
        year: '2-digit',
        month: 'short',
        day: '2-digit'
    };

    const formatter = new Intl.DateTimeFormat('en-IN', options);
    return formatter.format(new Date(date));
}