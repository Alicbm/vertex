import { Location } from "react-router-dom";
import { RoutesType } from "../types";

export const verfyServiceSelected = (
  routes: RoutesType[],
  location: Location
) => {
  const url = location?.pathname?.split("/").slice(1, 3);

  routes?.map((item) => {
    if (url[0] === "") {
      if (item.label.toLocaleLowerCase() === "inicio") item.selected = true;
      else item.selected = false;
    } else {
      if (url[0].toLocaleLowerCase() === item.label.toLocaleLowerCase())
        item.selected = true;
      else item.selected = false;
    }

    return item;
  });
};
