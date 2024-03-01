import React from 'react';
import ListItem from './ListItem';

import { formatTableHeading } from '../../utils/helper';

const List = (props) => {
  const { items, handleListItemClick } = props;

  const _renderTableHeader = () => {
    return Object.keys(items[0]).map((key) => {
      if (key !== 'id') {
        return <th key={key}>{formatTableHeading(key)}</th>;
      }
    });
  };

  if (!items.length) return null;

  return (
    <div>
      <table>
        <thead>
          <tr>{_renderTableHeader()}</tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              handleListItemClick={handleListItemClick}
            ></ListItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
