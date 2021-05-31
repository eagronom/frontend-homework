import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReduxState } from './types'
import { getIsDropdownMenuVisible } from './selectors'
import { toggleDropdownMenuVisibility } from './actions'

import DropdownMenu from './DropdownMenu'

type ReduxProps = {
  isDropdownMenuVisible: boolean,
}

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void,
}

export const DropdownLink = ({ isDropdownMenuVisible, toggleDropdownMenuVisibility }: ReduxProps & DispatchProps) => (
  <>
    <div className="nav__link" onClick={toggleDropdownMenuVisibility} data-test-nav-link>
      <div className="nav__link-text-wrapper">
        <div className="nav__link-text">
          Elon Musk
        </div>

        <div className="nav__link-subtext">
          Viljatootja AS
        </div>
      </div>

      <i className="material-icons-outlined nav__link-icon">
        settings
      </i>
    </div>

    {isDropdownMenuVisible && <DropdownMenu />}
  </>
)


export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isDropdownMenuVisible: getIsDropdownMenuVisible,
  }),
  { toggleDropdownMenuVisibility }
)(DropdownLink)
