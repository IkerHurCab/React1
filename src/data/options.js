const opciones = [
    { nombre: 'piedra', emoji: '🪨', gana: ['tijeras', 'lagarto'], pierde: ['papel', 'spock'] },
    { nombre: 'papel', emoji: '📄', gana: ['piedra', 'spock'], pierde: ['tijeras', 'lagarto'] },
    { nombre: 'tijeras', emoji: '✂️', gana: ['papel', 'lagarto'], pierde: ['piedra', 'spock'] },
    { nombre: 'lagarto', emoji: '🦎', gana: ['papel', 'spock'], pierde: ['piedra', 'tijeras'] },
    { nombre: 'spock', emoji: '🖖', gana: ['piedra', 'tijeras'], pierde: ['papel', 'lagarto'] }
];

export default opciones;