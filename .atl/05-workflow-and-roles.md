# Workflow y Roles (1 página)

## Objetivo
Trabajar de forma ordenada, trazable y rapida entre equipo pastoral, desarrollo y agentes AI.

## Flujo mínimo (siempre)
1. Crear/actualizar issue con alcance claro.
2. Crear rama: `feature/<tema>` o `fix/<tema>`.
3. Implementar cambios pequenos y verificables.
4. Verificar: build/checklist de calidad y smoke test visual.
5. Abrir PR con contexto y evidencia.
6. Revisar, corregir, mergear.
7. Registrar cierre en seguimiento diario.

## Roles
- Owner
  - Prioriza, define alcance y decide bloqueos funcionales.
- Editor pastoral
  - Redacta y mantiene contenido institucional (eventos, blog, galeria).
- Revisor editorial
  - Valida tono, coherencia institucional y estado de publicacion.
- Implementador
  - Ejecuta cambios tecnicos y mantiene commits claros.
- Revisor
  - Valida calidad técnica, seguridad y coherencia.
- QA/Docs
  - Verifica criterios de aceptación y documentación mínima.

## Reglas no negociables
- No hay trabajo sin issue.
- No hay merge sin PR.
- No hay "done" sin verificacion minima.
- Todo cambio relevante se documenta en seguimiento diario.
- Cambios grandes se dividen en tareas pequeñas.

## Definición de Done (DoD)
- Requisito implementado.
- Validaciones basicas OK (build/test/lint si aplica).
- PR revisado y aprobado.
- Documentacion/seguimiento actualizado.
- Sin bloqueos abiertos críticos.

## Convención rápida de commits
- `feat: ...` nueva funcionalidad
- `fix: ...` corrección
- `docs: ...` documentación
- `refactor: ...` mejora interna
- `chore: ...` tareas técnicas

## Nota de separacion de productos
- Este repo (`pastoral-web`) cubre el Producto 1 (landing institucional en Astro).
- El Producto 2 (sistema interno Angular + Quarkus) se gestiona en repositorio y flujo separado.

## Checklist de PR (rápido)
- [ ] Alcance del issue cubierto
- [ ] Cambios acotados y entendibles
- [ ] Riesgos identificados
- [ ] Evidencia de verificación adjunta
- [ ] Notas de despliegue (si aplica)
