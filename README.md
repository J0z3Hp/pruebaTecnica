# ✅ Proyecto: Registro e Inicio de Sesión

Este proyecto es una aplicación funcional de registro e inicio de sesión desarrollada con Node.js, Angular, y MongoDB. Permite a los usuarios registrarse, iniciar sesión y manejar su autenticación mediante JWT. ✨

## 🏠 Descripción General

- La aplicación está dividida en dos partes principales:

- Backend (⚖️ Node.js):

- API RESTful que maneja las operaciones de registro, inicio de sesión y verificación de usuarios.

- La base de datos MongoDB almacena los datos de los usuarios de manera segura.

- Implementa JSON Web Tokens (JWT) para la autenticación.

- Frontend (⚛ Angular):

- Una interfaz amigable para que los usuarios se registren e inicien sesión.

- Manejo de formularios reactivos con validación.

- Gestor de estados para mantener la sesión del usuario.

# 🔧 Características Principales

- Registro de Usuarios 📢:
Los usuarios pueden registrarse proporcionando un correo electrónico, nombre de usuario y contraseña.

- Inicio de Sesión 🔑:
Inicio de sesión utilizando las credenciales del usuario.

- Autenticación Segura ⚖️:
Uso de JWT para proteger las rutas del backend y asegurar la identidad del usuario.

- Validación de Formularios 📝:
Se validan los campos del formulario tanto en el frontend como en el backend.

- Base de Datos MongoDB 💾:
Almacenamiento seguro de información de usuarios, con contraseñas cifradas usando bcrypt.

# 🚀 Tecnologías Utilizadas

**Backend:**

- Node.js y Express

- MongoDB con Mongoose

- JSON Web Tokens (JWT) para autenticación

- bcrypt para cifrado de contraseñas

**Frontend:**

- Angular

- Bootstrap para estilos 

# 🔄 Flujo de la Aplicación

**Registro de Usuario:**

- El usuario completa un formulario con su correo electrónico, nombre y contraseña.

- Los datos se envían al servidor, donde se valida y se guarda en la base de datos con la contraseña cifrada.

**Inicio de Sesión:**

- El usuario proporciona sus credenciales.

- El servidor valida las credenciales y genera un JWT si son correctas.

- El token JWT se almacena en el navegador del cliente (por ejemplo, en localStorage).

# ¡Gracias por revisar este proyecto! 🎉