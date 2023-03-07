import { FC, useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';

import { EntriesContext } from '../../context/entries';
import { EntryStatus } from '@/interfaces';
import { EntryCard } from './EntryCard';




interface Props {
  status: EntryStatus;
}
export const EntryList: FC<Props> = ({ status }) => {

  const { entries } = useContext( EntriesContext );

  const entriesByStatus = useMemo( ()=> entries.filter( entry => entry.status === status ), [entries]);
  

  return (
    // todo: aqui haremos drop
    <div>
      <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px' }}>
        {/** todo: cambiará dependiendo si esto haciendo drag o no */}
        <List sx={{ opacity: 1 }}>
          {
            entriesByStatus.map( entry => (
              <EntryCard key={ entry._id } entry={entry}/>
            ))

          }          
        </List>

      </Paper>
    </div>
  )
};
