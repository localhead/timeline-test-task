export type DataContentItem = {
  date: string;
  description: string;
};

export type DataItem = {
  id: number;
  title: string;
  dateFrom: string;
  dateTill: string;
  content: DataContentItem[];
};
