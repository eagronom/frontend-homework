import { shallow } from 'enzyme'
import MenuLink from './MenuLink'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('<MenuLink />', () => {
  it('renders link', () => {
    expect(shallow(
      <Provider store={store}>
        <MenuLink icon="phone" text="Call me" />
      </Provider>
    )).toMatchSnapshot()
  })
})
