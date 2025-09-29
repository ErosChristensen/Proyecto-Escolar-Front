import { useEffect, useState } from "react";

// Hook personalizado para traer los datos de inicio desde el backend
export function useInicio() {
  // Estado que guardará los datos que vienen del JSON del backend
  const [inicioData, setInicioData] = useState(null);

  // Estado que indica si los datos todavía se están cargando
  const [loading, setLoading] = useState(true);

  // useEffect se ejecuta una sola vez cuando el componente que usa el hook se monta
  useEffect(() => {
    // Hacemos la petición al backend para obtener los datos de inicio
    fetch("http://localhost:3000/api/inicio") // Cambiar según tu URL de backend
      .then((res) => res.json()) // Convertimos la respuesta a JSON
      .then((data) => {
        setInicioData(data); // Guardamos los datos en el estado
        setLoading(false);   // Marcamos que ya terminó de cargar
      })
      .catch((err) => {
        // Si hay un error, lo mostramos en la consola y paramos la carga
        console.error("Error cargando datos de inicio:", err);
        setLoading(false);
      });
  }, []); // El array vacío [] hace que esto solo se ejecute una vez al montar

  // Retornamos los datos y el estado de carga para usar en los componentes
  return { inicioData, loading };
}
