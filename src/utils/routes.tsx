import { FaHome } from "react-icons/fa";
import { LiaBookSolid } from "react-icons/lia";
import { FaLayerGroup } from "react-icons/fa6";
import { GrTest } from "react-icons/gr";
import { IoMdTrophy } from "react-icons/io";
import { PiExamFill } from "react-icons/pi";
import { RoutesType } from '../types'

export const routesServices: RoutesType[] = [];

routesServices.push({
  label: "Inicio",
  route: "/",
  icon: <FaHome />,
  selected: false,
});

routesServices.push({
  label: "Cursos",
  route: "/cursos",
  icon: <LiaBookSolid />,
  selected: false,
});

routesServices.push({
  label: "Rutas",
  route: "/rutas",
  icon: <FaLayerGroup />,
  selected: false,
});

routesServices.push({
  label: "Ejercicios",
  route: "/ejercicios",
  icon: <GrTest />,
  selected: false,
});

routesServices.push({
  label: "Retos",
  route: "/retos",
  icon: <IoMdTrophy />,
  selected: false,
});

routesServices.push({
  label: "Examenes",
  route: "/examenes",
  icon: <PiExamFill />,
  selected: false,
});
