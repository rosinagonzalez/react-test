# Seta Workshop Pokémon test

![screenshot-localhost_4200-2022 01 20-09_33_21](https://user-images.githubusercontent.com/8492873/152158903-8c2b17f5-79f2-4852-8115-9fae8980bd00.png)

La idea del proyecto es hacer una versión muy básica del Pokédex, el cual consiste en 2 grandes componentes: el listado de los Pokémon y el visualizador.

## Se deberá implementar lo siguiente:

El componente PokemonList debe invocar el método getFirstGen() con el hook useGetFirstGen, obteniendo así el listado de Pokémon de primera generación.
Dentro del div con la clase "list", para cada Pokémon se deberá crear un elemento button con la clase "list-item" conteniendo el nombre del Pokémon.

El input dentro del componente PokemonList, deberá funcionar como un filtro sobre la lista.

Al hacer click en un Pokémon, se deberá agregar a dicho elemento la clase "selected" y se deberá desplegar su información básica en el componente PokemonViewer. Para obtener la información a mostrar se deberá implementar un hook usePokemon, donde se deberá realizar un GET al siguiente endpoint: https://pokeapi.co/api/v2/pokemon/${nombre}, por ej: https://pokeapi.co/api/v2/pokemon/pikachu

La información básica a mostrar se puede ver en el siguiente screenshot:

![image](https://user-images.githubusercontent.com/8492873/152181912-da884c6c-398c-4e80-9c70-ec207d9ed3b2.png)

TIP: el tipo se puede acceder de la siguiente forma pokemon.types[0].type.name



## Consideraciones extras:
Sería bueno completar el empty state para cuando el filtro no matchea nada y un empty state para el visualizador con el texto "No pokémon selected"
La forma de comunicación entre componentes queda a criterio personal
Los métodos del servicio tienen en la firma que devuelven Promises pero se pueden modificar para lo que se crea necesario.
Se puede usar cualquier librería externa que se crea necesaria


## Screenshots finales:
Interfaz con Pokémon seleccionado
![screenshot-localhost_4200-2022 01 20-09_33_21](https://user-images.githubusercontent.com/8492873/152158903-8c2b17f5-79f2-4852-8115-9fae8980bd00.png)

Estado inicial
![screenshot-localhost_4200-2022 01 20-09_33_41](https://user-images.githubusercontent.com/8492873/152182082-fc5af44d-88bf-4908-aa85-7d95c4ba5327.png)

Estado inicial sin match de filtro
![image](https://user-images.githubusercontent.com/8492873/152182515-fdc98637-899f-4512-a5e4-1cb0f7e2d569.png)

Pokémon seleccionado con filtrado
![image](https://user-images.githubusercontent.com/8492873/152183562-cf4fce30-0553-4bbd-a938-f9d8d32e73ae.png)


