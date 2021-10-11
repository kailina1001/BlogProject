export interface IPost {
  id: number;
  image: string;
  title: string;
  text: string;
  date: string;
  author: string;
}

export interface ISettingsSort {
  title: string;
  field: string;
  isActive: boolean;
}
