export const randomId = () => Math.floor(Math.random() * 100);
const bookArray = [{
  id: randomId(),
  title: 'Cage the specter',
  category: 'Horror',
}, {
  id: randomId(),
  title: '2246: Blight',
  category: 'Sci-Fi',
}, {
  id: randomId(),
  title: 'The Children of Men',
  category: 'History',
}, {
  id: randomId(),
  title: 'Secret of the Mute Mermaid',
  category: 'History',
}, {
  id: randomId(),
  title: 'Death of the Giant Beast',
  category: 'Horror',
}, ];

export const initialState = {
  books: bookArray,
};