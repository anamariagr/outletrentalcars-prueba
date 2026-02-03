/**
 * Calculate the number of days between two dates
 * @param startDate - Start date string
 * @param endDate - End date string
 * @returns Number of rental days (minimum 1)
 */
export function calculateRentalDays(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays > 0 ? diffDays : 1;
}

/**
 * Calculate total rental price
 * @param pricePerDay - Daily rental price
 * @param days - Number of rental days
 * @returns Total price
 */
export function calculateTotalPrice(pricePerDay: number | string, days: number): number {
    return Number(pricePerDay) * days;
}
