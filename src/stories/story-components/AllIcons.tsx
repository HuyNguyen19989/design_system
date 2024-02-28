import { useState } from 'react';
import { Fragment } from 'react';
import * as Icons from '../../components/Icon'
import { TextField } from '@mui/material';

const AllIcons = ({ fontSize }: {fontSize: string}) => {
  const [filter, setFilter] = useState('');

  const updateFilter = (evt: any) => {
    setFilter(evt.target.value);
  };

  return (
    <Fragment>
      <TextField
        size='small'
        onChange={updateFilter}
        placeholder='Type to filter icons'
      />
      <table style={{ width: '100%', marginTop: '24px' }}>
        <tbody>
          <tr>
            <th style={{ textAlign: 'left', padding: '0 0 1rem 0' }}>
              Name
            </th>
            <th style={{ textAlign: 'left', padding: '0 0 1rem 0' }}>
              Icon
            </th>
          </tr>
          {Object.entries(Icons)
            .map(([Key, Component]) => {
              if (Key.substr(0, 4).toLowerCase() === 'icon') {
                return [Key.substr(4), Component];
              }

              return [Key, Component];
            })
            .filter(
              ([name]) =>
                filter && filter.length
                  ? (name as string).toLowerCase().includes(filter.toLowerCase())
                  : true
            )
            .map(([name, IconElement], index) => (
              <tr key={index}>
                <td style={{ padding: '0 0 1rem 0' }}>{name as string}</td>
                <td style={{ padding: '0 0 1rem 0' }}>
                  <IconElement fontSize={fontSize as any} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default AllIcons;