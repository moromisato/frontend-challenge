export function numberFormat(value) {
    if ( value === 0 ) {
        return '-'
    } else if ( typeof(value) === 'string' ) {
        return value
    }

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}
