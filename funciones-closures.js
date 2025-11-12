//Ejercicio: Crea un sistema de gestión de tareas (todo list) usando closures para mantener el estado privado. Implementa 
// funciones para agregar tareas, marcar como completadas, filtrar por estado, y obtener estadísticas. 
// Usa arrow functions donde sea apropiado y parámetros avanzados.


function administradorTareas() {
  // Estado privado mantenido por el closure
  let tareas = [];
  let Id = 1;

  // Arrow function para construir la nueva tarea
  const creaTarea = (descripcion, prioridad = 'media') => ({
    id: Id++,
    descripcion,
    completada: false,
    prioridad: prioridad.toLowerCase() // Asegura minúsculas
  });

  return {
    // 1. Agregar Tarea (Usa parámetros rest para tags)
    agregarTarea: (descripcion, prioridad, ...tags) => {
      const nuevaTarea = creaTarea(descripcion, prioridad);
      
      // Adjunta las etiquetas si existen
      if (tags.length > 0) {
        nuevaTarea.tags = tags;
      }
      
      tareas.push(nuevaTarea);
      console.log(`Tarea #${nuevaTarea.id} agregada: "${descripcion}"`);
      return nuevaTarea;
    },

    // 2. Marcar como completada (Arrow function)
    marcarCompletada: (id) => {
      const tarea = tareas.find(t => t.id === id);
      if (tarea) {
        tarea.completada = true;
        console.log(`Tarea #${id} marcada como completada.`);
        return true;
      }
      console.log(`Tarea con ID ${id} no encontrada.`);
      return false;
    },

    // 3. Obtener todas las tareas (Arrow function)
    obtenerTareas: () => {
      // Usa el operador spread "crea copia de ...tareas"para devolver una copia para evitar modificación externa
      return [...tareas]; 
    },

    // 4. Filtrar tareas (Arrow function con operador ternario)
    filtrarTareas: (estado = 'todas') => {
      estado = estado.toLowerCase();
      
      return tareas.filter(t => 
        estado === 'completadas' ? t.completada :
        estado === 'pendientes' ? !t.completada :
        true // 'todas'
      );
    },

    // 5. Obtener estadísticas (Arrow function con reduce)
    obtenerEstadisticas: () => {
      const total = tareas.length;
      const completadas = tareas.filter(t => t.completada).length;
      const pendientes = total - completadas;

      return {
        total,
        completadas,
        pendientes,
        porcentajeCompletado: total > 0 ? ((completadas / total) * 100).toFixed(1) + '%' : '0%'
      };
    },
    
    // 6. Remover tarea (Arrow function)
    removerTarea: (id) => {
      const initialLength = tareas.length;
      tareas = tareas.filter(t => t.id !== id);
      if (tareas.length < initialLength) {
          console.log(`🗑️ Tarea con ID ${id} eliminada.`);
          return true;
      }
      console.log(` Tarea con ID ${id} no encontrada para eliminar.`);
      return false;
    }
  };
}

// === DEMOSTRACIÓN DE USO ===
console.log("\n=== Inicializando Gestor de Tareas ===");
const gestor = administradorTareas();

// Uso de agregarTarea con parámetros rest (tags) y por defecto
gestor.agregarTarea("Estudiar closures y funciones factory", "alta", "js", "closure");
gestor.agregarTarea("Comprar comestibles", "baja");
gestor.agregarTarea("Cumplir tarea", "alta", "code");
gestor.agregarTarea("Preparar presentación", "media", "slides");

// Marcar una tarea como completada
gestor.marcarCompletada(1);
gestor.marcarCompletada(3);

console.log("\n--- Tareas Pendientes ---");
const pendientes = gestor.filtrarTareas("pendientes");
console.log(pendientes);

console.log("\n--- Tareas Completadas ---");
const completadas = gestor.filtrarTareas("completadas");
console.log(completadas);

console.log("\n--- Estadísticas ---");
console.log(gestor.obtenerEstadisticas());

gestor.removerTarea(2);

console.log("\n--- Tareas Totales después de remover ---");
console.log(gestor.obtenerTareas());