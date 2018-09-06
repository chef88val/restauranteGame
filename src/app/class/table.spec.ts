import { Table } from './table';

describe('MasterService without Angular testing support', () => {
    let tableClass: Table;

    it('#getValue should return real value from the real service', () => {
        tableClass = new Table('test', 1);
        expect(tableClass.pax).toBe(1);
    });
});
