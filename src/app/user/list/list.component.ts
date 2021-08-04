import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../models';

@Component({
	selector: 'app-user-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnChanges {

	@Input() dataSource: User[];
	@Input() data: any[];

	@Output() signal: EventEmitter<any>;

	displayedColumns: string[];
	selectedRow: any;

	constructor() {
		this.displayedColumns = ['name', 'dg', 'phone']
		this.dataSource = [];
		this.data = [];
		this.selectedRow = null;

		this.signal = new EventEmitter();
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.dataSource = changes.data.currentValue;
		if (this.selectedRow != null)
		{
			this.selectedRow = null
		}
	}

	onRowClick(row: any) {
		if (this.selectedRow === row) {
			this.selectedRow = null;
		}
		else {
			this.selectedRow = row;
		}
	}

	onEdit() {
		this.signal.emit({ type: 'onEdit', data: this.selectedRow, length: this.data.length });
	}

}
