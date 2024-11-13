// Interfaz para los datos
interface IDataPoint {
    yValue: number;
    xValue: number;
}

// Clase que contiene los datos
class DataSet {
    private xValues: number[] = [];
    private yValues: number[] = [];

    constructor(data: IDataPoint[]) {
        this.xValues = data.map(d => d.xValue);
        this.yValues = data.map(d => d.yValue);
    }

    public getXValues() {
        return this.xValues;
    }

    public getYValues() {
        return this.yValues;
    }
}

// Clase con operaciones matemáticas básicas
class MathOperations {
    sum(values: number[]) {
        return values.reduce((a, b) => a + b, 0);
    }

    sumOfSquares(values: number[]) {
        return values.map(x => x * x).reduce((a, b) => a + b, 0);
    }

    sumOfProducts(valuesX: number[], valuesY: number[]) {
        return valuesX.map((x, i) => x * valuesY[i]).reduce((a, b) => a + b, 0);
    }

    count(values: number[]) {
        return values.length;
    }
}

// Clase para el cálculo de la regresión lineal 
class SimpleLinearRegression {
    private intercept: number = 0;
    private slope: number = 0;
    private correlationCoefficient: number = 0;
    private determinationCoefficient: number = 0;

    // Métodos para obtener los resultados de la regresión
    public getIntercept() {
        return this.intercept;
    }

    public getSlope() {
        return this.slope;
    }

    public getCorrelationCoefficient() {
        return this.correlationCoefficient;
    }

    public getDeterminationCoefficient() {
        return this.determinationCoefficient;
    }

    // Cálculo de la pendiente (beta_1)
    public computeSlope({ count, sumXY, sumX, sumY, sumXSquared }: { count: number, sumXY: number, sumX: number, sumY: number, sumXSquared: number }) {
        this.slope = ((count * sumXY) - (sumX * sumY)) / (count * sumXSquared - Math.pow(sumX, 2));
    }

    // Cálculo del intercepto (beta_0)
    public computeIntercept({ sumY, sumX, count }: { sumY: number, sumX: number, count: number }) {
        this.intercept = ((sumY - this.slope * sumX) / count);
    }

    // Impresión de la ecuación de regresión
    public printRegressionEquation() {
        console.log(`La ecuación de regresión es: Y = ${this.intercept} + ${this.slope} * X`);
    }

    // Predicción del valor de Y para un valor de X
    public predictY(xValue: number) {
        const y = this.intercept + this.slope * xValue;
        console.log(`Para X = ${xValue}, Y predicho = ${y}`);
        return y;
    }

    // Cálculo del coeficiente de correlación
    public computeCorrelationCoefficient({ count, sumXY, sumX, sumY, sumXSquared, sumYSquared }: { count: number, sumXY: number, sumX: number, sumY: number, sumXSquared: number, sumYSquared: number }) {
        this.correlationCoefficient = ((count * sumXY) - (sumX * sumY)) / Math.sqrt(((count * sumXSquared - Math.pow(sumX, 2)) * (count * sumYSquared - Math.pow(sumY, 2))));
        console.log(`El coeficiente de correlación es: ${this.correlationCoefficient}`);
    }

    // Cálculo del coeficiente de determinación
    public computeDeterminationCoefficient() {
        this.determinationCoefficient = Math.pow(this.correlationCoefficient, 2);
        console.log(`El coeficiente de determinación es: ${this.determinationCoefficient}`);
    }

    // Predicciones para una lista de valores de X
    public makePredictions(xValues: number[]) {
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
