import React from 'react'

import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/MenuItem";

import { DirectoryItemsContainer } from "./DirectoryItems.styles";

const DirectoryItems = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <DirectoryItemsContainer>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </DirectoryItemsContainer>
  );
};

export default DirectoryItems;
