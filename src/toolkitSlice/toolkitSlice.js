import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchSearchId = createAsyncThunk('tickets/fetchSearchId', async (_, { rejectWithValue }) => {
    try {
        const res = await fetch('https://aviasales-test-api.kata.academy/search');
        return await res.json();
    } catch (err) {
        return rejectWithValue(err);
    }
});
export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (_, { rejectWithValue }) => {
    try {
        const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=`);
        if (!res.ok) {
            throw new Error(`${res.status}`);
        }
        return await res.json();
    } catch (err) {
        return rejectWithValue(err.message);
    }
});


const toolkitSlice = createSlice({

    name: 'toolkit',
    initialState: {
        transfer: [
            {id: 'all', label: 'Все', checked: false},
            {id: 'without-transfer', label: 'Без пересадок', checked: false},
            {id: '1-transfer', label: '1 пересадка', checked: false},
            {id: '2-transfer', label: '2 пересадки', checked: false},
            {id: '3-transfer', label: '3 пересадки', checked: false},
        ],
        tickets: [],
        showAllTickets: true,
        numShowTicket: 5,
        isLoading: false,
        error: false,
        searchId: '',
        stopFetch: false,
        fetchStatus500: 0,
    },

    reducers: {
        checkFilter(state, {payload: id}) {
            const clickedFilter = state.transfer.find(x => x.id === id)
            const allFilter = state.transfer.find(x => x.id === 'all')
            if (clickedFilter === allFilter) {
                const isAllFilterChecked = allFilter.checked
                state.transfer.forEach(filter => filter.checked = !isAllFilterChecked)
            } else {
                clickedFilter.checked = !clickedFilter.checked
                allFilter.checked = state.transfer.filter(filter => filter !== allFilter).every(x => x.checked)

            }
        },
    },
    extraReducers: {
        [fetchSearchId.pending]: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        [fetchTickets.pending]: (state) => {
            state.isLoading = true;
            state.error = false;
        },

        [fetchSearchId.fulfilled]: (state, action) => {
            document.cookie = `searchId = ${action.payload.searchId}`;
            state.searchId = true;
        },
        [fetchTickets.fulfilled]: (state, action) => {
            state.tickets = [...state.tickets, ...action.payload.tickets];
            state.stopFetch = action.payload.stop;
            state.isLoading = !action.payload.stop;
        },

        [fetchSearchId.rejected]: (state) => {
            state.error = true;
        },

        [fetchTickets.rejected]: (state, action) => {
            if (action.payload === '500') {
                state.fetchStatus500 += 1;
            } else {
                state.isLoading = false;
                state.error = true;
            }
        },
    },
});

export default toolkitSlice.reducer;
export const {
    checkFilter,
} = toolkitSlice.actions
