import TVMazeAPI from "./api_module.js";
import Renderer from "./renderer.js";
export default class TVShowApp {
//   tvMazeApi = null;
  
  static async initialize() {
    const tvMazeApi = new TVMazeAPI();
    const shows = await tvMazeApi.getShows(1);
    console.log(shows);
    Renderer.displayShows(shows);
  }
}