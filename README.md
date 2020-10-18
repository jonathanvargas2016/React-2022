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
<WeatherData/>


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