# 04 - Baseline tecnico

Convenciones operativas para `pastoral-web` (Producto 1, landing Astro).

## Naming y estructura
- Convencion de nombres de archivos: `kebab-case` para rutas, contenido y recursos; componentes segun convencion actual del framework (`PascalCase` si aplica).
- Convencion de nombres de ramas: `feature/<tema-corto>`, `fix/<tema-corto>`, `docs/<tema-corto>`.
- Regla para modulos/carpetas: separar contenido (`public`/colecciones), UI (`src/components`), paginas (`src/pages`) y utilidades (`src/lib` o equivalente).

## Estrategia de ramas
- Base branch: `main`.
- Branch naming sugerido: `type/short-description`.
- Tipos sugeridos: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`.

## Commits
- Formato sugerido: `type(scope): mensaje corto`.
- Un commit debe representar un cambio coherente y reversible.

## Definicion de Done (DoD)
- [x] Requisito implementado segun criterios de aceptacion.
- [x] Build de Astro y verificaciones base sin errores criticos.
- [x] Riesgos principales documentados en PR o tracking.
- [x] Documentacion impactada actualizada (`.atl` y/o README).

## Testing minimo
- Validacion de build estatico (`npm run build` o comando equivalente).
- Smoke test manual en home, secciones principales y CTA de registro.
- Verificacion responsive en mobile y desktop.

## Seguridad base
- No exponer secretos en codigo/repositorio.
- Validar entradas y manejar errores de forma controlada.
- Aplicar principio de minimo privilegio en accesos.

## Observabilidad base
- Monitoreo de deploy y errores en plataforma de hosting (Vercel).
- Registro de incidentes de contenido (publicacion fallida, enlace roto).
- Metricas minimas: disponibilidad, tiempo de carga y actualizacion de contenido.

## Stack vigente

- Framework: Astro.
- Estilos: Tailwind CSS como estrategia principal.
- Politica de estilos: minimizar CSS personalizado.
- Contenido: Decap CMS + Astro Content Collections.
- Hosting activo: Vercel.

## Fase 2 - Plan tecnico inmediato

- Regla de planificacion: sin estimaciones en dias; se trabaja por hitos y entregables.

### Entregables tecnicos de fase
- Backlog tecnico priorizado de implementacion home.
- Mapa de componentes/archivos impactados.
- Definicion de contratos de datos para Actividades, Calendario vivo, Noticias y FAQ.
- Checklist tecnico de validacion antes de merge.

### Dependencias tecnicas
- URL oficial de WhatsApp con parametros de tracking.
- Disponibilidad de contenido real para calendario, comunidad y noticias.
- Confirmacion de copy final por seccion para evitar retrabajo en componentes.
