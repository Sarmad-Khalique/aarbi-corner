import { withRouter } from "react-router-dom";
import {
  ContentSubtitle,
  ContentTitle,
  MenuItemBackground,
  MenuItemContainer,
  ContentContainer,
} from "./MenuItem.styles";

const MenuItem = ({ title, imageURL, size, linkUrl, history, match }) => {
  return (
    <MenuItemContainer
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      style={size ? { height: "18rem" } : null}
    >
      <MenuItemBackground imageUrl={imageURL} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
