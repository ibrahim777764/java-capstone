export default class TVMazeAPI {
    
  constructor(){
    this.baseUrl = "https://api.tvmaze.com";
  }

  async getShows(page = 1){
    const response = await fetch(`${this.baseUrl}/shows?page=${page}`, {
        method: 'GET',
    });

    const result = await response.json();
    return result;
  }
}