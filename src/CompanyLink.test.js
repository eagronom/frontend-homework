import { shallow } from 'enzyme'
import CompanyLink from './CompanyLink'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('<CompanyLink />', () => {
  it('renders link', () => {
    expect(shallow(
      <Provider store={store}>
        <CompanyLink id={1} name="Dummy company" />
      </Provider>
    )).toMatchSnapshot()
  })
})
