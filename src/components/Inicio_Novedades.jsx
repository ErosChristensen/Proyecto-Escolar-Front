import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Inicio_Novedades() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/noticias");
        if (!res.ok) throw new Error("Error al cargar noticias");
        const data = await res.json();
        // Ordenamos por fecha descendente y tomamos las 3 últimas
        const ultimasTres = (data.items || [])
          .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
          .slice(0, 3);
        setNoticias(ultimasTres);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  if (loading) {
    return <p className="text-center py-20">Cargando noticias...</p>;
  }

  if (error) {
    return <p className="text-center py-20 text-red-600">{error}</p>;
  }
function formatearFecha(fechaStr) {
  const fecha = new Date(fechaStr);
  const dia = fecha.getDate().toString().padStart(2, "0");
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
  const anio = fecha.getFullYear();
  return `${dia}-${mes}-${anio}`;
}
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gray-50">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-12 uppercase text-gray-800">
        ÚLTIMAS NOVEDADES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {noticias.map((item) => (
          <Link
            key={item.id_noticias}
            to="/noticias"
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden block"
          >
            <img
              src={`http://localhost:3000/${item.imagen1}`}
              alt={item.titulo}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-orange-600 font-bold text-lg md:text-xl leading-snug">
                {item.titulo}
              </h3>
              <p className="mt-3 text-gray-600 font-medium text-sm sm:text-base">
              {formatearFecha(item.fecha)}              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <Link
          to="/noticias"
          className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
        >
          VER TODAS LAS NOTICIAS
        </Link>
      </div>
    </section>
  );
}

export default Inicio_Novedades;
