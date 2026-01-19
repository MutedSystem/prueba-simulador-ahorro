# Prueba técnica – Simulador Ahorro

Implementación de una experiencia web que inspire confianza en usuarios de un banco digital donde los usuarios pueden explorar productos de ahorro y simular las ganancias con sus depósitos, de manera segura, elegante e intuitiva.

## Contexto

El objetivo de la prueba es crear una aplicación web utilizando Next.js,
obteniendo los datos desde un archivo JSON local.

La aplicación debe contar con tres pantallas:

1. Una pantalla para listar y filtrar los productos de ahorro ofrecidos por el banco digital FinColombia.
2. Una pantalla de simulación que permita calcular el dinero que se puede ganar a partir de tres variables: monto inicial, ingreso mensual y número de meses de ahorro. Para esta pantalla se debe escoger una ecuación para calcular el interés generado.
3. Una pantalla para capturar y almacenar los datos de usuarios interesados en recibir información sobre los productos, incorporando medidas de seguridad mediante un reCAPTCHA oculto.

Como funcionalidad adicional (opcional), se planteó la posibilidad de crear un microservicio en NestJS para la entrega y manejo de los datos utilizados por la aplicación.

Se asume que:

- La página de listado de productos no requiere paginación y el sistema de búsqueda puede ser sencillo.
- Los productos deben ser renderizados desde el servidor (SSR).
- La página debe tener navegabilidad.
- El simulador de ahorro debe funcionar tanto cuando se recibe el ID de un producto como cuando no se proporciona información de ningún producto.
- Los registros de usuarios interesados no deben estar asociados a un producto específico.
- En caso de implementar el microservicio, los datos deben cargarse y almacenarse en memoria.

El alcance original de la prueba se centra en el desarrollo de una aplicación en Next.js con renderizado del lado del servidor (SSR).

El desarrollo de un microservicio en NestJS, así como aspectos relacionados con CI/CD y manejo de bases de datos, se consideran fuera del alcance obligatorio del ejercicio.

## Alcance de la solución 

El ejercicio no requería el desarrollo de un microservicio, persistencia de datos ni el uso de contenedores. La solución mínima puede funcionar correctamente obteniendo los datos desde un archivo local.

Sin embargo, de forma opcional, se desarrollaron las siguientes funcionalidades adicionales:

- Frontend en Next.js haciendo uso de renderizado del lado del servidor (SSR).
- Microservicio en NestJS para la obtención y manejo de los datos.
- Persistencia de datos implementada mediante Prisma ORM.
- Pipeline de despliegue utilizando Docker.

La arquitectura de la solución evolucionó de forma incremental a medida que se incorporaron funcionalidades adicionales fuera del alcance original de la prueba.

Inicialmente, la aplicación se planteó como una solución simple basada en datos locales. Posteriormente, se añadió un microservicio para centralizar la obtención y almacenamiento de datos, lo que derivó en una dependencia funcional entre el frontend y el backend.
## Stack técnico
Para el desarrollo de esta prueba se utilizaron las siguientes tecnologías:

- **TypeScript** como lenguaje principal.
- **Next.js**, utilizando la arquitectura basada en el directorio `/app`, para el desarrollo del frontend con renderizado del lado del servidor (SSR).
- **NestJS** para la implementación del microservicio backend.
- **Prisma ORM** para el manejo de la persistencia de datos.
- **Docker** para el empaquetado y despliegue de la aplicación.

Algunas de estas tecnologías se incorporaron como extensiones opcionales fuera del alcance original de la prueba.

## Decisiones técnicas

### Frontend

El uso de Next.js para el desarrollo del frontend es el requisito central de la prueba. Se optó por utilizar el directorio `/app` debido a las ventajas que ofrece frente al directorio `/pages`.

Entre estas ventajas se encuentra la separación explícita entre `server components` y `client components`, lo que permite definir claramente qué partes de la aplicación se renderizan en el servidor y cuáles dependen exclusivamente del cliente.

Adicionalmente, el uso del directorio `/app` facilita el acceso y la manipulación de los search params del navegador, lo cual resulta útil para la implementación de filtros y estados derivados de la URL.

Se optó por utilizar renderizado del lado del servidor (SSR) en lugar de generación incremental (ISR) para garantizar que la información mostrada se obtenga siempre a partir de la fuente de datos más reciente.

Mientras que ISR prioriza el uso de contenido previamente generado y revalidado de forma periódica, SSR permite realizar consultas a la fuente de datos en cada solicitud, lo cual resulta más adecuado para escenarios donde los datos pueden cambiar con frecuencia o dependen de parámetros dinámicos como filtros de búsqueda.

