# 03 - Registro de skills y agentes

Catalogo operativo de skills/agentes disponibles para el proyecto.

| Skill/Agente | Trigger (cuando usar) | Proposito | Input esperado | Output esperado | Cuando NO usar |
|---|---|---|---|---|---|
| `sdd-init` | Se quiere inicializar contexto SDD en el repo | Detectar stack y preparar base SDD | Contexto del repo | Estructura y configuracion SDD inicial | Si SDD ya esta inicializado y vigente |
| `sdd-propose` | Hay una idea/cambio sin definicion formal | Delimitar intencion, alcance y enfoque | Problema, contexto, restricciones | Propuesta de cambio aprobable | Si ya hay propuesta validada |
| `sdd-spec` | Propuesta aprobada y se requiere requisitos | Definir requerimientos y escenarios verificables | Propuesta + alcance | Spec con criterios claros | Si el cambio no requiere formalizacion |
| `sdd-design` | Existe spec y falta diseno tecnico | Traducir spec a arquitectura/decisiones | Spec + stack + limites tecnicos | Diseno tecnico implementable | Si el cambio es menor y sin impacto arquitectonico |
| `sdd-tasks` | Hay diseno y se necesita plan de ejecucion | Descomponer implementacion en checklist | Spec + diseno | Lista de tareas ejecutables | Si ya existe backlog tecnico detallado |
| `sdd-apply` | Hay tareas listas para implementar | Implementar codigo alineado con spec/diseno | Tareas asignadas + contexto tecnico | Cambios de codigo + avance | Si faltan spec/diseno/tareas |
| `sdd-verify` | Implementacion terminada o parcial | Verificar cumplimiento contra artefactos SDD | Cambios + spec/diseno/tareas | Informe de cumplimiento/gaps | Si la implementacion aun no esta estable |
| `sdd-archive` | Cambio completado y validado | Consolidar specs y archivar ciclo | Artefactos finales SDD | Cierre y trazabilidad del cambio | Si aun hay tareas abiertas |
| `skill-registry` | Se agregan/quitan skills o cambia el flujo | Mantener inventario real de skills | Estado actual de skills/proyecto | Registro de skills actualizado | Si no hubo cambios en skills |
| `astro` | Trabajo en proyecto Astro | Aplicar practicas y comandos Astro | Objetivo tecnico en Astro | Implementacion/configuracion Astro correcta | Si el trabajo no toca Astro |
| `astro-animations` | Se requieren animaciones en sitio Astro | Implementar motion performante y accesible | Componentes/UX a animar | Animaciones coherentes y optimizadas | Si la tarea no involucra animacion |
| `web-design-guidelines` | Auditoria UI/UX/accesibilidad | Revisar cumplimiento de buenas practicas web | Pantallas/componentes a evaluar | Hallazgos y recomendaciones accionables | Si no hay evaluacion de interfaz |
| `ui-animation` | Se pide crear/revisar motion de UI | Diseñar o depurar interacciones animadas | Objetivo visual/interactivo | Implementacion de animacion | Si no aplica animacion |
| `landing-page-design` | Mejora de conversion o estructura landing | Optimizar jerarquia, CTA y layout | Objetivos de negocio + contenido | Recomendaciones/estructura de landing | Si el trabajo no es de landing |
| `issue-creation` | Se necesita crear issue formal | Aplicar flujo issue-first | Contexto del cambio/incidente | Issue bien estructurado | Si el ticket ya existe |
| `branch-pr` | Preparar y abrir PR | Estandarizar preparacion y creacion de PR | Rama/cambios listos | PR con resumen y formato correcto | Si no hay cambios para revisar |

## Reglas de mantenimiento

- Registrar solo skills realmente instalados/disponibles.
- Priorizar descripciones accionables, no teoricas.
- Evitar duplicidad: un skill, un caso principal de uso.
- Revisar este archivo cada vez que se agrega o elimina un skill.

## Nota operativa

- Este registro refleja las skills disponibles en el entorno actual del agente y debe revisarse ante cada cambio de instalacion.
