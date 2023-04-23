# Isha Kunwar
 # 1. Explain what the simple List component does ?

Ans - Renders a collection item that are clickable and are displayed in an organized manner.

# 2. What problems / warnings are there with code?

Ans - 

- Added a useCallback hook to memoize the handleClick function and prevent unnecessary re-renders.
- Moved the handleClick function inside the SingleListItem component for better encapsulation.
- Changed the onClick prop of the li element to use a callback function instead of calling the onClickHandler directly. This prevents the function from being called immediately on render.
- Added a cursor: 'pointer' style to the li element to indicate that it is clickable.
- Made the index and isSelected props required in the SingleListItem component since they are essential to rendering the component correctly.
- Added a unique key prop to the SingleListItem component to improve performance when rendering large lists.
- Set the default value of the items prop in the List component to an empty array instead of null.
- Changed the isSelected prop of the SingleListItem component to be based on whether the current index matches the selected index, instead of just passing selectedIndex directly.

# 3.
import React, { useState, useEffect, useCallback, memo } from 'react';
import PropTypes from 'prop-types';

const SingleListItem = memo(({ index, isSelected, onClickHandler, text }) => {
  const handleClick = useCallback(() => {
    onClickHandler(index);
  }, [onClickHandler, index]);

  return (
    <li
      style={{
        backgroundColor: isSelected ? 'green' : 'red',
        cursor: 'pointer', 
      }}
      onClick={handleClick} 
    >
      {text}
    </li>
  );
});

SingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const List = memo(({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null); 
  }, [items]);

  const handleClick = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          key={index}
          onClickHandler={handleClick}
          text={item.text}
          index={index}
          isSelected={index === selectedIndex}
        />
      ))}
    </ul>
  );
});

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

List.defaultProps = {
  items:[{ text:'List item 1'},
  {text: 'List item 2'},
  {text: 'List item 3'}], 
};

export default List;
