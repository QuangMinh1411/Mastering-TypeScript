var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    //  
    // #score: number = 0;
    function Player(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    Player.prototype.secretMethod = function () {
        console.log("SECRET METHOD");
    };
    Object.defineProperty(Player.prototype, "fullName", {
        get: function () {
            return "".concat(this.first, " ").concat(this.last);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (newScore) {
            if (newScore < 0) {
                throw new Error("Score can not negative");
            }
            this._score = newScore;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var SuperPlayer = /** @class */ (function (_super) {
    __extends(SuperPlayer, _super);
    function SuperPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAdmin = true;
        return _this;
    }
    SuperPlayer.prototype.maxScore = function () {
        this._score = 99999;
    };
    return SuperPlayer;
}(Player));
var elton = new Player("Elton", "Stee", 100);
console.log(elton.fullName);
elton.score = 99;
var Jacket = /** @class */ (function () {
    function Jacket(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    Jacket.prototype.print = function () {
        console.log("".concat(this.brand, "-").concat(this.color, " jacket"));
    };
    return Jacket;
}());
var Bike = /** @class */ (function () {
    function Bike(color) {
        this.color = color;
    }
    return Bike;
}());
var jacket1 = new Jacket("Prada", "blue");
var bike1 = new Bike("red");
var Employee = /** @class */ (function () {
    function Employee(first, last) {
        this.first = first;
        this.last = last;
    }
    Employee.prototype.greet = function () {
        console.log("Hello");
    };
    return Employee;
}());
var FulltimeEmployee = /** @class */ (function (_super) {
    __extends(FulltimeEmployee, _super);
    function FulltimeEmployee(first, last, salary) {
        var _this = _super.call(this, first, last) || this;
        _this.salary = salary;
        return _this;
    }
    FulltimeEmployee.prototype.getPay = function () {
        return this.salary;
    };
    return FulltimeEmployee;
}(Employee));
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(first, last, hourlyRate, hourlyWorked) {
        var _this = _super.call(this, first, last) || this;
        _this.hourlyRate = hourlyRate;
        _this.hourlyWorked = hourlyWorked;
        return _this;
    }
    PartTimeEmployee.prototype.getPay = function () {
        return this.hourlyRate * this.hourlyWorked;
    };
    return PartTimeEmployee;
}(Employee));
var betty = new FulltimeEmployee("Betty", "WHite", 9500);
var bill = new PartTimeEmployee("Bill", "Sorrow", 20, 4);
