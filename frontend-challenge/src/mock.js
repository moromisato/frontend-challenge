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
    'opportunities': {
        'total': 8,
        'won': {
            'description': 'Ganhas',
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
            'description': 'Perdidas',
            'total': 1,
            'totalValue': 3000,
            'values': [
                { 'id': 5, 'type': 'lost', 'value': 3000, 'obs': '' },
            ]
        },
        'opened': {
            'description': 'Abertas',
            'total': 2,
            'totalValue': 'Diversas Moedas',
            'values': [
                { 'id': 6, 'type': 'opened', 'value': null, 'obs': 'Diversas moedas' },
                { 'id': 7, 'type': 'opened', 'value': null, 'obs': 'Diversas moedas' },
            ]
        },
        'discarted': {
            'description': 'Descartadas',
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
        'expired': {
            'description': 'Vencidos',
            'total': 1,
            'totalValue': 3105,
            'values': [
                { 'id': 1, 'value': 3105 }
            ]
        },
        'expiring': {
            'description': 'A vencer',
            'total': 2,
            'totalValue': 3105,
            'values': [
                { 'id': 2, 'value': 3000 },
                { 'id': 2, 'value': 105 },
            ]
        },
        'paid': {
            'description': 'Pagos',
            'total': 2,
            'totalValue': 3105,
            'values': [
                { 'id': 3, 'value': 3000 },
                { 'id': 4, 'value': 105 },
            ]
        },
    },
    'activities': {
        'total': 25,
        'late': {
            'description': 'Em atraso',
            'total': 1,
            'values': [
                {'id': 1, 'description': 'Ligação de agendamento da reunião', 'cathegory': 'call', 'responsible': 'Erica Collins', 'date': '30/06/2020 15:00'}
            ]
        },
        'in_progress': {
            'description': 'Em andamento',
            'total': 0,
            'values': []
        },
        'expected': {
            'description': 'Previstas',
            'total': 3,
            'values': [
                {'id': 1, 'description': 'Reunião orçamento', 'cathegory': 'meeting', 'responsible': 'Abigail Fisher', 'date': '03/07/2020 10:00'},
                {'id': 2, 'description': 'Email documentação', 'cathegory': 'email', 'responsible': 'Jeffery King', 'date': '03/07/2020 09:00'},
                {'id': 3, 'description': 'Almoço cooperativo', 'cathegory': 'schedule', 'responsible': 'Lawrence Kelly', 'date': '03/07/2020 15:00'}
            ]
        },
        'finished': {
            'description': 'Concluídas',
            'total': 21,
            'values': [
                {'id': 1, 'description': 'Reunião orçamento', 'cathegory': 'meeting', 'responsible': 'Abigail Fisher', 'date': '03/07/2020 10:00'},
                {'id': 2, 'description': 'Email documentação', 'cathegory': 'email', 'responsible': 'Jeffery King', 'date': '03/07/2020 09:00'},
                {'id': 3, 'description': 'Almoço cooperativo', 'cathegory': 'schedule', 'responsible': 'Lawrence Kelly', 'date': '03/07/2020 15:00'},
                {'id': 4, 'description': 'Ligação contrato', 'cathegory': 'meeting', 'responsible': 'Dylan Watsor', 'date': '03/07/2020 10:00'},
                {'id': 5, 'description': 'Email documentação', 'cathegory': 'email', 'responsible': 'Jeffery King', 'date': '03/07/2020 09:00'},
                {'id': 6, 'description': 'Almoço cooperativo', 'cathegory': 'schedule', 'responsible': 'Lawrence Kelly', 'date': '03/07/2020 15:00'},
                {'id': 7, 'description': 'Reunião orçamento', 'cathegory': 'meeting', 'responsible': 'Abigail Fisher', 'date': '03/07/2020 10:00'},
                {'id': 8, 'description': 'Email documentação', 'cathegory': 'email', 'responsible': 'Jeffery King', 'date': '03/07/2020 09:00'},
                {'id': 9, 'description': 'Almoço cooperativo', 'cathegory': 'schedule', 'responsible': 'Lawrence Kelly', 'date': '03/07/2020 15:00'},
                {'id': 10, 'description': 'Reunião orçamento', 'cathegory': 'meeting', 'responsible': 'Abigail Fisher', 'date': '03/07/2020 10:00'},
                {'id': 11, 'description': 'Email documentação', 'cathegory': 'email', 'responsible': 'Jeffery King', 'date': '03/07/2020 09:00'},
                {'id': 12, 'description': 'Almoço cooperativo', 'cathegory': 'schedule', 'responsible': 'Lawrence Kelly', 'date': '03/07/2020 15:00'},
                {'id': 13, 'description': 'Reunião orçamento', 'cathegory': 'meeting', 'responsible': 'Abigail Fisher', 'date': '03/07/2020 10:00'},
                {'id': 14, 'description': 'Email documentação', 'cathegory': 'email', 'responsible': 'Jeffery King', 'date': '03/07/2020 09:00'},
                {'id': 15, 'description': 'Almoço cooperativo', 'cathegory': 'schedule', 'responsible': 'Lawrence Kelly', 'date': '03/07/2020 15:00'},
                {'id': 16, 'description': 'Reunião orçamento', 'cathegory': 'meeting', 'responsible': 'Abigail Fisher', 'date': '03/07/2020 10:00'},
                {'id': 17, 'description': 'Email documentação', 'cathegory': 'email', 'responsible': 'Jeffery King', 'date': '03/07/2020 09:00'},
                {'id': 18, 'description': 'Almoço cooperativo', 'cathegory': 'schedule', 'responsible': 'Lawrence Kelly', 'date': '03/07/2020 15:00'}
            ]
        }
    }
}
