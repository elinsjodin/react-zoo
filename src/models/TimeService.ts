import { IAnimal } from "./IAnimal";

export const TimeService = (currentAnimal: IAnimal, hour: number) => {
  const date = new Date();
  const lastFed = new Date(currentAnimal.lastFed);
  const milliTimeDiff = date.getTime() - lastFed.getTime();
  const hourTimeDiff = Math.floor(milliTimeDiff) / (1000 * 60 * 60);

  if (hourTimeDiff >= hour) {
    return true;
  }

  return false;
};
