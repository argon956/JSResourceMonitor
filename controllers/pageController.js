// import { Viaje } from '../models/Viaje.js';
// import { Testimonial } from '../models/Testimonial.js';

const startPage = async (req, res) => {
  // Consultar 3 viajs del modelo viaje

  //   const promiseDB = [];

  //   promiseDB.push(Viaje.findAll({ limit: 3 }));
  //   promiseDB.push(Testimonial.findAll({ limit: 3 }));

  try {
    // TODO entrevista: Permite la ejecución de ambas promesas en paralelo...
    // const resultado = await Promise.all(promiseDB);
    // Mientras que si se usara la siguiente sintaxis, se ejecutarían en secuencia. En este caso, no tendría sentido ejecutarlos secuencialmente, porque una consulta no depende de la otra, y se estaría perdiendo tiempo de ejecución
    // const viajes = await Viaje.findAll({ limit: 3 });
    // const testimoniales = await Testimonial.findAll({ limit: 3 });
    res.render('start', {
      page: 'Home',
      clazz: 'home',
    });
  } catch (error) {
    console.log(error);
  }
};

export { startPage };
