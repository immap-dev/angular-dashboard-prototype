export class DashboardFakeDB {
    public static layouts = {
        'gridlist': {
            cols: 4
        },
        'widget': [
            {
                type: 'title',
                style: {
                    gridtile: {
                        cols: 2, rows: 2
                    }
                }
            },
            {
                type: 'stat',
                style: {
                    gridtile: {
                        cols: 2, rows: 2
                    }
                }
            },
            // {
            //     type: 'form',
            //     style: {
            //         gridtile: {
            //             cols: 4, rows: 2
            //         }
            //     }
            // },
            {
                type: 'form',
                style: {
                    gridtile: {
                        cols: 2, rows: 2
                    }
                },
                config:
                    [
                        {
                            type: 'select',
                            label: 'Location',
                            name: 'location',
                            options: ['City A', 'City B', ' City C', 'My City'],
                            placeholder: 'Select location',
                            value: 'City A'
                        },
                        {
                            type: 'input',
                            label: 'facility',
                            name: 'facility',
                            placeholder: 'Facility Name',
                            value: 'hospital'
                        },
                        {
                            type: 'input',
                            label: 'number',
                            name: 'number',
                            placeholder: 'Enter Number',
                            value: 4
                        },
                        {
                            label: 'Save',
                            name: 'submit',
                            type: 'button',
                        },
                    ]
            },
            {
                type: 'map',
                style: {
                    gridtile: {
                        cols: 2, rows: 10
                    }
                }
            },
            {
                type: 'table',
                style: {
                    gridtile: {
                        cols: 2, rows: 8
                    },
                },
                // header: ['position', 'name', 'weight', 'symbol', 'quantity'],
                // datatable: [
                //     { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', quantity: 10 },
                //     { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', quantity: 10 },
                //     { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', quantity: 10 },
                //     { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', quantity: 10 },
                //     { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', quantity: 10 },
                //     { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', quantity: 10 },
                //     { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', quantity: 10 },
                //     { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', quantity: 10 },
                //     { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', quantity: 10 },
                //     { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', quantity: 10 },
                //     { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
                //     { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
                //     { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
                //     { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
                //     { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
                //     { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
                //     { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
                //     { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
                //     { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
                //     { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
                // ]
            },
            {
                type: 'list',
                style: {
                    gridtile: {
                        cols: 4, rows: 4
                    },
                },
                list: [
                    {
                        name: 'Photos1',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes1',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work1',
                        updated: new Date('1/28/16'),
                    }
                ]
            }

        ]
    };
}
