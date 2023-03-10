var expect = require("expect");
var React = require("react")
var ReactDOM = require("react-dom")
var $ = require("jQuery")
var TestUtils = require("react-addons-test-utils")

var Countdown = require("Countdown");

describe("Countdown", () => {
    it("should exist", () => {
        expect(Countdown).toExist();
    });

    describe("handelSetCountdown", () => {
        it("should set state to be sarted and countdown", () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe("started")
            
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001)
        });
        it("should set state to be sarted and countdown and not go negative in timer", () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(3);
            
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001)
        });
    });

});
