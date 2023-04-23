import React, { useState, useEffect, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Card, List, ListItemButton } from '@mui/material';

const CustomListItemButton = styled(ListItemButton)(({ theme, isSelected }) => ({
  backgroundColor: isSelected ? 'green' : 'red',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: isSelected ? 'green' : 'lightgray',
  },
  transition: 'all 0.2s ease-in-out',
  height: '50px',
}));

const CustomList = styled(List)({
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
});

const CustomCard = styled(Card)({
  margin: '0 auto',
  marginTop:'100px',
  borderRadius: '10px',
  width: '30%',
  
});

const SingleListItem = memo(({ index, isSelected, onClickHandler, text }) => {
  const handleClick = useCallback(() => {
    onClickHandler(index);
  }, [onClickHandler, index]);

  return (
    <CustomListItemButton isSelected={isSelected} onClick={handleClick}>
      {text}
    </CustomListItemButton>
  );
});

SingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const ListComponent = memo(({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null); 
  }, [items]);

  const handleClick = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  return (
    <CustomCard>
      <CustomList>
        {items.map((item, index) => (
          <SingleListItem
            key={index}
            onClickHandler={handleClick}
            text={item.text}
            index={index}
            isSelected={index === selectedIndex}
          />
        ))}
      </CustomList>
    </CustomCard>
  );
});

ListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

ListComponent.defaultProps = {
  items:[{ text:'List item 1'},
  {text: 'List item 2'},
  {text: 'List item 3'},
  {text: 'List item 4'},
  {text: 'List item 5'},
  {text: 'List item 6'}], 
};

export default ListComponent;
