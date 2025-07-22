
const MAX_SAFE_INTEGER = 9007199254740991;

function isSafeNumber(value: unknown): value is number {
    return typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER;
}

export {isSafeNumber}