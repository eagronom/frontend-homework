import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReduxState, Company } from './types'
import { getCompanies } from './selectors'

import CompanyLink from './CompanyLink'

type ReduxProps = {
  companies: Array<Company>,
}

export const Companies = ({ companies }: ReduxProps) => (
  <>
    <div>Your companies</div>

    {companies.map((company) => <CompanyLink key={company.id} {...company} />)}
  </>
)

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    companies: getCompanies,
  })
)(Companies)
