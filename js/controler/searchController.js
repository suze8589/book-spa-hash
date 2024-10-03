import searchService from '/js/service/searchService.js';
import searchView from '/js/view/searchView.js';

async function init() {
    try {
        let searchResults = await searchService.getSearchResults();
        
        searchResults = Object.values(searchResults);
        console.log(Array.isArray(searchResults));
        console.log("HELLO", searchResults);

        searchView.render(searchResults.getSearchResults);

    } catch (error) {
        console.error('Error initializing search:', error);
    }
}

export default { init };
