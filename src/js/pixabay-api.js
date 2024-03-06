import axios from 'axios';
export async function getImagesFromPixabay(query, perPage, page) {
  const KEY = '42589869-a6a3b8d1c8a23a9a4a19ea254';
  const BASE_URL = 'https://pixabay.com/api/';
  const IMAGE_TYPE = 'photo';
  const ORIENTATION = 'horizontal';
  const SAFESEARCH = true;

  const LINK = `${BASE_URL}?key=${KEY}&q=${query}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&per_page=${perPage}&page=${page}`;

  const response = await axios.get(LINK);

  return response.data;
}