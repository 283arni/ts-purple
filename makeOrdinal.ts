
const ENDS_WITH_DOUBLE_ZERO_PATTERN: RegExp = /(hundred|thousand|(m|b|tr|quadr)illion)$/;
const ENDS_WITH_TEEN_PATTERN: RegExp = /teen$/;
const ENDS_WITH_Y_PATTERN: RegExp = /y$/;
const ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN: RegExp = /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/;

const ordinalLessThanThirteen: { [key: string]: string } = {
    zero: 'zeroth',
    one: 'first',
    two: 'second',
    three: 'third',
    four: 'fourth',
    five: 'fifth',
    six: 'sixth',
    seven: 'seventh',
    eight: 'eighth',
    nine: 'ninth',
    ten: 'tenth',
    eleven: 'eleventh',
    twelve: 'twelfth'
};

/**
 * Converts a number-word into an ordinal number-word.
 * @example makeOrdinal('one') => 'first'
 * @param {string} words
 * @returns {string}
 */
function makeOrdinal(words: string): string {
    if (ENDS_WITH_DOUBLE_ZERO_PATTERN.test(words) || ENDS_WITH_TEEN_PATTERN.test(words)) {
        return words + 'th';
    }
    else if (ENDS_WITH_Y_PATTERN.test(words)) {
        return words.replace(ENDS_WITH_Y_PATTERN, 'ieth');
    }
    else if (ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN.test(words)) {
        return words.replace(ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN, replaceWithOrdinalVariant);
    }
    
    return words;
}

function replaceWithOrdinalVariant(match: string): string {
    return ordinalLessThanThirteen[match];
}

export {makeOrdinal}