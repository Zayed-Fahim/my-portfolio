export type IProjectTechnologyProps = {
  name: string;
  icon: {
    name: string;
    className: string;
    fill?: string;
  };
};

export type IProjectStylesProps = {
  backgroundImage: string;
  brandColor: string;
};

export type IProjectProps = {
  styles: IProjectStylesProps;
  title: string;
  shortDescription: string;
  technologies: IProjectTechnologyProps[];
  image: string;
  liveSite: string;
  clientRepo: string;
  serverRepo: string;
  isVisible?: boolean;
};
