import React from 'react'
import {sortByItemCount} from './sortOrders';
import {sortByItemNames} from './sortOrders';
import {sortByDate} from './sortOrders';
// import {sortTypes} from './sortOrders';
// import {sortOrders} from './sortOrders';

// describe('sortByItemCount function', () => {
// 	it('orders are null', () => {
// 		const orders = [
// 			{},
// 			{}
// 		]
// 		sortOrders(orders, sortTypes.ITEM_NAMES)
// 	});
// 	it('orders are null', () => {
// 		const orders = [
// 			{},
// 			{}
// 		]
// 		sortOrders(orders, sortTypes.DATE)
// 	});
// 	it('orders are null', () => {
// 		const orders = [
// 			{},
// 			{}
// 		]
// 		sortOrders(orders, sortTypes.COUNT)
// 	});
// 	it('orders are null', () => {
// 		const orders = []
// 		sortOrders(orders, sortTypes.ITEM_NAMES)
// 	});
// });

describe('sortByItemCount function', () => {

	it('none params', () => {
		const result = sortByItemCount();
		expect(result).toEqual(0);
	});

	it('date are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});
	
	it('date are null', () => {
		const object1 = {};
		const object2 = {};
		const result = sortByItemCount(object1, object2);
		expect(result).toEqual(0);
	});

	it('items are null', () => {
		const order1 = {
			items: false
		};
		const order2 = {};
		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('first order count more', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('second order count more', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});
});

describe('sortByItemNames function', () => {
	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('none params', () => {
		const result = sortByItemNames();
		expect(result).toEqual(0);
	});

	it('date are null', () => {
		const object1 = {};
		const object2 = {};
		const result = sortByItemNames(object1, object2);
		expect(result).toEqual(0);
	});

	it('names are null', () => {
		const order1 = {};
		const order2 = {};
		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(0);
	});

	it('same items names', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['item1', 'item2'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('first names is first', () => {
		const order1 = {
			items: ['b'],
		};

		const order2 = {
			items: ['a'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(1);
	});

	it('second names is first', () => {
		const order1 = {
			items: ['a'],
		};

		const order2 = {
			items: ['b'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(-1);
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('none params', () => {
		const result = sortByDate();
		expect(result).toEqual(0);
	});

	it('dates are null', () => {
		const order1 = {};
		const order2 = {};
		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('same date', () => {
		const order1 = {
			date: [1],
		};

		const order2 = {
			date: [1],
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('first earlier', () => {
		const order1 = {
			date: [1],
		};

		const order2 = {
			date: [2],
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});

	it('second earlier', () => {
		const order1 = {
			date: [2],
		};

		const order2 = {
			date: [1],
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});
});