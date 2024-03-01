import React from 'react';

const ListItem = (props) => {
  const { item, handleListItemClick } = props;

  const _renderRowData = () => {
    return Object.keys(item).map((key) => {
      if (key !== 'id' && key !== 'className') {
        return (
          <td key={key}>
            <div
              className={key == 'status' ? `indicator ${item.className}` : ''}
            >
              {item[key]}
            </div>
          </td>
        );
      }
    });
  };

  if (!item) return null;

  return (
    <tr onClick={() => handleListItemClick(item.id)}>{_renderRowData()}</tr>
  );
};

export default ListItem;
