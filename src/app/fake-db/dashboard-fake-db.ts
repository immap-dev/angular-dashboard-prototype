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
                        cols: 4, rows: 2
                    }
                }
            },
            {
                type: 'stat',
                style: {
                    gridtile: {
                        cols: 4, rows: 1
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
                        cols: 4, rows: 2
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
                        },
                        {
                            type: 'input',
                            label: 'facility',
                            name: 'facility',
                            placeholder: 'Facility Name',
                        },
                        {
                            type: 'input',
                            label: 'number',
                            name: 'number',
                            placeholder: 'Enter Number',
                        },
                        {
                            label: 'Submit',
                            name: 'submit',
                            type: 'button',
                        },
                    ]
            },
            {
                type: 'map',
                style: {
                    gridtile: {
                        cols: 4, rows: 7
                    }
                }
            }

        ]
    };
}
