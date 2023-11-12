// Types should be extracted to separate file
type Base = {
  _id: string;
  name: string;
  description: string;
  img_url: string;
};

type Detail = Base;

type Achievement = Base;

type Approach = Base & {
  details: Detail[];
  achievements: Achievement;
};

type SimplePain = Base & {
  approaches: string[];
};

type Category = Base & {
  pains: SimplePain[];
};

export type Pain = Base & {
  approaches: Approach[];
};

export type SingleCategoryResponse = Base & {
  pains: Pain[];
};

export type CategoriesResponse = Category[];
