export const errorLoginValidation = (error: {
  response: { data: { msg: string } };
}) => {
  if (typeof error?.response?.data?.msg === "undefined") {
    return "Unkwnown Error";
  }
  const retrievedError = error.response.data.msg.substring(0, 11);
  return retrievedError;
};

export const errorRegistrationValidation = (error: {
  response: { data: { message: string } };
}) => {
  if (typeof error?.response?.data?.message === "undefined") {
    return "Unkwnown Error";
  }
  const retrievedError = error.response.data.message.substring(0, 8);
  return retrievedError;
};
