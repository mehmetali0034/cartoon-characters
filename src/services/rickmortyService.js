import axios from "axios";

export default class RickmortyService {
  async getEpisodes() {
    const response = await axios.get("https://rickandmortyapi.com/api/episode");
    return response.data;
  }
  async getEpisodesId(episodeId) {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/episode/${episodeId}`
    );
    return response.data;
  }
  async getCharactersDetail(characterUrl){
    const response = await axios.get(characterUrl);
    return response.data
  }
}
