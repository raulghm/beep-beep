import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  todos: string[]
  count: number
}

let initialState: State = {
  todos: ['Item 1'],
  count: 0
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos = [...state.todos, action.payload]
    },
    setCounter(state) {
      state.count = ++state.count
    }
  }
})

export const { setCounter, addTodo } = uiSlice.actions

export default uiSlice.reducer
