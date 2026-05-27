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

## Dependencias
- Internas: repositorio `pastoral-web`, convenciones de contenido y revisiones editoriales.
- Externas: Vercel (hosting), dominio `pastoralunsa.org` (Namecheap), acceso al flujo Git para CMS.

## Riesgos de producto
- [x] Riesgo: desactualizacion editorial por falta de responsables claros. Mitigacion: roles editor/revisor/admin y calendario.
- [x] Riesgo: sobrecarga visual o de rendimiento por contenido multimedia no optimizado. Mitigacion: guias de imagen y revision previa.
