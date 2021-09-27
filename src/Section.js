import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer.js";
import "./css/Section.css"



function Section() {
  return (
    <div>
      <section>
        {/* <Greeting name="Carla" lastName="Conte" /> */}
        {<ItemListContainer />}
      </section>
    </div>
  );
}

export default Section;
