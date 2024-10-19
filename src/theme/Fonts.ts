import Metrics from './Metrics';
const size = {
  FONT6: Metrics.screenWidth * (6 / 365),
  FONT8: Metrics.screenWidth * (8 / 365),
  FONT10: Metrics.screenWidth * (10 / 365),
  FONT12: Metrics.screenWidth * (12 / 365),
  FONT14: Metrics.screenWidth * (14 / 365),
  FONT16: Metrics.screenWidth * (16 / 365),
  FONT20: Metrics.screenWidth * (20 / 365),
};

const weight = {
  FULL: '900',
  SEMI: '600',
  LOW: '400',
  BOLD: 'bold',
  NORMAL: 'normal',
};
const type = {
  MONTSERRAT_MEDIUM: 'Montserrat -Medium',
  MONTSERRAT_REGULAR: 'Montserrat -Regular',
  MONTSERRAT_SEMI_BOLD: 'Montserrat-SemiBold',
};

export default {
  size,
  weight,
  type,
};
