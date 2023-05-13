import Home from "../pages/Home";
import Services from "../pages/Services";
import Company from "../pages/Company";
import Blog from "../pages/Blog";
import Contact from "../pages/ContactUs";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Services",
    path: "/services",
    component: Services,
  },
  {
    name: "Company",
    path: "/company",
    component: Company,
  },
  {
    name: "Blog",
    path: "/blog",
    component: Blog,
  },
  {
    name: "Contact Us",
    path: "/contact",
    component: Contact,
  },
];

export default routes;
