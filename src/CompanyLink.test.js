import { shallow } from 'enzyme'
import CompanyLink from './CompanyLink'

describe('<CompanyLink />', () => {
  it('renders link', () => {
    expect(shallow(<CompanyLink id={1} name="Dummy company" />)).toMatchSnapshot()
  })
})
