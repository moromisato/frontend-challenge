export const User = {
    'id': 1,
    'name': 'Justine Robinson',
    'company': 'Acme inc',
    'status': 'Ativo',
    'location': {
        'type': 'Trabalho',
        'address': 'Avenida Brasil, 4019',
    },
    'phone': {
        'type': 'Celular',
        'number': '45 9 9555 5555'
    },
    'email': {
        'address': 'justine@email.com',
        'type': 'Trabalho'
    },
    'social_media': {
        'whatsapp': '',
        'facebook': '',
        'instagram': '',
        'twitter': '',
        'linkedin': '',
    },
    'opportunities': [
        { 'id': 1, 'type': 'won', 'value': 5000, 'obs': '' },
        { 'id': 2, 'type': 'won', 'value': 5000, 'obs': '' },
        { 'id': 3, 'type': 'won', 'value': 5000, 'obs': '' },
        { 'id': 4, 'type': 'won', 'value': 5000, 'obs': '' },
        { 'id': 1, 'type': 'opened', 'value': null, 'obs': 'Diversas moedas' },
        { 'id': 1, 'type': 'opened', 'value': null, 'obs': 'Diversas moedas' },
        { 'id': 1, 'type': 'lost', 'value': 3000, 'obs': '' },
        { 'id': 1, 'type': 'discarted', 'value': 2000, 'obs': '' },

    ],

    'opportunities': {
        'total': 8,
        'won': {
            'total': 4,
            'totalValue': 20000,
            'values': [
                { 'id': 1, 'type': 'won', 'value': 5000, 'obs': '' },
                { 'id': 2, 'type': 'won', 'value': 5000, 'obs': '' },
                { 'id': 3, 'type': 'won', 'value': 5000, 'obs': '' },
                { 'id': 4, 'type': 'won', 'value': 5000, 'obs': '' },
            ]
        },
        'lost': {
            'total': 1,
            'totalValue': 3000,
            'values': [
                { 'id': 5, 'type': 'lost', 'value': 3000, 'obs': '' },
            ]
        },
        'opened': {
            'total': 2,
            'totalValue': 'Diversas Moedas',
            'values': [
                { 'id': 6, 'type': 'opened', 'value': null, 'obs': 'Diversas moedas' },
                { 'id': 7, 'type': 'opened', 'value': null, 'obs': 'Diversas moedas' },
            ]
        },
        'discarted': {
            'total': 0,
            'totalValue': 0,
            'values': []
        }
    },
    'credit_limits': {
        'granted': 12000.20,
        'available': 3105
    },
    'financial_securities': {
        'expired': [
            { 'id': 1, 'value': 3105 }
        ],
        'expering': [
            { 'id': 2, 'value': 3000 },
            { 'id': 2, 'value': 105 },
        ],
        'paid': [
            { 'id': 3, 'value': 105 },
            { 'id': 4, 'value': 3000 },
        ]
    },
    'activities': [
        {'id': 1, 'type': 'Em atraso', 'description': 'Ligação de agendamento da reunião', 'responsible': 'Erica Collins', 'date': '30/06/2020 15:00'},
        {'id': 2, 'type': 'Em atraso', 'description': 'Ligação de agendamento da reunião', 'responsible': 'Erica Collins', 'date': '30/06/2020 15:00'},
        {'id': 3, 'type': 'Em atraso', 'description': 'Ligação de agendamento da reunião', 'responsible': 'Erica Collins', 'date': '30/06/2020 15:00'},
        {'id': 4, 'type': 'Em atraso', 'description': 'Ligação de agendamento da reunião', 'responsible': 'Erica Collins', 'date': '30/06/2020 15:00'},
        {'id': 5, 'type': 'Em atraso', 'description': 'Ligação de agendamento da reunião', 'responsible': 'Erica Collins', 'date': '30/06/2020 15:00'},
        {'id': 6, 'type': 'Em atraso', 'description': 'Ligação de agendamento da reunião', 'responsible': 'Erica Collins', 'date': '30/06/2020 15:00'},    
    ]
}
