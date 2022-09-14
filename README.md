# curso-react-2022
curso de react, em6

# componente
Pieza de codigo encapsulado reutilizable que puede tener estado o no.

# Estado
Como se encuentra la informacion del componente en un punto determinado 

# Babel
es un preprocesador de JS que permite escribir codigo javascript en la ultima especificacion, utilizar jsx
y genera un codigo JS que entiendan todos los navegadores.

# Manejo de eventos
https://es.reactjs.org/docs/events.html

# JSX
permite escribir HTML dentro del JS


#Crear un nuevo proyecto con React
```
$npx create-react-app my-app
```

#Importante al momento de renderizar un componente

Si deseaba renderizar un componente de React, comience su nombre con una letra MAYUSCULA.

#Formas de renderizar

1. forma de renderizar
<Location></Location>

2 forma de renderizar
<Index/>

#Class component vs functional component

#{} -> con esto se pone el valor de una variable en el html
<h1>{city}</h1>

#Destructuring se conoce cuando a una variable se le asigna el valor de props mediante {}.. el origen y destino tiene el mismo nombre
const city = props.city ---> const {city} = props
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
object destructuring

#cambiar nombre a las propiedades de origen => OBJECT DESTRUCTURING
const {nombre:nombreUsuario,apellido:apellidoUsuario} = usuario  
console.log(nombreUsuario)


#Array destructuring
const numeros = [0,1,2]
const [cero,uno,dos]  = numeros
console.log(cero)

#Template String
consiste en usar lo siguiente `${}`

#Prop types
libreria para evitar errores.para garantizar que los componentes usen el tipo de datos correcto y pasen los datos correctos


#Grid Fluid
Fluid intenta usar todo el ancho de la pantalla

#Sistema de grillas
xs -> celulares
sm -> tablets
md -> notebooks
lg -> laptops

#Media Query
Utiliza la @media regla para incluir un bloque de propiedades CSS solo si una determinada condición es verdadera.



#React LifeCycle
	
	fase de Mounting -> primera vez q se renderiza en el dom.
	constructor(this.state)
	componentWillMount -> se ejecuta una sola vez
	render
	componentDidMount -> se ejecuta una sola vez
	
	
	
--- Update
	componentWillReceiveProps(nextProps)
	shouldComponetUpdate(return true/false)
	componentWillUpdate()  -> se ejecuta despues del render
	render
	componentDidUpdate
	
#DOM
	es una interfaz de programación de aplicaciones (API) para documentos HTML y XML
#ReactDom
	reactDom es para renderizar los componentes en el DOM.
	 is the process of transforming your react components into DOM (Document Object Model) 
	 nodes that your browser can understand and display on the screen.
	
#Virtual DOM (document object model)
	
	representacion liviana del DOM.
	

#OneWayData Flow. Modificacion del dato modifica la vista.

	estado inicial -> 1.virtual DOM => DOM real =>cambio de estado => 2. virtual DOM => Compara 1 y 2 DOM virtual =>Actualiza solo lo necesario del DOM

#Proceso de Reconciliation. revisa en el DOM virtual.
	
	compara (aplicando heuristica) los componentes resultantes del nuevo estado con los anteriores
	y busca por cambios.



#SPA vs MPA
	
#REDUX 
	Es un framework q se encarga de manejar el estado de la aplicacion. El estado es unico y global (store)
	El estado se modifica solo por acciones.
	
#Instalar REDUX
```
$npm install --save redux

```

#Libreria q realiza la vinculacion entre REDUX y React
```
$npm install --save react-redux
```

#Smart components vs Dumb Components => containers

	son componentes tienen acceso al estado de la aplicacion. (connect)
	..decision de arquitectura.
	..que cantidad de containers queremos utilizar.



#Funcion pura
	depende unicamente de los parametros de entrada.. el retorno
	depende de los valores que le pasamos.
	
	Nunca alterar los estados.. se debe hacer copias..


#Middlwares.
	estructuras que se adosan al store. se intepondrian a cada accion..
```
$npm install --save redux-thunk
```

#Selectors
	recortar una porcion del estado global de la aplicacion. se puede usar para el filtrado de informacion
	
	
#reselect
	tiene Memoized, especie de cache liviana que permite hacer mas eficiente el trabajo con grandes volumenes de datos.


#lodash
	Lodash is a JavaScript library that helps programmers write more concise and maintainable JavaScript.
	

# useEffect
ejecutar cierto codigo de manera condicional

----------------------------------------------------------------------


# Pruebas
 
	Arrange - Arreglar: preparamos el ambiente a probar
	Act - Actuar: aplicar acciones al sujeto de pruebas
	Assert - Afirmar: observar el comportamiento resultante

# Jest
https://jestjs.io/

$npm run test
https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177
## instalacion necesaria
1. npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react    
2. npm install --save-dev @testing-library/react @types/jest jest-environment-jsdom
3. npm install whatwg-fetch --save (si usa fetch)

### probar compontentes
	
	const {container} = render(<component />)
    expect(container).toMatchSnapshot()


# Crear app with Vite
https://vitejs.dev/guide/#community-templates

# HOOKS
https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect
useEffect: detectar cambios
useFetch: peticiones
useState: manejar el cambio de estado
useRef: mantener una referencia y si esa ref cambia no vuelva a renderizar
useLayoutEffect: se lanza despues de la renderizacion del component.
useMemo: mejorar el proceso de ciertas tareas pesadas. 
useCallback: memoriza funciones y objetos que apuntan a una posicion de memoria diferente. Devuelve una funcion
useContext: ayuda a compartir datos entre paginas

React.memo: evitar renderizar componentes no deseados en el componente principal. Memoriza (Cuando el hook memo es llamada de un agente externo no funcionara porque lo que esta apuntando a una memoria diferente)


# REDUCER
https://es.reactjs.org/docs/hooks-reference.html#usereducer
es una funcion pura (resolverse de manera interna) que no puede ser asincrona y retorna un nuevo estado.

# Router

https://v5.reactrouter.com/web/api/NavLink
https://v5.reactrouter.com/web/guides/quick-start

tag contenedora: Routes
tag hija: Route
tag similar a la tag ancla: Link
tag NavbLink es utilizado en la navegacion. Es similar al Link solo que se puede utilizar una clase dependiendo donde se encuentre