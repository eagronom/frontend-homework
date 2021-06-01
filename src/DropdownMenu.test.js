import { shallow } from 'enzyme'
import DropdownMenu from './DropdownMenu'

describe('<DropdownMenu />', () => {
  it('renders menu', () => {
    expect(shallow(<DropdownMenu />)).toMatchSnapshot()
  })
})
