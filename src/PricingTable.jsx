import React, { Component } from 'react';
import '../node_modules/flat-ui/bootstrap/css/bootstrap.css';
import '../node_modules/flat-ui/css/flat-ui.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import './App.css';

class PricingTable extends Component{   
    render(){
        const data = [{
            frequency: '1h - raz w tygodniu',
            individual: '300',
            group2: '240',
            group4: '150',
            group6: '100'
        },
        {
            frequency: '1.5h - raz w tygodniu',
            individual: '440',
            group2: '350',
            group4: '220',
            group6: '140'
        },
        {
            frequency: '1h - dwa razy w tygodniu',
            individual: '580',
            group2: '460',
            group4: '300',
            group6: '180'
        },
        {
            frequency: '1.5h - dwa razy w tygodniu',
            individual: '880',
            group2: '690',
            group4: '440',
            group6: '290'
        }];

        return(
            <div>
                <h2>Cennik</h2>
                <ReactTable
                    data={data}
                    columns={[
                        {
                            Header: "",
                            columns: [{
                                Header: "Częstotliwość zajęć",
                                accessor: 'frequency'
                            }]
                        },
                        {
                            Header: "Miesięczny koszt (PLN)",
                            columns: [
                            {
                                Header: "Zajęcia indywidualne",
                                accessor: 'individual',
                                minWidth: 30
                            },
                            {
                                Header: "Grupa dwuosobowa",
                                accessor: 'group2',
                                minWidth: 30
                            },
                            {
                                Header: "Grupa czteroosobowa",
                                accessor: 'group4',
                                minWidth: 30
                            },
                            {
                                Header: "Grupa sześciosobowa",
                                accessor: 'group6',
                                minWidth: 30
                            }]
                        }
                    ]}
                    showPagination={false}
                    showPaginationBottom={false}
                    defaultPageSize={4}
                    sortable={false}
                    />
            </div>
        );
    }
}

export default PricingTable;