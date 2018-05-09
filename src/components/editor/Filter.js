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

const Filter = (props) => {
  return (
    <div
      style={{ width: '100%', height: '100%', filter: getFilterCSSStyles(props.filterFunctions) }}
      onClick={() => { props.onClick(props.filterFunctions) }}>
      {props.children}
    </div>
  );
}

export default Filter;