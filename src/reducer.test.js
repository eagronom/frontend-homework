import * as actions from './actions'
import { isDropdownMenuVisible, selectedCompanyId } from './reducer'

const doesNotUpdateState = (reducer, initialState) => {
  it('does not update state on a random action', () => {
    expect(reducer(initialState, { type: 'random' })).toEqual(initialState)
  })
}

describe('isDropdownMenuVisible()', () => {
  it('toggles state on actions.toggleDropdownMenuVisibility', () => {
    expect(isDropdownMenuVisible(false, actions.toggleDropdownMenuVisibility())).toBe(true)
  })

  doesNotUpdateState(isDropdownMenuVisible, false)
})

describe('selectedCompanyId()', () => {
  it('sets given value to state on actions.setSelectedCompanyId', () => {
    expect(selectedCompanyId(null, actions.setSelectedCompanyId(123))).toBe(123)
  })

  doesNotUpdateState(selectedCompanyId, null)
})
