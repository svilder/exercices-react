import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID uiDe48jocLZPZHLb7JXKoHzfRNB2CAVDMGOc3_jcGNc'
  }
});