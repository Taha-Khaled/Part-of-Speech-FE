import { TWords, TWordsBody, TRanks, TRankBody } from "../types";
const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

export const getWords = async (body?: TWordsBody): Promise<TWords[]> => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}words`, {
    ...requestOptions,
    body: JSON.stringify({
      ...body,
    }),
  });
  const data: TWords[] = await response.json();
  return data;
};

export const getRank = async (body: TRankBody): Promise<TRanks> => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}rank`, {
    ...requestOptions,
    body: JSON.stringify({
      ...body,
    }),
  });
  const data: TRanks = await response.json();
  return data;
};
