// src/App.test.js

// 1. IMPORT ONLY FROM THE LOGIC FILE
import { initializeTimes, updateTimes } from './apiLogic';

// 2. MOCK THE GLOBAL API (Requirement for the Meta Project)
// This prevents Jest from looking into App.js for these functions
beforeAll(() => {
  window.fetchAPI = jest.fn((date) => ["17:00", "18:00", "19:00", "20:00"]);
});

// 3. TEST: initializeTimes
test('initializeTimes returns initial available times', () => {
    const result = initializeTimes();
    expect(result).toEqual(["17:00", "18:00", "19:00", "20:00"]);
});

// 4. TEST: updateTimes
test('updateTimes returns new times based on the action payload', () => {
    const action = { type: 'UPDATE_TIMES', payload: '2026-03-10' };
    const result = updateTimes([], action);
    expect(result).toEqual(["17:00", "18:00", "19:00", "20:00"]);
});