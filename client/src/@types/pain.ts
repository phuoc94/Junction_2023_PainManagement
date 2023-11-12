export type GetSinglePainsResponse = {
  _id: string;
  name: string;
  description: string;
  approaches: string[];
};

export type GetAllPainsResponse = GetSinglePainsResponse[];
