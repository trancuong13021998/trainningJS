import { createStore} from 'redux';
import {sort , status} from './actions/index.js';
import myReducer from './reducers/index.js';

const store = createStore(myReducer);
console.log('Default :' , store.getState());
// thuc hien con viec thay doi state 


store.dispatch(status());
console.log('TOGGLE_STATUS',store.getState());

// thuc hien sap xep co name tu a - z
store.dispatch(sort({
		by :'name',
		value :-1
	}));
console.log('SORT : ' ,store.getState());



