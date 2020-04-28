import axios from 'axios';

const KEY = 'AIzaSyBdBvc5ap3GjIqPDIRAa4ggHWoOYoprPnY';
 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3", 
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});