
function isSafeNumber(value: unknown): value is number {
    return typeof value === 'number' && Math.abs(value) <= 1000;
}

export {isSafeNumber}