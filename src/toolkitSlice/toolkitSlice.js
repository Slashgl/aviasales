import {createSlice} from '@reduxjs/toolkit';

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        transfer: [
            {id: 'all', label: 'Все', checked: false },
            {id: 'without-transfer', label: 'Без пересадок', checked: false },
            {id: '1-transfer', label: '1 пересадка', checked: false },
            {id: '2-transfer', label: '2 пересадки', checked: false },
            {id: '3-transfer', label: '3 пересадки', checked: false },
        ],
    },

    reducers: {
        checkFilter(state, {payload: id}) {
            const clickedFilter = state.transfer.find(x => x.id === id)
            const allFilter = state.transfer.find(x => x.id === 'all')
            if(clickedFilter === allFilter) {
                const isAllFilterChecked = allFilter.checked
                state.transfer.forEach(filter => filter.checked = !isAllFilterChecked)
            }else {
                clickedFilter.checked = !clickedFilter.checked
                const checkFilterCount = state.transfer.filter(filter => filter.checked && filter !== allFilter).length
                if(checkFilterCount === 4) {
                    allFilter.checked = !allFilter.checked
                }else if(checkFilterCount < 4) {
                    allFilter.checked = false
                }
            }
        }
    },
});

export default toolkitSlice.reducer;
export const {checkFilter} = toolkitSlice.actions
