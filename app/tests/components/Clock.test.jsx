var React = require("react")
var ReactDOM = require("react-dom")
var expect = require("expect")
var $ = require("jQuery")
var TestUtils = require("react-addons-test-utils")


var Clock = require("Clock");

describe("Clock", () => {
    it("should exist", () => {
        expect(Clock).toExist();
    })

    describe("formatSeconds", () => {
        it("should format seconds", () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var totalSeconds = 615;
            var expectedResult = "10:15"
            var actualResult = clock.formatSeconds(totalSeconds);
            expect(actualResult).toBe(expectedResult);
        })
        it("should format seconds when min/sec are less than 10", () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var totalSeconds = 61;
            var expectedResult = "01:01"
            var actualResult = clock.formatSeconds(totalSeconds);
            expect(actualResult).toBe(expectedResult);
        })
    });

});
