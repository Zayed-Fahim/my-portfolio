export type IStack = {
  name: string;
  icon?: JSX.Element;
};

export type IPosition = {
  role: string;
  startDate: string;
  endDate: string | null;
  stacks: IStack[];
  accomplishments: string[];
};

export type ICompany = {
  name: string;
  logo: string;
  url: string;
  location: string;
  workplaceType: "Remote" | "Hybrid" | "On-Site";
  jobType: "Full-time" | "Internship";
  startDate: string;
  endDate: string | null;
  positions: IPosition[];
};

export type Experience = {
  company: ICompany;
};
