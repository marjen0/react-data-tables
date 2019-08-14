import React from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-enterprise';


class AgGrid extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        columnDefs: [{
            headerName: "Make", field: "make", sortable:true, filter:true,checkboxSelection: true
        }, {
            headerName: "Model", field: "model"
        }, {
            headerName: "Price", field: "price"
        }],
        rowData: [{
            make: "Toyota", model: "Celica", price: 35000
        }, {
             make: "Ford", model: "Mondeo", price: 32000
        }, {
            make: "Porsche", model: "Boxter", price: 72000
        }, {
            make: "Porsche", model: "Boxter", price: 72000
        }],
        autoGroupColumnDef: {
            headerName: "Make",
            field: "make",
            cellRenderer:'agGroupCellRenderer',
            cellRendererParams: {
              checkbox: true
            }
        }
      }
    }
    onButtonClick = e => {
        const selectedNodes = this.gridApi.getSelectedNodes()
        const selectedData = selectedNodes.map( node => node.data )
        const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }

    render() {
        return (
            <div className="ag-theme-material" style={{height: '600px', width: '600px'}}>
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    rowSelection='multiple'
                    onGridReady={ params => this.gridApi = params.api }
                    groupSelectsChildren={true}
                    autoGroupColumnDef={this.state.autoGroupColumnDef}
                />
                        
                
                <button onClick={this.onButtonClick}>Get selected rows</button>
            </div>
        );
    }   
}
  
  export default AgGrid;