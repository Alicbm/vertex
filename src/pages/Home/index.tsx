import { ContactUs } from "./components/ContactUs";
import { Courses } from "./components/Courses";
import { Exams } from "./components/Exams";
import { Information } from "./components/Information";
import { InitialView } from "./components/InitialView";
import { Proyects } from "./components/Proyects";
import { Header } from './components/Header';

export function Home () {
  return (
    <div>
      <Header />
      <InitialView />
      <Information />
      <Courses />
      <Proyects />
      <Exams />
      <ContactUs />
    </div>
  )
}