import { Session } from '../components/global/InterfacesTS/session.interface'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

export interface ReceiveCurrentUserAction {
 type: typeof RECEIVE_CURRENT_USER
 user: Session
}

export interface LogoutCurrentUserAction {
 type: typeof LOGOUT_CURRENT_USER
}

export type SessionActionTypes =
 | ReceiveCurrentUserAction
 | LogoutCurrentUserAction

export type AppActions = SessionActionTypes
