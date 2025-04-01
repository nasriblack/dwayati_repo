import { expirationDays } from '../constants';

export const getExpirationColor = (
  dateTime: string,
): 'red' | 'orange' | 'green' => {
  const givenDate = new Date(dateTime);
  const today = new Date();

  // Remove time part for an accurate day comparison
  givenDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // Calculate the difference in days
  const timeDifference = givenDate.getTime() - today.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference < 0) {
    return 'red'; // Already expired
  } else if (daysDifference <= expirationDays) {
    return 'orange'; // Expiring in 15 days or less
  } else {
    return 'green'; // Still valid
  }
};
