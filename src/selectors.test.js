import {
  getIsDropdownMenuVisible,
  isCompanySelected,
  getCompanies,
} from './selectors'

describe('getIsDropdownMenuVisible()', () => {
  const state = { isDropdownMenuVisible: true }

  it('returns value from state', () => {
    expect(getIsDropdownMenuVisible(state)).toBe(true)
  })
})

describe('isCompanySelected()', () => {
  const state = { selectedCompanyId: 1 }

  it('returns true when given company id matches selectedCompanyId', () => {
    expect(isCompanySelected(state, { company: { id: 1 } })).toBe(true)
  })

  it('returns false when given company id differs from selectedCompanyId', () => {
    expect(isCompanySelected(state, { company: { id: 2 } })).toBe(false)
  })
})

describe('getCompanies()', () => {
  const state = { companies: [{ id:1, name: 'Dummy company' }] }

  it('returns value from state', () => {
    expect(getCompanies(state)).toEqual([{ id: 1, name: 'Dummy company' }])
  })
})
