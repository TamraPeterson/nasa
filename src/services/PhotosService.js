import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { photosApi } from "./AxiosService";

const baseQuery = {
  api_key: 'yMndrAKAU2n7ctT2f2LfgqdE2K2ufKosxWj9cMfr',
  date: ''
}

class PhotosService {
  async getPhoto() {
    const res = await photosApi.get('')
    logger.log('get photos', res.data);
    const photo = res.data
    AppState.photo = photo
  }

  async search(date) {
    baseQuery.date = date
    const res = await photosApi.get('', { params: baseQuery })
    logger.log(res.data, 'search')
    AppState.photo = res.data
  }
}

export const photosService = new PhotosService()