import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext, entriesReducer } from './';

import { Entry } from '@/interfaces';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [{
        _id: uuidv4(),
        description: 'Pendiente: Non irure nostrud officia ullamco aute et sit sunt ea quis qui. Officia id fugiat tempor velit dolor. Labore deserunt laborum reprehenderit veniam amet enim.',
        status: 'pending',
        createdAt: Date.now(),
    },
    {
        _id: uuidv4(),
        description: 'En-Progreso: Non irure nostrud officia ullamco aute et sit sunt ea quis qui. Officia id fugiat tempor velit dolor. Labore deserunt laborum reprehenderit veniam amet enim.',
        status: 'in-progress',
        createdAt: Date.now() - 1000000,
    },
    {
        _id: uuidv4(),
        description: 'Terminadas: Non irure nostrud officia ullamco aute et sit sunt ea quis qui. Officia id fugiat tempor velit dolor. Labore deserunt laborum reprehenderit veniam amet enim.',
        status: 'finished',
        createdAt: Date.now() - 1000000,
    },
    ],
}
interface Props {
    children?: React.ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = (description: string) => {

        const NewEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }
        dispatch({ type: '[Entries] Add-Entry', payload: NewEntry })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,

            //Methods
            addNewEntry,
        }}>
            {children}
        </EntriesContext.Provider>
    )
}