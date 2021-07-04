import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReduxState } from './types'
import { getIsDropdownMenuVisible } from './selectors'
import { toggleDropdownMenuVisibility } from './actions'

type ReduxProps = {
  isDropdownMenuVisible: boolean,
}

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void,
}

type Props = {
  text: string,
  icon: string,
}

const MenuLink = ({ icon, text, toggleDropdownMenuVisibility }: Props & ReduxProps & DispatchProps) => (
  <>
  {
      icon !== "exit_to_app" && 
      <div className="menu-link-item" onClick={toggleDropdownMenuVisibility}>
        <i className="material-icons">
          {icon}
        </i>

        <span>{text}</span>
      </div>
  }
  {
      icon === "exit_to_app" && 
      <div className="menu-link-item log-out" onClick={toggleDropdownMenuVisibility}>
        <i className="material-icons">
          {icon}
        </i>

        <span>{text}</span>
      </div>
  }
  
  </>
)
export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isDropdownMenuVisible: getIsDropdownMenuVisible,
  }),
  { toggleDropdownMenuVisibility }
)(MenuLink)

