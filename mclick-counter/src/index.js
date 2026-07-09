
class MclickCounter {
    constructor(initialValue = 0n) {
        this.value = BigInt(initialValue);
    }
    version() {
        return '0.7.0';
    }

    increment(amount = 1n) {
        this.value += BigInt(amount);
    }

    set(value) {
        this.value = BigInt(value);
    }

    get() {
        return this.value;
    }

        // Format as words (e.g., "1.2 million", "3.4 billion", etc.)
    format() {
        const units = [
            { suffix: "decillion", value: 10n ** 33n },
            { suffix: "nonillion", value: 10n ** 30n },
            { suffix: "octillion", value: 10n ** 27n },
            { suffix: "septillion", value: 10n ** 24n },
            { suffix: "sextillion", value: 10n ** 21n },
            { suffix: "quintillion", value: 10n ** 18n },
            { suffix: "quadrillion", value: 10n ** 15n },
            { suffix: "trillion",    value: 10n ** 12n },
            { suffix: "billion",     value: 10n ** 9n },
            { suffix: "million",     value: 10n ** 6n },
            { suffix: "thousand",    value: 10n ** 3n }
        ];

        for (const unit of units) {
            if (this.value >= unit.value) {
                const whole = this.value / unit.value;
                const decimal = (this.value % unit.value) / (unit.value / 10n);
                return `${whole}.${decimal} ${unit.suffix}`;
            }
        }

        return this.value.toString(); // just show number for small values
    }
}