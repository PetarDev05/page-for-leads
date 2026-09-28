export const submitUserInput = async (input) => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const options = {
    method: import.meta.env.VITE_METHOD,
    body: JSON.stringify(input),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const response = await fetch(url, options);
  const parsed = await response.json();
  return parsed;
};
