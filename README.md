# Monitoreo de sensores IoT

Backend en Node.js + Express para recibir lecturas de sensores, guardar su última lectura y generar alertas según umbrales. Los datos se guardan en memoria, así que se pierden al reiniciar el servidor.

## Cómo correrlo

Requiere Node 20 o superior.

```bash
npm install
cp .env.example .env
npm run dev
```

En PowerShell, el segundo comando es `Copy-Item .env.example .env`.

El servidor queda en `http://localhost:3000` (el puerto se cambia en `.env`).

## Endpoints

### POST /lecturas

Registra una lectura. Si el sensor ya existe, actualiza su última lectura.

```json
{
  "id": "SEN4A9X1",
  "tipo": "TEMPERATURA",
  "valor": 40,
  "timestamp": "2025-12-01T18:30:00Z"
}
```

Responde `201` con la lectura y el campo `alerta` (`null` si no corresponde):

```json
{
  "id": "SEN4A9X1",
  "tipo": "TEMPERATURA",
  "valor": 40,
  "timestamp": "2025-12-01T18:30:00Z",
  "alerta": "TEMPERATURA alta"
}
```

Validaciones:
- `id`: exactamente 8 caracteres alfanuméricos
- `tipo`: `TEMPERATURA`, `HUMEDAD` o `CO2`
- `valor`: número válido
- `timestamp`: string

### GET /sensores

Lista todos los sensores con su última lectura. Responde `200`.

### GET /alertas

Lista las alertas activas, es decir, los sensores cuya última lectura supera un umbral. Responde `200`.

## Umbrales

| Tipo | Alerta si | Mensaje |
|---|---|---|
| TEMPERATURA | valor > 35 | TEMPERATURA alta |
| HUMEDAD | valor < 20 | HUMEDAD baja |
| CO2 | valor > 1000 | CO2 alto |

## Errores

Los errores responden con un objeto `{ "errorMsg": "..." }`:

| Código | Cuándo |
|---|---|
| 400 | Datos inválidos o JSON mal formado |
| 404 | Ruta inexistente |
| 500 | Error interno |

## Estructura

```
src/
├── index.js        arranque de Express
├── config/         variables de entorno
├── routes/         rutas
├── controllers/    traducen HTTP a casos de uso
├── usecases/       lógica de aplicación
├── domain/         modelos, validación y reglas de alerta
├── dao/            persistencia en memoria
├── container/      factories que arman las dependencias
├── middlewares/    manejo de errores
└── errors/         errores del dominio
```

Las dependencias van de afuera hacia adentro: `routes → controllers → usecases → domain`. Los casos de uso reciben los DAOs por constructor y las factories de `container/` son el único lugar donde se crean las instancias concretas.
