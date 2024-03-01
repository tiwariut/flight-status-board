import React from 'react';

const ListItem = (props) => {
  const { item, handleListItemClick } = props;

  const _renderRowData = () => {
    return Object.keys(item).map((key) => {
      if (key !== 'id') {
        return <td key={key}>{item[key]}</td>;
      }
    });
  };

  if (!item) return null;

  return (
    <tr onClick={() => handleListItemClick(item.id)}>{_renderRowData()}</tr>
  );
};

export default ListItem;
