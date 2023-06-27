import React from 'react'

import { State } from '../application/state'
import { Observer } from '../domain/observer/observer'
import { StateManager } from '../application/state-manager'
import { injectable } from 'inversify'

@injectable()
export class ReactStateManager implements StateManager {
  private _state: State = new State()
  private readonly observers: Observer[] = []

  get state(): State {
    return this._state
  }

  set state(value: State) {
    this._state = value
    this.notifyAll()
  }

  patch(state: Partial<State>): void {
    this.state = { ...this.state, ...state }
  }

  notifyAll() {
    this.observers.forEach(observer => observer.notify())
  }

  register(observer: Observer) {
    this.observers.push(observer)
  }
}
