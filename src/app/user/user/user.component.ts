import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {

    data: any[];
    formData: any;

    constructor() {
        this.data = [
            { id: 1, name: 'M. Jawad', dg: 'Angular Developer', phone: 3418216828 },
            { id: 2, name: 'Kashif Raza', dg: 'Devops Engineer', phone: 3011234567 }
        ]
        this.formData = null;
    }

    onFormSignal(ev: any) {
        if (ev.type === 'onEdit') {
            const id = this.data.findIndex(rec => rec.id === ev.data.id);
            this.data.splice(id, 1, ev.data);
            this.data = JSON.parse(JSON.stringify(this.data));
        }
        else {
            this.data = [...this.data, ev.data];
        }
    }

    onTableSignal(ev: any) {
        if (ev.type === 'onEdit') {
            this.formData = ev.data;
        }
    }

}
