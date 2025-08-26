# 🚨 API Insegura (Vulnerable API)

Este repositorio contiene una API construida con **Express.js** y **JWT**, diseñada intencionalmente con múltiples vulnerabilidades para fines **educativos**, **laboratorios de pentesting** y **prácticas de seguridad en aplicaciones web**.

> ⚠️ **Advertencia**  
> Esta aplicación **NO es segura**. No debe ser usada en producción ni expuesta a Internet.  
> Su propósito exclusivo es el de aprendizaje y pruebas en entornos controlados.

---

## 🛠️ Tecnologías utilizadas

- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)  
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)  
- [body-parser](https://www.npmjs.com/package/body-parser)  

---

## 🚀 Instalación y ejecución

Clona el repositorio y ejecuta los siguientes comandos:

```bash
# Clonar repositorio
git clone https://github.com/wh01s17/api-jwt-insecure.git
cd api-jwt-insecure

# Instalar dependencias
npm install

# Ejecutar la API
node server.js
```

La API correrá en:
```http
http://localhost:5000
```

## 📌 Endpoints disponibles

1. POST /api/login
Autenticación con credenciales en texto plano. Devuelve un token JWT sin expiración.

```json
{
  "username": "admin",
  "password": "admin123"
}
```

1. GET /api/users/me
Obtiene la información del usuario autenticado (requiere token).

2. GET /api/users
Lista todos los usuarios (solo rol admin).

4. PUT /api/users/:id/role
Modifica el rol de un usuario (solo rol admin).


👤 Usuarios predefinidos

| ID | Usuario | Contraseña | Rol  |
|----|---------|------------|------|
| 1  | admin   | admin123   | admin |
| 2  | juan    | test123    | user  |
| 3  | ana     | test123    | user  |

## 🔎 Vulnerabilidades intencionales

Esta API contiene **fallos de seguridad a propósito** para practicar:

- Uso de **contraseñas en texto plano**.
    
- **JWT sin expiración** y con **clave secreta débil** (`secret`).
    
- **Control de acceso deficiente** (fácil de escalar privilegios).
    
- **Falta de protección contra brute force / rate limiting** en login.
    
- **Exposición de cabeceras sensibles** (ej. `Server: Express`).
    
- Sin uso de HTTPS ni seguridad en transporte.

## 🎯 Objetivo del proyecto

Este repositorio sirve como entorno para:

- Prácticas de **pentesting en APIs REST**.
    
- Demostraciones en talleres o cursos de **seguridad web**.
    
- Ejercicios de **JWT cracking** y **Privilege Escalation**.

## ⚖️ Licencia

Este proyecto está bajo la licencia **MIT**.  
Recuerda que es solo para **uso educativo en entornos controlados**.

---

## ⚠️ Descargo de responsabilidad

El autor **no se hace responsable** de cualquier uso indebido de este software.  
**Úsalo únicamente para aprendizaje en entornos locales o de laboratorio.**
