# curso-react-2020
curso de react, em6


#Babel
es un preprocesador de JS que permite escribir codigo javascript en la ultima especificacion, utilizar jsx
y genera un codigo JS que entiendan todos los navegadores.


#JSX
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

#React Fiber

	

#SPA vs MPA
	
#REDUX 
	Es un framework q se encarga de manejar el estado de la aplicacion. El estado es unico y global (store)
	El estado se modifica solo por acciones.
	
#Instalar REDUX
```
npm install --save redux

```

#Libreria q realiza la vinculacion entre REDUX y React
```
npm install --save react-redux
```


