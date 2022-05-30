# Listado de Componentes

<br>

## Componentes Principales

 <br>

### Button

<br>

Renderiza un botón con una acción recibida y texto recibido

<br>

### Icon Button

<br>

Renderiza un buton svg con una acción recibida y forma recibida

<br>

### Header

<br>

Renderiza un componente header, con el título de la página, y todos los enlaces de navegación de la página

<br>

### Footer

Renderiza la dirección, teléfono y email de la galería y 3 Icon Button, pasando para cada uno la forma del icono de facebook, twitter y instagram, y la acción de abrir la página de cada

<br>

### Artwork

Renderiza una obra de arte, con una imagen recibida, un autor recibido, título recibido, precio mensual recibido y precio de compra

<br>

### ArtworkDetail

<br>

Renderiza los detalles de una obra de arte recibida, con una imagen recibida, título recibido, un autor recibido, dimensiones recibidas, medio recibido, precio mensual recibido y precio de compra, y un texto de descripción recibido

<br>

### MyArtwork

<br>

Renderiza una obra de arte, con una imagen recibida, un título recibido, precio mensual recibido y precio de compra, y 2 icon buttons, pasando a uno la imagen de editar y la acción de abrir la EditPage, y al otro la imagen de borrar y la accion de borrar esta obra de arte

<br>

### LoginForm

<br>

Renderiza un formulario de login, con los inputs ‘email’ y ‘password’ y un button le pasando la acción de submeter el form

<br>

### RegisterForm

<br>

Renderiza un formulario de registro con los inputs ‘first name’, ‘surname’, ‘email’, ‘password’, ‘webpage’, ‘picture profile’, ‘address & number’, ‘apartment, door, stair’, ‘city’, ‘phone number’ y una checkbox ‘I’m an artist and I want to sell my work’ y un button le pasando la acción de submeter el form

<br>

### AddEditForm

<br>

Renderiza un formulario que será utilizado para añadir o editar una obra, dependiendo de la condición a la cual fue llamado, con los inputs ‘title’, ‘medium’, ‘height (dimensions)’, ‘width (dimensions)’, ‘style’, ‘purchase price’, ‘monthly rent price’ y ‘description (max. 240 char)’ y un button le pasando la acción de submeter el form

### MyProfileForm

<br>

Renderiza un formulario con los inputs ‘email’, ‘password’, ‘web page’, ‘address & number’, ‘apartment, door, stair’, ‘city’, ‘phone number’ y un button le pasando la acción de submeter el form

<br>

## Componentes para Modales

<br>

### ReactPortal

Renderiza un div fuera de la árbol HTML de React donde los modales serán invocados

<br>

### ModalLoading

<br>

Renderiza un spinner de loading siempre que se espere llegar los dados

<br>

### ModalConfirmation

<br>

Renderiza una caja de texto para confirmar una acción, con la opción de cancelar la acción (y con eso cerrar la caja) y una opción de confirmar la acción deseada.

<br>

### ModalText

<br>

Renderiza una caja de texto para dar un feedback simples, con la opción de cerrarla después de leer el texto

<br>

## Componentes Page

<br>

### Home Page:

<br>

Renderiza una página de entrada, con un componente Header, una imagen de un obra de arte con link para su Details Page y un componente Footer.

<br>

### Login Page:

<br>

Renderizar una página de Login, con un componente Header, un componente LoginForm y un componente Footer. Además renderiza dos componentes Modal Text cuando sea necesario.

<br>

### Register Page:

<br>

Renderizar una página de Register, con un componente Header, un componente LoginForm y un componente Footer. Además renderiza dos componentes Modal Text cuando sea necesario.

<br>

### About Page:

Renderiza un componente Header, un text con dos párrafos explicando sobre lo que se trata la página y un componente footer

<br>

### Artworks Page:

<br>

Renderiza un componente Header, un filtro en forma de dropdown, una lista de un máximo de 9 componentes Artwork pasando la información necesaria para ser renderizados, una navegación con el total de componentes Artworks y cuántos aún restan para visualizar y 2 Icon Buttons, uno para renderizar los componentes Artwork que restan y otro para ver los que ya fueron vistos. Finalmente renderiza un componente Footer

<br>

### ArworkDetails Page

<br>
Renderiza un componente Header, un componente ArtworkDetail pasando sus detalles a el, un footer, y dependiendo la condición, 2 líneas de texto (una con link para la Login Page y otra para la Register Page), o un componente button pasandole el texto ‘Buy or Rent’ y la acción de llevar a la página Arwork BuyPage

<br>
### ArtworkBuy Page

<br>

Renderiza un componente Header, un componente Artwork le pasando los detalles necesarios, un input para calcular el tiempo total para alquilar una obra y un texto con la información el precio para alquiler total baseado en el input, y además un texto para con la información del precio de compra de la obra. También renderiza 2 botones, pasando para uno el texto ‘Buy’ con la accion que abre un componente ModalText y el otro ‘Rent’ con la accion que abre un otro componente ModalText.

<br>

### MyArtwork Page

<br>
	
Renderiza un componente Header, un boton pasandole el texto “Add artwork +” y la acción de llevar al EditAdd Page con la condición de Add  una lista de un máximo de 9 componentes MyArtwork pasando la información necesaria para ser renderizados, una navegación con el total de componentes MyArtwork y cuántos aún restan para visualizar y 2 Icon Buttons, uno para renderizar los componentes MyArtwork que restan y otro para ver los que ya fueron vistos. Finalmente renderiza un componente Footer. Además también renderiza un componente ModalConfirmation siempre que se borre un componente MyArtwork

<br>

### AddEdit Page

<br>
Renderiza un componente Header, un componente AddEdit Component, un componente Footer y 4 componentes modales dependiendo de la condicion, todos componentes ModalText.

<br>

### Profile Page

<br>
Renderiza un componente Header, la imagen del usuario con su nombre, un componente MyProfileForm y 2 botones, pasandole a uno el texto  ‘Update Profile’ y la acción de actualizar el perfil del usuario, y al otro el texto ‘Delete Profile’ y la acción de borrar el perfil del usuario.
