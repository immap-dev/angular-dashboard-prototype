export class DashboardFakeDB {
    public static layouts = {
        'gridlist': {
            'cols': 4
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
            {
                type: 'form',
                style: {
                    gridtile: {
                        cols: 4, rows: 2
                    }
                }
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
