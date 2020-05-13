import { ActionsObservable, StateObservable } from 'redux-observable';
import { IAction } from '../actionTypes';
import { State } from '../reducers';

export type ActionsObservable = ActionsObservable<IAction>;

export type StateObservable = StateObservable<State>;
