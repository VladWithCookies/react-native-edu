import * as types from './types';

const initialState = {
  all: [
    {
      name: 'Long-eared owl',
      description: 'Some description',
      image: 'https://media.mnn.com/assets/images/2014/02/Long-Eared-Owls-Tree-Branch.jpg.838x0_q80.jpg',
    },
    {
      name: 'Barn owl',
      description: 'Some description',
      image: 'https://media.mnn.com/assets/images/2014/02/Barn-Owl-White-Golde-Speckled-Blue-Sky.jpg.838x0_q80.jpg',
    },
    {
      name: 'Eastern screech owl',
      description: 'Some description',
      image: 'https://media.mnn.com/assets/images/2017/01/Eastern-Screech-Owl-Hollow-Tree-Stump.jpg.838x0_q80.jpg',
    },
  ],
  openedOwl: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
    case types.SHOW_OWL:
      return { ...state, openedOwl: action.owlName };
    case types.CLOSE_OWL:
      return { ...state, openedOwl: null };
		default:
			return state
	}
};

export default reducer;
