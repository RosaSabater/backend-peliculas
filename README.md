
# ¿Qué es? 👀

Es mi primer backend de una tienda de alquiler de películas que usa:

- NodeJS
- Express
- Sequelize
- MySQL2
- JWT

<br>

# Cómo lanzarlo 🚀

- Descargar [repo](https://github.com/RosaSabater/backend-peliculas).
- Ejecutar:
	- `npm start`

<br>

# Deploy

- El proyecto está deployado en [Heroku](https://backendpeliculas.herokuapp.com)
- He usado el add-on de Heroku ClearDB MySQL para tener la base de datos en la nube.

# Endpoints 📃
Se pueden ejecutar sin necesidad de Postman con la extensión REST Client.<br>
Encontraremos un archivo llamado pseudoPostman.rest donde podremos ejecutarlos.

<br>

- **POST** /usuarios/registro/
```json
{
    "email": "ejemplo@gmail.com",
    "password": "1234"
}
```

<br>

_Aquí se crea el token que durará 1 día_
- **POST** /usuarios/login/
```json
{
    "email": "ejemplo@gmail.com",
    "password": "1234"
}
```

<br>

- **POST** /usuarios/logout/
```json
Authorization: {token}
{
    "email": "ejemplo@gmail.com",
    "password": "1234"
}
```

<br>

- **POST** /usuarios/delete/
```json
Authorization: {token}
{
    "email": "ejemplo@gmail.com",
}
```

<br>

- **POST** /usuarios/perfil/
```json
Authorization: {token}
{
    "UsuarioId": 1
}
```

<br>

- **POST** /peliculas/add/
```json
{
    "original_title": "Ejemplo",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "backdrop_path": "asfadsfadf.jpg"
}
```

<br>

_El alquiler de la película será de 3 días_
- **POST** /peliculas/alquilar/
```json
{
    "UsuarioId": 1,
    "PeliculaId": 1
}
```

<br>

- **GET** /peliculas/titulo/TITULOPELICULA/

<br>

- **GET** /peliculas/IDPELICULA

