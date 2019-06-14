# Burger Queen

## Preámbulo
De acuerdo a la solicitud de la cadena de comida [Burger Queen](https://faog.github.io/SCL008-Social-Network/), se crea esta aplicación desarrollada para usar en tablet; que permite a los meseros realizar la toma de pedidos de los clientes, enviando este pedido a la cocina; siendo visualizados para su elaboración e indicar cuando esten terminados, y por último, permitir a los meseros visualizar los pedidos terminados para poder entregar a los clientes, indicando este cambio en el sistema.

## Planificación 🚀

La planificación fue realizada en trello, la cual puedes revisar [aquí](https://trello.com/b/The8BwZP/burguer-queen).

## Criterios de aceptación del proyecto

### Definición del producto

A partir de la información obtenida del product owner, nacen 3 historias de usuario que describen las necesidades de los usuarios, buscando cubrirlas a partir de los criterios de terminado y los criterios de aceptación que se desarrollan en cada una de ellas.

#### [Historia de usuario 1] Mesero/a debe poder tomar orden de una persona
Yo como mesero o mesera debería poder tomar la orden de un cliente para saber fácilmente cuanto cobrar y que la cocina tenga las órdenes de manera inmediata y según cuando van llegando.

**Criterio de terminado**: Para realizar la historia de usuario N°1 voy a :

  * Anotar nombre de cliente
  * Agregar productos al pedido
  * Eliminar productos
  * Ver resumen y el total de la compra
  * Enviar pedido a cocina (guardar en alguna base de datos)
  * Se ve y funciona bien en una tablet

#### [Historia de usuario 2] Jefe de cocina debe poder ver ordenes
Yo como cocinero o cocinera debería poder ver las órdenes de los clientes y marcar cuales están listas para saber qué se debe cocinar y avisar al mesero que una orden está lista.

##### Definición de terminado
  * Ver los pedidos ordenados según van llegando
  * Marcar los pedidos que se han terminado
  * Ver el tiempo que tomó el pedido

#### [Historia de usuario 3] Mesero/a debe poder ver órdenes listas para servir para entregarlas a los clientes
Yo como mesero o mesera debería poder ver las órdenes que han sido cocinadas y están listas para servir a los clientes, para así entregarlas y que el cliente se vaya feliz con su comida.

#### Definición de terminado
  * Ver listado de órdenes terminadas
  * Marcar pedidos que han sido entregados

Los criterios de aceptación son iguales para las tres historias, siendo los siguientes:

##### Criterios de aceptación
  * Recibir code review de al menos una compañera.
  * Hiciste tests de usabilidad e incorporar el feedback del mesero o mesera.
  * Haces test unitarios y has testeado tu producto por tu cuenta.
  * Desplegar la aplicación y etiquetar la versión desplegada (git tag).

## Prototipo 
Una vez reconocido el usuario, comienza el proceso creativo de prototipo de baja fidelidad, destacando las principales vistas:

- Realizar pedido por parte del mesero.
- Ver los pedidos pendientes desde la cocina.
- Ver los pedidos listos para entrega.

### Consideraciones en el desarrollo 🛠️

**Ejecución del interfaz de usuario HTML, CSS, JS**

* La lógica del proyecto fue implementada usando HTML, CSS (usando como framework [React-Bootstrap](https://react-bootstrap.github.io/) y la librería de javascript [React](https://getbootstrap.com/).

**Implementación de la interfaz**

* Se usó [firebase](https://firebase.google.com/?gclid=Cj0KCQjw7sDlBRC9ARIsAD-pDFo4o3bi6laUeK0Hppr0Y6-QeRkx5bdtpUH2uak61pvLXOcA5KeLDSQaAkV2EALw_wcB)
como plataforma de desarrollo, para poder registrar los pedidos realizados y actualizar el estado del pedido (pendiente, entregar, entregado).
* Creación de componentes, reutilizables en el desarrollo de la aplicación.
* Creación de template, de acuerdo a las vistas a utilizar.
* Instalación de [redux](https://es.redux.js.org/) para manejar los estados de los productos.
* Test a la aplicación, como es el caso de los componentes creados y a las acciones de redux.
* Manejo de estilos CSS pensado en mobile first; usando react bootstrap.
* Testeo de [usabilidad](https://www.loom.com/share/368a922aa7b249218b61af988a4d54bd) y code review.
* Trabajo respadado mediante el uso de Git y GitHub :octocat:, realizando realeses por historia de usuarios.
* Deploy con gh-pages de la aplicación [Burger Queen](https://faog.github.io/SCL008-BurgerQueen/)

### Futuras mejoras ⌨️

* Implementar react router.
* Aumentar la covertura de testing.

### Autora 📌

* Fabiola Orellana 

8° Generación de Laboratoria.

Junio, 2019.



