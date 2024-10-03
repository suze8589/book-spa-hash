import villainsService from '/js/service/villainsService.js';
import villainsView from '/js/view/villainsView.js';

async function init() {
  try {
      let villains = await villainsService.getVillains();
      
      villains = Object.values(villains);
      console.log(Array.isArray(villains));
      console.log("HELLO here are some villains", villains);

      villainsView.render(villains);

  } catch (error) {
      console.error('Error initializing villains:', error);
  }
}

export default { init };
