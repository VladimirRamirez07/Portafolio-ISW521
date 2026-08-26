const estadoInicial = {
  usuario: null,
  carrito: [],
  notificaciones: 0,
};


function procesarInstruccion(estadoActual, instruccion) {
  switch (instruccion.tipo) {

    case "INICIAR_SESION":
      return { ...estadoActual, usuario: instruccion.dato };

    case "CERRAR_SESION":
      return { ...estadoActual, usuario: null, carrito: [] };

    case "AGREGAR_PRODUCTO":
      return {
        ...estadoActual,
        carrito: [...estadoActual.carrito, instruccion.dato],
        notificaciones: estadoActual.notificaciones + 1,
      };

    case "LIMPIAR_CARRITO":
      return { ...estadoActual, carrito: [], notificaciones: 0 };

    default:
      return estadoActual;
  }
}


function crearContenedorDeEstado(procesador, estadoBase) {
  let estadoGuardado = estadoBase;
  let listaDeEscuchas = [];

  return {

    leerEstado() {
      return estadoGuardado;
    },

    enviarInstruccion(instruccion) {
      estadoGuardado = procesador(estadoGuardado, instruccion);
      listaDeEscuchas.forEach((escucha) => escucha(estadoGuardado));
    },

    registrarEscucha(escucha) {
      listaDeEscuchas.push(escucha);
    },

  };
}


const contenedor = crearContenedorDeEstado(procesarInstruccion, estadoInicial);

contenedor.registrarEscucha((estado) => {
  console.log("\n--- El estado cambio ---");
  console.log("Usuario        :", estado.usuario ?? "Sin sesion");
  console.log("Carrito        :", estado.carrito.length === 0 ? "(vacio)" : estado.carrito.join(", "));
  console.log("Notificaciones :", estado.notificaciones);
});

console.log("=== Inicio ===");
console.log("Estado inicial:", contenedor.leerEstado());

contenedor.enviarInstruccion({ tipo: "INICIAR_SESION",  dato: "vladimir@utn.ac.cr"       });
contenedor.enviarInstruccion({ tipo: "AGREGAR_PRODUCTO", dato: "Libro: Clean Code"    });
contenedor.enviarInstruccion({ tipo: "AGREGAR_PRODUCTO", dato: "Curso: ¿como lidear con Bryan?"       });
contenedor.enviarInstruccion({ tipo: "LIMPIAR_CARRITO"                                });
contenedor.enviarInstruccion({ tipo: "CERRAR_SESION"                                  });

console.log("\n=== Fin ===");