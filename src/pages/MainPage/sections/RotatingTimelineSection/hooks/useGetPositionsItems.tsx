import { PositionPoint } from "../components/PositionPoint";
import { ROTATION_INDEX } from "../constants";
import { PositionItem } from "../types";

export const useGetPositionsItems = (
  positions: PositionItem[],
  activeIndex: number,
  handleClick: (index: number) => void,
  title: string
) => {
  return positions.map((pos, index) => {
    const isActive = index === activeIndex;
    const rotation = index * ROTATION_INDEX;

    return (
      <PositionPoint
        key={index}
        activeIndex={activeIndex}
        handleClick={handleClick}
        pos={pos}
        index={index}
        isActive={isActive}
        rotation={rotation}
        title={title}
      />
    );
  });
};
