
function isFinite(value: number) {
    return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
}

export {isFinite}