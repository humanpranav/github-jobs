import { combineReducers, createStore } from "redux";
import themereducer from "./reducers/themereducer";
import job_reducer from "./reducers/job_reducer";
const allreducers = combineReducers({ themereducer, job_reducer });

const store = createStore(allreducers);
export default store;
