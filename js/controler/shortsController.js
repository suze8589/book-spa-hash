import shortsService from '/js/service/shortsServices.js';
import shortsView from '/js/view/shortsView.js';

async function init() {
  try {
      let shorts = await shortsService.getShorts();
      
      shorts = Object.values(shorts);
      console.log(Array.isArray(shorts));
      console.log("HELLO here are some shorts", shorts);

      shortsView.render(shorts);

  } catch (error) {
      console.error('Error initializing books:', error);
  }
}

export default { init };


