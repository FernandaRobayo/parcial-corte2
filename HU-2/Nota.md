# Historia de Usuario - Registro de datos del cliente para la reserva

## 1. Identificador y Título  
**HU-06: Registro de datos del cliente para la reserva**

---

## 2. Descripción  
**Como** usuario del sistema de reservas  
**Quiero** ingresar y guardar mis datos personales como cédula, nombre, contacto, email y teléfono  
**Para que** el sistema tenga mi información registrada y pueda asociarla correctamente con mi reserva

---

## 3. Criterios de Aceptación  
- El formulario permite ingresar cédula, nombre, contacto, email y teléfono.  
- El sistema valida que los campos obligatorios (cédula y nombre) estén completos antes de guardar.  
- Al hacer clic en "Guardar Cliente", los datos se almacenan localmente en la lista `clientes`.  
- El formulario se limpia tras guardar exitosamente los datos.  
- El diseño es claro, centrado y se adapta a dispositivos móviles.  

---

## 4. Definición de Listo (DoR - Definition of Ready)  
- Se ha definido qué campos son obligatorios y cuáles opcionales.  
- Existe una estructura de datos clara para representar al cliente.  
- Se dispone del diseño visual del formulario aprobado.  
- Se identifican los eventos que disparan la lógica de guardado.

---

## 5. Definición de Hecho (DoD - Definition of Done)  
- El formulario está implementado con campos de entrada funcionales.  
- La validación básica (cédula y nombre requeridos) está operativa.  
- El botón guarda los datos correctamente en el arreglo `clientes`.  
- El formulario se reinicia tras el guardado exitoso.  
- El componente ha sido probado en varios tamaños de pantalla.  
- Se ha revisado que el estilo visual coincide con la guía de diseño establecida.

---

## 6. Prioridad y Estimación  
- **Prioridad:** Alta (es el primer paso del proceso de reserva)  
- **Estimación:** 3 puntos en Scrum
