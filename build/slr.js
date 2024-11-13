"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLR = void 0;
class SLR {
    constructor() {
        this.beta_0 = 0;
        this.beta_1 = 0;
        this.correlation = 0;
        this.determination = 0;
    }
    getBeta_0() { return this.beta_0; }
    getBeta_1() { return this.beta_1; }
    getCorrelation() { return this.correlation; }
    getDetermination() { return this.determination; }
    toComputeBeta_0({ sumY, sumX, n }) {
        this.beta_0 = ((sumY - this.beta_1 * sumX) / n);
    }
    toComputeBeta_1({ n, sumXY, sumX, sumY, sumXQuad }) {
        this.beta_1 =
            ((n * sumXY) - (sumX * sumY)) /
                (n * sumXQuad - Math.pow(sumX, 2));
    }
    toRegress() {
        console.log(`La ecuación de regresión es: Y = ${this.beta_0} + ${this.beta_1} * x`);
    }
    toPredictY(x) {
        let y = this.beta_0 + this.beta_1 * x;
        console.log(`Para X = ${x}, Y predecido = ${y}`);
        return y;
    }
    computeCorrelationCoefficient({ n, sumXY, sumX, sumY, sumXQuad, sumYQuad }) {
        this.correlation = ((n * sumXY) - (sumX * sumY)) / Math.sqrt(((n * sumXQuad - Math.pow(sumX, 2)) * (n * sumYQuad - Math.pow(sumY, 2))));
        console.log(`El coeficiente de correlación es: ${this.correlation}`);
    }
    computeDeterminationCoefficient() {
        this.determination = Math.pow(this.correlation, 2);
        console.log(`El coeficiente de determinación es: ${this.determination}`);
    }
    makePredictions(xValues) {
        xValues.forEach(x => this.toPredictY(x));
    }
}
exports.SLR = SLR;
//# sourceMappingURL=slr.js.map