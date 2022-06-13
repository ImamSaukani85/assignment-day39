const httpMocks = require("node-mocks-http");
const mathHandlers = require("../math");

test("2016-01-01", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date("2016-01-01"));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-leap-year"
    });
    const response = httpMocks.createResponse();
    await mathHandlers.isLeapYear(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    })
})

test("2017-01-01", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date("2017-01-01"));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-leap-year"
    });
    const response = httpMocks.createResponse();
    await mathHandlers.isLeapYear(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: false,
        error: null
    })
})