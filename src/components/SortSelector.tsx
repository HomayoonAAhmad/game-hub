import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>relavance</MenuItem>
        <MenuItem>date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>release date</MenuItem>
        <MenuItem>popularity</MenuItem>
        <MenuItem>average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
