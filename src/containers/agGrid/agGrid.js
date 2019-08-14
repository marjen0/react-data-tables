import React from 'react';
import Automobiles from '../../classes/Automobiles/Automobiles';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


class AgGrid extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        automobiles: new Automobiles().automobiles,
        columnDefs: [],
        rowData: [],
      }
    }
    componentDidMount() {
        let defs = [];
        for (const key in this.state.automobiles[0]) {
            const def = {
                headerName: key,
                field: key,
                sortable:true,
                filter:true,
                checkboxSelection: key === 'make'? true : false
            }
            defs.push(def);
        }
        const data = this.state.automobiles.map(automobile => {
            return automobile;
        })
        this.setState({
            columnDefs: defs, 
            rowData:data
        });
    }
    onButtonClick = e => {
        const selectedNodes = this.gridApi.getSelectedNodes()
        const selectedData = selectedNodes.map( node => node.data )
        const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }

    render() {
        return (
            <div className="ag-theme-material" style={{height: '600px', width: '100%'}}>
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    rowSelection='multiple'
                    onGridReady={ params => this.gridApi = params.api }
                />
                        
                
                <button onClick={this.onButtonClick}>Get selected rows</button>
            </div>
        );
    }   
}
  
  export default AgGrid;