import React from 'react';
import Automobiles from '../../classes/Automobiles/Automobiles';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class ReactTablePckg extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            automobiles: new Automobiles().automobiles
        }
    }
    render() {
        //const auto = new Automobiles();
        const { automobiles } = this.state;
        const columns = [];
        //const data =[];
        for (const key in automobiles[0]) {
            const column = {
                Header: key,
                accessor: key,
                sortable:true,
                filterable:true
            }
            columns.push(column);
        }
        const data = automobiles.map(automobile => {
            return {...automobile}
        })
       
        return ( 
            <ReactTable 
                columns={columns} 
                data={data} 
                filterable={true}
                defaultPageSize={10}
                noDataText={'No data provided'}
            />
        );
    }
}

export default ReactTablePckg;