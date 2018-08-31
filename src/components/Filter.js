import React from 'react';

const getFilterCSSStyles = (functions) => {
  let filterString = "";

  for (let filter in functions) {
    if (functions.hasOwnProperty(filter)) {
      switch (filter) {
        case 'hue':
          filterString += 'hue-rotate(' + functions[filter] + 'deg) ';
          break;
        default:
          filterString += filter + '(' + functions[filter] + '%) '
      }
    }
  }

  return filterString;
}

const Filter = (props) => (
  <div style={{ filter: getFilterCSSStyles(props.filterFunctions) }}>
    {props.children}
  </div>
);

export default Filter;