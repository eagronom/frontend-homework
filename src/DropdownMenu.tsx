import MenuLink from './MenuLink'
import Companies from './Companies'

const DropdownMenu = () => (
  <>
  <div className="dropdown-menu">
    <Companies />
    <hr className="dropdown-devide"/>
    <div className="menu-link">
      <MenuLink
        text="Get the mobile app"
        icon="phone_iphone"
      />

      <MenuLink
        text="Community"
        icon="people"
      />

      <MenuLink
        text="Knowledge base"
        icon="book"
      />
    </div>
    <hr className="dropdown-devide"/>
    <div>
      <MenuLink
        text="Settings"
        icon="settings"
      />

      <MenuLink
        text="Log out"
        icon="exit_to_app"
      />
    </div>
  </div>
  </>
)

export default DropdownMenu
