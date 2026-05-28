# 02 - Tracking diario

Bitacora operacional para trabajo diario. Mantener una entrada por fecha.

## Plantilla

## Fecha: YYYY-MM-DD

### Tareas cerradas
- [ ] Item completado

### En curso
- [ ] Item en progreso (owner, hito/entregable)

### Bloqueadas
- [ ] Item bloqueado (causa, accion de desbloqueo)

### Proximas
- [ ] Siguiente tarea priorizada

### Decisiones del dia
- Decision:
- Motivo:
- Impacto:

### Notas cortas
- Riesgos observados:
- Dependencias nuevas:

### Politica de ejecucion
- Sin estimaciones en dias. Seguimiento por hitos y entregables.

---

## Fecha: 2026-05-28

### Tareas cerradas
- [x] Se oficializo en PRD la decision narrativa Variante B (confianza primero) para la home.
- [x] Se definio y documento el orden de secciones aprobado para el siguiente paso de implementacion visual.
- [x] Se creo una guia inicial de direccion de diseno basada en `src/assets/logo_pastoral.png`.
- [x] Se cerro Fase 0 (alineacion y DoD de fase) con entregables documentados en `.atl/00-project-context.md`, `.atl/04-technical-baseline.md` y `.atl/05-workflow-and-roles.md`.
- [x] Se cerro Fase 1 (narrativa final + orden secciones + guia visual/tokens + checklist UX) con entregables documentados en `.atl/01-prd-context.md` y `.atl/06-design-direction.md`.

### En curso
- [ ] Arrancar Fase 2: elaborar plan tecnico de implementacion (backlog priorizado, dependencias y mapa de cambios).

### Bloqueadas
- [ ] Sin bloqueos tecnicos al cierre de la jornada.

### Proximas
- [ ] Dejar aprobado el plan tecnico de Fase 2 para iniciar implementacion por hitos.

### Decisiones del dia
- Decision: usar Variante B como narrativa oficial del landing (confianza antes de cierre).
- Motivo: en contexto pastoral universitario la afinidad y prueba social aumentan intencion antes del contacto.
- Impacto: el rediseno prioriza pertenencia, evidencia comunitaria y CTA repetido en puntos de alta atencion.
- Decision: ejecutar sin cronogramas en dias; gestionar avance solo por hitos y entregables.
- Motivo: modo ejecucion full AI con ciclos rapidos por resultado verificable.
- Impacto: tracking y planificacion pasan a formato de entregables cerrados por fase.

### Notas cortas
- Riesgos observados: si no se activa `href` real en CTA WhatsApp, no hay conversion trazable.
- Dependencias nuevas: alinear copy del Hero/Activities/ContactUs con la nueva secuencia narrativa.

### Arranque Fase 2 (siguiente paso inmediato)

#### Objetivo de fase
- Definir un plan tecnico ejecutable para implementar el rediseno de home con narrativa final y CTA principal "Unirme por WhatsApp".

#### Entregables esperados
- Backlog tecnico inicial priorizado por hitos.
- Mapa de componentes/archivos a tocar en la home.
- Definicion de dependencias de contenido y tracking.
- Checklist de validacion tecnica y UX previo a implementacion.

#### Backlog tecnico inicial (priorizado)
1. Estructura final de home: Hero > Actividades + Calendario vivo > Quienes somos > Comunidad real (vivencias + testimonios) > Noticias + FAQ > Cierre.
2. Definir tokens visuales minimos para ejecucion (color, tipografia, espaciado, estados CTA).
3. Especificar bloque Actividades + Calendario vivo (data, layout, fallback).
4. Especificar bloque Comunidad real (fuentes de vivencias/testimonios y criterio de seleccion).
5. Ajustar bloque Noticias + FAQ para prioridad informativa y objeciones frecuentes.
6. Definir cierre de conversion con CTA "Unirme por WhatsApp" + tracking.
7. Preparar checklist de smoke test responsive, accesibilidad y performance.

#### Dependencias
- Link final de WhatsApp y estrategia minima de medicion.
- Contenido actualizado para calendario, comunidad real y noticias.
- Confirmacion de copy final por bloque.
- Estructura de componentes Astro vigente para mapear cambios sin regresiones.

## Fecha: 2026-05-27

### Tareas cerradas
- [x] Se inicializo el repositorio local con `git init` y remoto `origin` apuntando a GitHub.
- [x] Se completo la carpeta `.atl` con contexto real del proyecto basado en `02-DOCU`.

### En curso
- [ ] Validar con el owner las metricas finales de exito para Producto 1 (fuente de analytics).

### Bloqueadas
- [ ] Sin bloqueos tecnicos. Pendiente confirmacion operativa de SLA editorial.

### Proximas
- [ ] Revisar y ajustar contenido de la landing en base a calendario pastoral vigente.

### Decisiones del dia
- Decision: tomar Producto 1 (landing Astro) como referencia principal de PRD para este repo.
- Motivo: `pastoral-web` corresponde al producto informativo ya desplegado.
- Impacto: foco claro del repositorio y separacion explicita respecto al Producto 2.

### Notas cortas
- Riesgos observados: posible desalineacion entre contenido publicado y cronograma real si no hay flujo editorial constante.
- Dependencias nuevas: acceso operativo a Decap CMS y aprobacion de roles editoriales.

## Ejemplo breve

## Fecha: 2026-05-26

### Tareas cerradas
- [x] Se definio estructura base .atl agnostica de framework.

### En curso
- [ ] Completar contexto inicial del proyecto con stakeholders reales.

### Bloqueadas
- [ ] Confirmar metrica de adopcion con equipo de producto.

### Proximas
- [ ] Alinear criterios de aceptacion para primer milestone.

### Decisiones del dia
- Decision: Usar una base unica reutilizable para todos los repos.
- Motivo: Reducir setup y evitar documentos duplicados.
- Impacto: Inicio mas rapido y mejor consistencia.
