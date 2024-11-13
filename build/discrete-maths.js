"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscreteMaths = void 0;
class DiscreteMaths {
    sumX(data) {
        return data.reduce((a, b) => a + b, 0);
    }
    sumY(data) {
        return data.reduce((a, b) => a + b, 0);
    }
    sumXQuad(data) {
        return data.map(x => x * x).reduce((a, b) => a + b, 0);
    }
    sumXsumX(data) {
        return Math.pow(data.reduce((a, b) => a + b, 0), 2);
    }
    sumXY(dataX, dataY) {
        return dataX.map((x, i) => x * dataY[i]).reduce((a, b) => a + b, 0);
    }
    sumYQuad(data) {
        return data.map(y => y * y).reduce((a, b) => a + b, 0);
    }
    getN(data) {
        return data.length;
    }
}
exports.DiscreteMaths = DiscreteMaths;
//# sourceMappingURL=discrete-maths.js.map