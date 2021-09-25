import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./components/ItemListContainer.js";
import "./css/Section.css"



function Section() {
  return (
    <div>
      <section>
        {/* <Greeting name="Carla" lastName="Conte" /> */}
        {<Cards />}
      </section>
    </div>
  );
}

export default Section;
