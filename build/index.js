"use strict";
// Clase que contiene los datos
class DataSet {
    constructor(data) {
        this.xValues = [];
        this.yValues = [];
        this.xValues = data.map(d => d.xValue);
        this.yValues = data.map(d => d.yValue);
    }
    getXValues() {
        return this.xValues;
    }
    getYValues() {
        return this.yValues;
    }
}
// Clase con operaciones matemáticas básicas
class MathOperations {
    sum(values) {
        return values.reduce((a, b) => a + b, 0);
    }
    sumOfSquares(values) {
        return values.map(x => x * x).reduce((a, b) => a + b, 0);
    }
    sumOfProducts(valuesX, valuesY) {
        return valuesX.map((x, i) => x * valuesY[i]).reduce((a, b) => a + b, 0);
    }
    count(values) {
        return values.length;
    }
}
// Clase para el cálculo de la regresión lineal 
class SimpleLinearRegression {
    constructor() {
        this.intercept = 0;
        this.slope = 0;
        this.correlationCoefficient = 0;
        this.determinationCoefficient = 0;
    }
    // Métodos para obtener los resultados de la regresión
    getIntercept() {
        return this.intercept;
    }
    getSlope() {
        return this.slope;
    }
    getCorrelationCoefficient() {
        return this.correlationCoefficient;
    }
    getDeterminationCoefficient() {
        return this.determinationCoefficient;
    }
    // Cálculo de la pendiente (beta_1)
    computeSlope({ count, sumXY, sumX, sumY, sumXSquared }) {
        this.slope = ((count * sumXY) - (sumX * sumY)) / (count * sumXSquared - Math.pow(sumX, 2));
    }
    // Cálculo del intercepto (beta_0)
    computeIntercept({ sumY, sumX, count }) {
        this.intercept = ((sumY - this.slope * sumX) / count);
    }
    // Impresión de la ecuación de regresión
    printRegressionEquation() {
        console.log(`La ecuación de regresión es: Y = ${this.intercept} + ${this.slope} * X`);
    }
    // Predicción del valor de Y para un valor de X
    predictY(xValue) {
        const y = this.intercept + this.slope * xValue;
        console.log(`Para X = ${xValue}, Y predicho = ${y}`);
        return y;
    }
    // Cálculo del coeficiente de correlación
    computeCorrelationCoefficient({ count, sumXY, sumX, sumY, sumXSquared, sumYSquared }) {
        this.correlationCoefficient = ((count * sumXY) - (sumX * sumY)) / Math.sqrt(((count * sumXSquared - Math.pow(sumX, 2)) * (count * sumYSquared - Math.pow(sumY, 2))));
        console.log(`El coeficiente de correlación es: ${this.correlationCoefficient}`);
    }
    // Cálculo del coeficiente de determinación
    computeDeterminationCoefficient() {
        this.determinationCoefficient = Math.pow(this.correlationCoefficient, 2);
        console.log(`El coeficiente de determinación es: ${this.determinationCoefficient}`);
    }
    // Predicciones para una lista de valores de X
    makePredictions(xValues) {
        xValues.forEach(x => this.predictY(x));
    }
}
// Cargar el dataset
const dataset = new DataSet([
    { yValue: 2, xValue: 1 },
    { yValue: 4, xValue: 2 },
    { yValue: 6, xValue: 3 },
    { yValue: 8, xValue: 4 },
    { yValue: 10, xValue: 5 },
    { yValue: 12, xValue: 6 },
    { yValue: 14, xValue: 7 },
    { yValue: 16, xValue: 8 },
    { yValue: 18, xValue: 9 }
]);
// Crear una instancia de la clase MathOperations
const mathOps = new MathOperations();
const xValues = dataset.getXValues();
const yValues = dataset.getYValues();
// Calcular los valores necesarios para la regresión
const count = mathOps.count(xValues);
const sumX = mathOps.sum(xValues);
const sumY = mathOps.sum(yValues);
const sumXSquared = mathOps.sumOfSquares(xValues);
const sumXY = mathOps.sumOfProducts(xValues, yValues);
const sumYSquared = mathOps.sumOfSquares(yValues);
// Crear una instancia de la clase SimpleLinearRegression y calcular la regresión
const slr = new SimpleLinearRegression();
slr.computeSlope({ count, sumXY, sumX, sumY, sumXSquared });
slr.computeIntercept({ sumY, sumX, count });
slr.printRegressionEquation();
slr.computeCorrelationCoefficient({ count, sumXY, sumX, sumY, sumXSquared, sumYSquared });
slr.computeDeterminationCoefficient();
// Realizar predicciones para algunos valores de X
slr.makePredictions([23, 26, 15, 10, 60]);
//# sourceMappingURL=index.js.map