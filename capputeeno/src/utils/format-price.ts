export function formatPrice(priceInCents: number) {
    const priceInEuros = priceInCents / 100;
    return priceInEuros.toLocaleString('pt-PT', {style: 'currency', currency: 'EUR'})
}