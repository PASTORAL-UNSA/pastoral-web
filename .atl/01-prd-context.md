# 01 - PRD ligero

Documento de referencia para la entrega funcional prioritaria del repositorio `pastoral-web`.

## Problema
La comunicacion de actividades pastorales requiere un canal web claro y mantenible. Sin una landing institucional consistente, la informacion de eventos, cursos y talleres se dispersa y pierde alcance.

## Usuario objetivo
- Segmento principal: estudiantes universitarios de la UNSA y comunidad interesada.
- Contexto de uso: consulta rapida desde celular o escritorio sobre actividades vigentes.
- Dolor principal: falta de un punto oficial, actualizado y facil de navegar.

## JTBD (Jobs To Be Done)
- Cuando quiero participar en actividades de la pastoral, quiero ver informacion vigente en un solo sitio para decidir y registrarme a tiempo.

## Alcance v1
### Incluye
- [x] Publicacion de informacion institucional de Pastoral UNSA.
- [x] Secciones de eventos, fechas especiales, cursos y talleres.
- [x] Modulo de registro/derivacion existente dentro del ecosistema Astro.
- [x] Estructura responsive y optimizada para mobile/desktop.
- [x] Gestion de contenido con Decap CMS y colecciones de Astro.

### Excluye
- [x] Integraciones en tiempo real con sistemas externos.
- [x] Flujos operativos internos de asistencia (pertenecen al Producto 2).

## Metricas de exito
| Metrica | Baseline | Meta | Ventana |
|---|---|---|---|
| Tiempo de publicacion de contenido nuevo | Publicacion manual irregular | <= 1 dia desde redaccion a publicacion | 3 meses |
| Disponibilidad del sitio | No estandarizada | >= 99% mensual en hosting | 3 meses |
| Cobertura de actividades vigentes publicadas | Parcial | 100% de eventos/cursos activos publicados | Mensual |

## Criterios de aceptacion
- [x] CA-01: La landing muestra informacion institucional y secciones de actividades con navegacion clara.
- [x] CA-02: El contenido editorial puede actualizarse sin cambios manuales de codigo productivo.
- [x] CA-03: La experiencia responsive funciona en mobile y desktop sin degradacion critica.

## Estado por fases (modo ejecucion full AI)

- Politica de planificacion: no se usan estimaciones en dias ni cronogramas por fecha; el avance se gestiona por hitos y entregables verificables.

### Fase 0 - Alineacion y DoD de fase
- Estado: **Completada**.
- Entregables registrados:
  - Alineacion de alcance del Producto 1 en `.atl/00-project-context.md`.
  - Definicion de Done operativa en `.atl/04-technical-baseline.md` y `.atl/05-workflow-and-roles.md`.

### Fase 1 - Narrativa y direccion UX/UI
- Estado: **Completada**.
- Entregables registrados:
  - Narrativa final y orden de secciones aprobado para landing.
  - Guia visual inicial y base de tokens en `.atl/06-design-direction.md`.
  - Checklist UX y criterios operativos de conversion en `.atl/02-daily-tracking.md`.

## Decision de narrativa landing (2026-05-28)

- Decision oficial: adoptar **Variante B (confianza primero)** para el rediseno de la home del Producto 1.
- Objetivo narrativo: construir pertenencia y credibilidad antes del cierre principal por WhatsApp, manteniendo CTA visible desde el inicio y repetido en puntos clave.

### Orden narrativo final aprobado
1. Hero
2. Actividades + Calendario vivo
3. Quienes somos
4. Comunidad real (vivencias + testimonios)
5. Noticias + FAQ
6. Cierre

### Criterios operativos para implementacion
- CTA principal: **Unirme por WhatsApp** como enlace real medible (no solo boton visual).
- Repeticion de CTA: Hero, bloque de Actividades/Calendario y Cierre.
- Regla de contenido: cada seccion debe empujar a la siguiente sin romper el hilo de "sumarme a una comunidad".

## Arranque inmediato: Fase 2 - Plan tecnico de implementacion

### Objetivo de fase
- Dejar definido y listo para ejecutar el plan tecnico de implementacion del rediseno home, alineado a narrativa final, CTA principal y restricciones del stack Astro.

### Entregables esperados
- Backlog tecnico priorizado por hitos (sin estimacion en dias).
- Mapa de cambios por archivo/componente de la home.
- Definicion de contratos de contenido para Actividades, Calendario vivo, Noticias y FAQ.
- Checklist de verificacion tecnica y UX pre-merge para el primer lote de implementacion.

### Backlog tecnico inicial (priorizado)
1. Modelar estructura objetivo de la home por secciones y CTA repetidos.
2. Definir tokens iniciales (color, tipografia, espaciado, estados de CTA) y su punto de integracion.
3. Especificar bloque combinado Actividades + Calendario vivo con fuente de datos y fallback.
4. Diseñar bloque Comunidad real (vivencias + testimonios) con criterios de contenido minimo.
5. Ajustar bloques Noticias + FAQ para lectura rapida y cierre de objeciones.
6. Diseñar Cierre con CTA principal "Unirme por WhatsApp" y tracking basico de conversion.
7. Definir smoke checklist responsive/performance/accesibilidad para la fase de implementacion.

### Dependencias
- Disponibilidad y validacion de copy final por seccion.
- Confirmacion del enlace oficial de WhatsApp y parametros de tracking.
- Disponibilidad de contenido real para calendario, vivencias/testimonios y noticias.
- Estructura actual de componentes Astro y colecciones CMS vigente para mapear cambios.

## Dependencias
- Internas: repositorio `pastoral-web`, convenciones de contenido y revisiones editoriales.
- Externas: Vercel (hosting), dominio `pastoralunsa.org` (Namecheap), acceso al flujo Git para CMS.

## Riesgos de producto
- [x] Riesgo: desactualizacion editorial por falta de responsables claros. Mitigacion: roles editor/revisor/admin y calendario.
- [x] Riesgo: sobrecarga visual o de rendimiento por contenido multimedia no optimizado. Mitigacion: guias de imagen y revision previa.
