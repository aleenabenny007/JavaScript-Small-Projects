import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import bookmarksView from './views/bookmarksView.js';
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';

//following 2 imports for Polyfilling, Async/Await, etc.
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////        
console.log('TESTING...');

// The following is from parcel
// if (module.hot) {
//   module.hot.accept();
// }


const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    // 1) Loading recipe                   
    recipeView.renderSpinner();

    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe); // is same as ' const recipeView = new RecipeView(model.state.recipe) '


  } catch (err) {
    console.error(err);
    recipeView.renderError(`We could not find that recipe. Please try another one`);
  }
}

// subscriber of addHandlerSearch()
const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = searchView.getQuery();
    console.log(query);

    // 2) Load search results
    if (!query) return;
    await model.loadSearchResults(query);

    // 3) Render results
    resultsView.render(model.getSearchResultsPage(1));

    // 4) Render initial pagination
    paginationView.render(model.state.search);

  } catch (error) {
    console.error(error);
  }
};


const controlPagination = function (goToPage) {
  // 1) Render new results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render new pagination buttons
  paginationView.render(model.state.search);

};

const controlServings = function (newServings = model.state.recipe.servings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);  // if we render here the whole page will be reloaded and it is unnecessary
  recipeView.update(model.state.recipe);

};

const controlToggleBookmark = function () {
  // 1) Add or remove bookmarks
  (model.state.recipe.bookmarked) ? model.deleteBookmark(model.state.recipe) : model.addBookmark(model.state.recipe);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
}

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
}

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading Spinner
    addRecipeView.renderSpinner();    

    // Upload new recipe data   
    await model.uploadRecipe(newRecipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message 
    addRecipeView.renderMessage();

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close form window
    setTimeout(function() {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC) ;

  } catch (error) {
    console.error(error);
    addRecipeView.renderError(error.message);
  }
}

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmarks(controlToggleBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView._addHandlerUpload(controlAddRecipe);
};
init();



/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//                   NOTE :

// Project Architecture - eligibility criteria for a Perfect Architecture
//......................
// -- structure
// -- maintainability 
// -- expandability    


// MVC Architecture [ Model, View, Controller ]
//...................
//     


