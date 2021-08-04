import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-user-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {
    userForm: FormGroup;
    @Output() signal: EventEmitter<any>;
    @Input() userData: any;
    @Input() data: any = null;

    constructor() {
        this.userForm = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
            dg: new FormControl(null, [Validators.required]),
            phone: new FormControl(null, [Validators.minLength(11), Validators.maxLength(12)]),
        });

        this.signal = new EventEmitter();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.userData?.currentValue) {
            this.userForm.patchValue(changes.userData.currentValue);
        }
    }

    onSave() {
        const val = this.userForm.value;
        const type = val.id != null ? 'onEdit' : 'onAdd';
        
        val.id = type === 'onAdd' ? this.data.length + 1 : val.id;
        
        this.signal.emit({ type, data: val });
        this.userForm.reset();
    }

}
