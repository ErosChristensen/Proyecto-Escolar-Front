import { useEffect, useState } from "react"; 
// importamos dos hooks nativos de React:
// - useState: para declarar y manejar estados locales.
// - useEffect: para ejecutar efectos secundarios (como un fetch) cuando el componente se monta.

export function useHistoria() { 
  // Declaramos y exportamos un hook personalizado llamado "useHistoria".
  // Al exportarlo así puedes importarlo en cualquier componente: `import { useHistoria } from "./hooks/useHistoria"`

  const [historiaData, setHistoriaData] = useState(null);
  // historiaData = variable de estado que contendrá los datos traídos desde el backend.
  // setHistoriaData = función para actualizar esa variable.
  // Inicializamos en null porque al principio no tenemos datos.

  const [loading, setLoading] = useState(true);
  // loading = booleano que indica si la petición está en curso.
  // Inicializamos en true porque cuando se monta el componente empezamos asumiendo que "estamos cargando".

  useEffect(() => {
    // useEffect con un callback: el código dentro se ejecuta cuando el componente que use el hook se monta.
    // Ideal para hacer fetch de datos una vez al inicio.

    // Trae el JSON del backend
    fetch("http://localhost:3000/api/historia") // 🔹 Ajustá esta URL según tu backend (ruta API que sirva el JSON)
      .then((res) => res.json()) 
      // .then: cuando llega la respuesta (res), la transformamos a JSON.
      // Si el servidor no responde con JSON válido, esto lanzará un error y saltará al .catch.

      .then((data) => {
        setHistoriaData(data);
        // Guardamos los datos recibidos en el estado historiaData.
        setLoading(false);
        // Como ya llegaron los datos, marcamos loading = false.
      })

      .catch((err) => {
        console.error("Error cargando datos de historia:", err);
        // Si ocurre un error (red, endpoint inexistente, JSON inválido, CORS, etc.)
        // lo mostramos en consola para debugging.
        setLoading(false);
        // Aunque haya error, debemos quitar el "loading" para permitir renderizar mensajes de error en UI.
      });

  }, []); // <-- el array vacío significa: ejecutar este useEffect solo UNA vez (al montar)

  return { historiaData, loading };
  // Devolvemos un objeto con:
  // - historiaData: los datos traídos (o null si no hay)
  // - loading: true/false para que el componente que use el hook sepa si mostrar spinner/mensaje
}
