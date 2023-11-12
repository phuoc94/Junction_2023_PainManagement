export type GetMyApproaches = {
  _id: string;
  name: string;
  description: string;
  img_url: string;
  status: string;
}[];

export type AddApproachToMeResponse = {
  _id: string;
  userId: string;
  approachId: string;
  status: string;
};

type Detail = {
  _id: string;
  name: string;
  description: string;
  img_url: string;
};

export type GetAllApproachesResponse = {
  _id: string;
  name: string;
  description: string;
  details: Detail[];
  img_url: string;
}[];