### Modelo de cálculo del ahorro

Dado que el modelo de cálculo era de libre elección, se utilizó un esquema de interés compuesto con aportes mensuales para estimar la evolución del ahorro en el tiempo.

El monto final se calcula mediante la siguiente expresión:

$$
A = P \times (1 + r)^n + M \times \frac{(1 + r)^n - 1}{r}
$$

Donde:
- **A** corresponde al monto total acumulado.
- **P** es el monto inicial.
- **M** es el aporte mensual.
- **r** es la tasa de interés mensual.
- **n** es el número total de meses.

Este modelo considera tanto el capital inicial como los aportes periódicos, permitiendo ofrecer al usuario una representación más realista del comportamiento de sus ahorros a lo largo del período de simulación.

El cálculo tiene fines ilustrativos y no representa una simulación financiera exacta.

### Backend

El desarrollo del backend se realizó utilizando NestJS, dado que el enunciado de la prueba establecía este framework como la opción a utilizar en caso de implementar de forma opcional un microservicio.

La incorporación del microservicio se realizó como una extensión al alcance original del ejercicio, con el objetivo de centralizar la obtención y el manejo de los datos consumidos por la aplicación frontend.

Esta implementación se añadió de manera incremental a medida que la solución fue creciendo, lo que derivó en un sistema integrado donde el frontend depende del backend para el acceso y almacenamiento de la información.

### Persistencia de datos

Para el manejo de los datos se incorporó una capa de persistencia haciendo uso de Prisma ORM, con el fin de simplificar las operaciones de lectura y escritura y mantener un acceso consistente a la información.

El uso de un ORM permite modelar el esquema de datos de forma explícita y reducir la complejidad asociada al manejo manual de consultas, mejorando la mantenibilidad del código a medida que el proyecto crece.

La persistencia de datos no era un requisito obligatorio de la prueba y se incluyó como parte de las funcionalidades adicionales implementadas.

### Contenerización y despliegue

Se utilizó Docker para estandarizar el entorno de ejecución de la aplicación y facilitar su despliegue, evitando dependencias específicas del sistema local.

La contenerización permite levantar los servicios de manera consistente en distintos entornos y simplifica el proceso de ejecución y revisión del proyecto.

El uso de Docker se incorporó como un complemento opcional a la prueba y no formaba parte del alcance obligatorio del ejercicio.

## Estructura del proyecto
```text
├── backend
│   ├── src
│   │   ├── products
│   │   ├── leads
│   │   ├── prisma
│   │   └── utils
│   ├── prisma
│   │   └── migrations
│   └── test
├── front
│   ├── app
│   │   ├── products
│   │   ├── simulator
│   │   └── onboarding
│   ├── src
│   │   ├── components
│   │   ├── repositories
│   │   └── utils
│   └── public
└── README.md
```

## Instalación

### Requisitos

- Node.js (versión 18 o superior)
- Docker y Docker Compose

### Clonar el repositorio

```bash
git clone git@github.com:MutedSystem/prueba-simulador-ahorro.git
cd prueba-simulador-ahorro
```

> Nota: la configuración de Docker incluida en el proyecto está orientada a **producción**.
> Para desarrollo y evaluación local se recomienda ejecutar frontend y backend sin Docker.

### Ejecución con Docker (producción)

El proyecto puede ejecutarse utilizando Docker para levantar tanto el frontend como el backend
en un entorno estandarizado.

```bash
docker compose up --build
```
Una vez finalizado el proceso, la aplicación estará disponible en:

- Frontend: http://localhost:3000
- Backend: http://localhost:3005

### Ejecución local (desarrollo)

#### Backend

Antes de iniciar el backend, asegúrate de tener configurada la variable de entorno `DATABASE_URL`
en el archivo `.env` correspondiente y de que la base de datos esté disponible.

```bash
cd backend

npm ci
npx prisma generate
npx prisma migrate dev
npx prisma db seed

npm run start:dev
```
Estos pasos instalan las dependencias, generan el cliente de Prisma, aplican las migraciones, cargan los datos iniciales y levantan el servidor en modo desarrollo.

#### Frontend

```bash
cd front

npm ci

npm run dev
```

El frontend se ejecuta en modo desarrollo y consume los datos expuestos por el backend.

> Nota: el frontend depende del backend para la obtención de datos, por lo que el backend debe iniciarse primero.
