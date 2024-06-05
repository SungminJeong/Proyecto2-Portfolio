import "./style.css";
import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { AboutMe } from "./pages/Aboutme/AboutMe"
import { Divider } from "./components/Divider/Divider";
//공통되는 부분 헤더나 푸터같은..
const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);
linkPage("#aboutmelink", AboutMe);

Home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());  