import {createSlice} from '@reduxjs/toolkit';

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        transfer: [
            {id: 1, name: 'Все', checked: false},
            {id: 2, name: 'Без пересадок', checked: false},
            {id: 3, name: '1 пересадка', checked: false},
            {id: 4, name: '2 пересадки', checked: false},
            {id: 5, name: '3 пересадки', checked: false},
        ],
    },

    reducers: {
        activeAll(state, id) {
            state.transfer.map((item) => item.id === id ? {...item, checked: !item.checked } : item)
        },

    },
});

export default toolkitSlice.reducer;
export const {activeAll} = toolkitSlice.actions
