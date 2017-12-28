import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({dispatch, description, amount, createdAt, id}, props) => (
    <div>
        <Link to={`/edit/${id}`} >{description}</Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;