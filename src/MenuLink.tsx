type Props = {
  text: string,
  icon: string,
}

const MenuLink = ({ icon, text }: Props) => (
  <div>
    <i className="material-icons">
      {icon}
    </i>

    {text}
  </div>
)

export default MenuLink
