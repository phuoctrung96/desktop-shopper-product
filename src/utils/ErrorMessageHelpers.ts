export const required = (fieldName: string) => {
  return `${fieldName} is a required field`;
};

export const matched = (fieldName1: string, fieldName2: string) => {
  return `${fieldName1} and ${fieldName2} must be matched`;
};

export const emailValid = (fieldName: string) => {
  return `${fieldName} is invalid`;
};
