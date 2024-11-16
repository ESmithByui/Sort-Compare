var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var num_list = /** @class */ (function () {
    function num_list(name, length, min, max) {
        this.merge_array = [];
        this.quick_array = [];
        this.bubble_array = [];
        this.merge_count = 0;
        this.merge_time = 0;
        this.quick_count = 0;
        this.quick_time = 0;
        this.bubble_count = 0;
        this.bubble_time = 0;
        this.name = name;
        this.make_random_array(length, min, max, this.merge_array);
        this.copy_array(this.merge_array, this.quick_array);
        this.copy_array(this.merge_array, this.bubble_array);
    }
    num_list.prototype.get_count = function () {
        return [this.merge_count, this.quick_count, this.bubble_count];
    };
    num_list.prototype.get_time = function () {
        return [this.merge_time, this.quick_time, this.bubble_time];
    };
    num_list.prototype.run = function () {
        console.clear();
        console.log("Begining comparison of list [".concat(this.name, "]"));
        console.log('Starting merge sort');
        var start = new Date().getTime();
        this.merge_count = this.merge_sort(this.merge_array);
        this.merge_time = new Date().getTime() - start;
        console.log('Ended merge sort');
        console.log('Starting quick sort');
        start = new Date().getTime();
        this.quick_count = this.quick_sort(this.quick_array);
        this.quick_time = new Date().getTime() - start;
        console.log('Ended quick sort');
        console.log('Starting bubble sort');
        start = new Date().getTime();
        this.bubble_count = this.bubble_sort(this.bubble_array);
        this.bubble_time = new Date().getTime() - start;
        console.log('Ended bubble sort');
        console.clear();
    };
    num_list.prototype.display = function () {
        console.log("List [".concat(this.name, "] results:"));
        console.log("[".concat(this.merge_array[0], ", ").concat(this.merge_array[1], ", ").concat(this.merge_array[2], " ... ").concat(this.merge_array[this.merge_array.length - 3], ", ").concat(this.merge_array[this.merge_array.length - 2], ", ").concat(this.merge_array[this.merge_array.length - 1], "]"));
        console.log("\nMerge sort");
        console.log("Completed in ".concat(("".concat(Math.floor((this.merge_time / 1000) / 60), " min : ").concat(Math.floor((this.merge_time / 1000) % 60), " sec : ").concat(Math.floor((this.merge_time % 1000)), " ms")), " with ").concat(this.merge_count, " comparisons"));
        console.log("\nQuick sort");
        console.log("Completed in ".concat(("".concat(Math.floor((this.quick_time / 1000) / 60), " min : ").concat(Math.floor((this.quick_time / 1000) % 60), " sec : ").concat(Math.floor((this.quick_time % 1000)), " ms")), " with ").concat(this.quick_count, " comparisons"));
        console.log("\nBubble sort");
        console.log("Completed in ".concat(("".concat(Math.floor((this.bubble_time / 1000) / 60), " min : ").concat(Math.floor((this.bubble_time / 1000) % 60), " sec : ").concat(Math.floor((this.bubble_time % 1000)), " ms")), " with ").concat(this.bubble_count, " comparisons"));
        console.log("\n\n");
    };
    num_list.prototype.make_random_array = function (length, min, max, list) {
        list.length = 0;
        var i = 0;
        while (i < length) {
            list[i] = this.random_int(min, max);
            i += 1;
        }
    };
    num_list.prototype.copy_array = function (list_1, list_2) {
        list_2.length = 0;
        for (var i = 0; i < list_1.length; i++) {
            list_2[i] = list_1[i];
        }
    };
    num_list.prototype.random_int = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    num_list.prototype.merge_sort = function (list) {
        var operation_count = 0;
        if (list.length > 1) {
            var middle = Math.floor(list.length / 2);
            var left_list = list.slice(0, middle);
            var right_list = list.slice(middle);
            operation_count += this.merge_sort(left_list);
            operation_count += this.merge_sort(right_list);
            var i = 0;
            var j = 0;
            var k = 0;
            while ((i < left_list.length) && (j < right_list.length)) {
                if (left_list[i] < right_list[j]) {
                    list[k] = left_list[i];
                    i += 1;
                }
                else {
                    list[k] = right_list[j];
                    j += 1;
                }
                k += 1;
                operation_count += 1;
            }
            while (i < left_list.length) {
                list[k] = left_list[i];
                i += 1;
                k += 1;
                operation_count += 1;
            }
            while (j < right_list.length) {
                list[k] = right_list[j];
                j += 1;
                k += 1;
                operation_count += 1;
            }
        }
        return operation_count;
    };
    num_list.prototype.quick_sort = function (list) {
        var operation_count = 0;
        function partition(start, end) {
            var _a, _b;
            var pivot = list[end];
            var i = start - 1;
            for (var j = start; j < end; j++) {
                operation_count++;
                if (list[j] < pivot) {
                    i++;
                    _a = [list[j], list[i]], list[i] = _a[0], list[j] = _a[1]; // swap
                }
            }
            _b = [list[end], list[i + 1]], list[i + 1] = _b[0], list[end] = _b[1]; // Place pivot correctly
            return i + 1;
        }
        function recursive_quick_sort(start, end) {
            if (start < end) {
                var pivot_index = partition(start, end);
                recursive_quick_sort(start, pivot_index - 1);
                recursive_quick_sort(pivot_index + 1, end);
            }
        }
        recursive_quick_sort(0, list.length - 1);
        return operation_count;
    };
    num_list.prototype.bubble_sort = function (list) {
        var operation_count = 0;
        var swapped;
        var i;
        var j;
        var temp;
        for (i = 0; i < list.length - 1; i++) {
            swapped = false;
            for (j = 0; j < list.length - i - 1; j++) {
                if (list[j] > list[j + 1]) {
                    temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                    swapped = true;
                }
                operation_count += 1;
            }
            if (swapped == false) {
                return operation_count;
            }
        }
        return -1;
    };
    return num_list;
}());
function get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var sets = 0;
var list_length = 0;
var min = 0;
var max = 0;
var askQuestion = function (question) {
    return new Promise(function (resolve) { return rl.question(question, resolve); });
};
(function () { return __awaiter(_this, void 0, void 0, function () {
    var _a, _b, _c, _d, lists, i, i, total_merge_count, total_quick_count, total_bubble_count, total_merge_time, total_quick_time, total_bubble_time, i, counts, times, merge_count_average, merge_time_average, quick_count_average, quick_time_average, bubble_count_average, bubble_time_average, total_time;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, , 5, 6]);
                _a = parseInt;
                return [4 /*yield*/, askQuestion("How long should the lists be: ")];
            case 1:
                list_length = _a.apply(void 0, [_e.sent()]);
                _b = parseInt;
                return [4 /*yield*/, askQuestion("What is the lowest number: ")];
            case 2:
                min = _b.apply(void 0, [_e.sent()]);
                _c = parseInt;
                return [4 /*yield*/, askQuestion("What is the highest number: ")];
            case 3:
                max = _c.apply(void 0, [_e.sent()]);
                _d = parseInt;
                return [4 /*yield*/, askQuestion("How many lists should be processed: ")];
            case 4:
                sets = _d.apply(void 0, [_e.sent()]);
                console.log("Creating ".concat(sets, " lists containing ").concat(list_length, " numbers between ").concat(min, " and ").concat(max));
                return [3 /*break*/, 6];
            case 5:
                lists = [];
                for (i = 0; i < sets; i++) {
                    lists[i] = new num_list(("".concat(i + 1)), list_length, min, max);
                } // create the num_lists
                for (i = 0; i < sets; i++) {
                    lists[i].run();
                } // run the num_lists
                total_merge_count = 0;
                total_quick_count = 0;
                total_bubble_count = 0;
                total_merge_time = 0;
                total_quick_time = 0;
                total_bubble_time = 0;
                for (i = 0; i < sets; i++) {
                    counts = lists[i].get_count();
                    total_merge_count += counts[0];
                    total_quick_count += counts[1];
                    total_bubble_count += counts[2];
                    times = lists[i].get_time();
                    total_merge_time += times[0];
                    total_quick_time += times[1];
                    total_bubble_time += times[2];
                }
                merge_count_average = total_merge_count / sets;
                merge_time_average = total_merge_time / sets;
                quick_count_average = total_quick_count / sets;
                quick_time_average = total_quick_time / sets;
                bubble_count_average = total_bubble_count / sets;
                bubble_time_average = total_bubble_time / sets;
                total_time = total_merge_time + total_quick_time + total_bubble_time;
                console.log("Results:");
                console.log("Total time to complete: ".concat(("".concat(Math.floor((total_time / 1000) / 60), " min : ").concat(Math.floor((total_time / 1000) % 60), " sec : ").concat(Math.floor((total_time % 1000)), " ms"))));
                console.log("\nMerge sort");
                console.log("Average comparison count: ".concat(merge_count_average));
                console.log("Average time to complete: ".concat(("".concat(Math.floor((merge_time_average / 1000) / 60), " min : ").concat(Math.floor((merge_time_average / 1000) % 60), " sec : ").concat(Math.floor((merge_time_average % 1000)), " ms"))));
                console.log("\nQuick sort");
                console.log("Average comparison count: ".concat(quick_count_average));
                console.log("Average time to complete: ".concat(("".concat(Math.floor((quick_time_average / 1000) / 60), " min : ").concat(Math.floor((quick_time_average / 1000) % 60), " sec : ").concat(Math.floor((quick_time_average % 1000)), " ms"))));
                console.log("\nBubble sort");
                console.log("Average comparison count: ".concat(bubble_count_average));
                console.log("Average time to complete: ".concat(("".concat(Math.floor((bubble_time_average / 1000) / 60), " min : ").concat(Math.floor((bubble_time_average / 1000) % 60), " sec : ").concat(Math.floor((bubble_time_average % 1000)), " ms"))));
                rl.close();
                return [7 /*endfinally*/];
            case 6: return [2 /*return*/];
        }
    });
}); })();
