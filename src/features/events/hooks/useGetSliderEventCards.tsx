import { SlideEventCard } from "../components/SlideEventCard";
import { DataContentItem } from "../types";

export const useGetSliderEventCards = (data: DataContentItem[]) => {
  if (!data) return [];

  return data.map((item, index) => {
    return (
      <SlideEventCard
        key={index}
        description={item.description}
        title={item.date}
      />
    );
  });
};
