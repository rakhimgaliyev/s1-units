import React from 'react'
import {getDate} from './getDate';


describe('sortByItemCount function', () => {
	it('Date is OK', () => {
        const timestamp = 939686400;
        const result = getDate(timestamp)
		expect(result).toEqual("11 января, вс, 1970 год");
    });
});
