import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: 'No Scrubbs', duration: '2:39' },
    { title: 'Babie girl', duration: '2:45' },
    { title: 'Yeah Yeah Yeah', duration: '4:02' },
    { title: 'Ok you you', duration: '1:42' }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})