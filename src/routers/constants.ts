import { lazy } from "react";

const ShopperDashboard = lazy(() => import("../pages/ShopperDashboard"));
const Home = lazy(() => import("../pages/ShopperDashboard"));

export {
  Home,
  ShopperDashboard,
};

export const MainRoute = {
  Home: "/",

  shopperDashboard: "/shopper",
};

export const AuthRoute = {
  Login: "/login",
};
