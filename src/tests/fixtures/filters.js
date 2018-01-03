import moment from 'moment';

const filters = {
    text:'',
    sortby: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text:'bills',
    sortby: 'date',
    startDate: moment(0),
    endDate: moment(0).add(3, 'day')
};

export { filters, altFilters };