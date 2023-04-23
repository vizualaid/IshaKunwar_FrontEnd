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
