import Carpinteria from "../assets/icons/InicioTalleres1.png";
import Herreria from "../assets/icons/InicioTalleres2.png";
import Electricidad from "../assets/icons/InicioTalleres3.png";
import Hojalateria from "../assets/icons/InicioTalleres4.png";

 function Inicio_Talleres() {
  const talleres = [
    { nombre: "CARPINTERIA", img: Carpinteria },
    { nombre: "HERRERIA", img: Herreria },  
    { nombre: "ELECTRICIDAD", img: Electricidad },
    { nombre: "HOJALATERIA", img: Hojalateria },
  ];

  return (
    <section className="text-center py-40 bg-white">

      <h2 className="text-3xl md:text-4xl font-bold mb-4">TALLERES</h2>
      <p className="text-black font-medium mb-10">
        Desde primer año hasta tercer año conseguirán habilidades en
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        {talleres.map((taller, index) => (
          <div key={index} className="flex flex-col items-center">

            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-green-700">
              <img src={taller.img} alt={taller.nombre} className="w-12 h-12" />
            </div>  
            <p className="mt-3 font-bold">{taller.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Inicio_Talleres;    
