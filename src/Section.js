import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from "./components/ItemListContainer.js";
import "./css/Section.css"



function Section() {
  return (
    <div>
      <section>
        <Greeting name="Carla" lastName="Conte" />
      </section>
    </div>
  );
}

export default Section;
