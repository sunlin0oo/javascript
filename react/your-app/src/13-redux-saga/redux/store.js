import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import createSagaMidlleWare from 'redux-saga';
import watchSaga from "./saga";
// 需要通过createSagaMidlleWare 创造出一个Saga对象
const SagaMidlleWare = createSagaMidlleWare()
const store = createStore(reducer, applyMiddleware(SagaMidlleWare));


SagaMidlleWare.run(watchSaga) // saga任务
export default store;