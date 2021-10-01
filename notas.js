/*componente funcional siempre en mayuscula
se puede poner style pero asi
let style = {
    color: "red";
}

const stylesJsx{
    <div style={style}>
    <p>{jsx}<p/>
}
*/

//-clase3

// constructores
// paradigma orientado a objetos
// tiene mas sugar syntax los componentes funcionales (que usan function)
//hay dos tipos de componentes: funcionales y de clase

//ejemplos con componente padre e hijo
/*
class App extends Component{
    render()
    return <MyFirstComponent name="Sebastian" lastName="Fontana"/>
} 

class MyFirstComponent extends Component {
    render(){
        const jsx = <h1>Bienvenido: {this.props.name} {this.props.lastName}<h1/>;
        return jsx;
    }
}

el this se usa en componentes de clase, es como un self de python
*/
/* */
/*
function App() {
    return <MyFirstComponent name="Gustavo Adolgo" lastName="Garcia Blanco" />
}

const App = () => {
    return <MyFirstComponent name="Gustavo Adolgo" lastName="Garcia Blanco" />
}

const MyFirstComponent = (props) => {
    const jsx = <h1> Bienvenido: {props.name}{props.lastName}</h1>;
    return jsx;
}

- el props es un objeto

*/
/* */
/*
componente sin () estado vs con estado (props)
 */
/* */
/*
si quiero usar estado en componente de clase tengo q si o si usar constructor
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            lastName: "",
            gender: "",
            age: ""
        }
    }
    render(){
        return <h1>Hola a todos <h1/>
    }
}
 */
/* */
/* En caso de los componentes funcionales seria
const [NombreDelEstado, nombreDelaFuncionQueCambiaElEstado] = useState(elValorInicial)
const App = () => {
    const [name, setName] = useState("Sebastian")
    const [lastname, serLastNme] = useState(Fontana)
return <h1> Bienvenido: {name} {lastName} <h1/>;
}
cuando queres agregar valores a un componente ya creado, se pone los proprs en el ()
y para llamar cosas hechas del componente usar "useState(props.name), usteState(props.lastName)"
*/

// clase apis//////////////////////////////////
///////////////////////////////////////////
