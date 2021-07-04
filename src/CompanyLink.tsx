import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Company, ReduxState } from './types'
import { getSelectedCompanyID } from './selectors'
import { setSelectedCompanyId } from './actions'
import { toggleDropdownMenuVisibility } from './actions'

type ReduxProps = {
  selectedCompanyId: number | null,
}

type DispatchProps = {
  setSelectedCompanyId: (id: number) => void,
  toggleDropdownMenuVisibility: () => void,
}

const CompanyLink = ({selectedCompanyId, name, id, setSelectedCompanyId, toggleDropdownMenuVisibility}: ReduxProps & Company & DispatchProps) => (
  <>
  
  {
    selectedCompanyId !== id &&
    <div className="company-item" onClick={()=>{setSelectedCompanyId(id); toggleDropdownMenuVisibility()}}>
      <span>{name}</span>
    </div>
  }
  {
    selectedCompanyId === id &&
    <div className="company-item selected-company" onClick={()=>{setSelectedCompanyId(id); toggleDropdownMenuVisibility()}}>
      <span>{name}</span>
      <i className="material-icons">
        check
      </i>
    </div>
  }
  </>
)

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    selectedCompanyId: getSelectedCompanyID
  }),
  { setSelectedCompanyId, toggleDropdownMenuVisibility }
)(CompanyLink)

