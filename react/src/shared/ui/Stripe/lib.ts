import { StripeColor } from 'shared/ui/Stripe/Stripe';

export const getStripeTheme = (nesting: number) => {
  if (nesting === 1) {
    return StripeColor.BLUE;
  } if (nesting === 2) {
    return StripeColor.YELLOW;
  } if (nesting === 3 || nesting === 4) {
    return StripeColor.GREEN;
  }
  return StripeColor.YELLOW;
};
