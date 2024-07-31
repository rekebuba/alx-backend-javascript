import { RowID } from './interface';
import { RowElement } from './interface';
import * as CRUD from './crud'

const row:RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const newRowID:RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
