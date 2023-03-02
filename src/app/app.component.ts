import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';

@Component({
    selector: 'my-app',
    template: `
        <div class="example">
            <form class="k-form" [formGroup]="form">
                <fieldset class="k-form-fieldset">
                    <legend class="k-form-legend">Your account</legend>

                    <kendo-avatar initials="EG" width="80px" height="80px" shape="circle"></kendo-avatar>
                    <kendo-formfield>
                        <kendo-label [for]="email" text="Email"></kendo-label>
                        <kendo-textbox formControlName="email" [clearButton]="true" #email required></kendo-textbox>

                        <kendo-formhint>Your Email</kendo-formhint>
                        <kendo-formerror>Error: Email is required</kendo-formerror>
                    </kendo-formfield>
                    
                    <div class="k-form-buttons">
                        <button kendoButton  themeColor="primary" (click)="login()">Login</button>
                        <button kendoButton (click)="clearForm()">Clear</button>
                    </div>
                </fieldset>
            </form>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./styles.css']
})
export class AppComponent {
    // @ViewChild('password') public textbox: TextBoxComponent;

    // public ngAfterViewInit(): void {
    //     this.textbox.input.nativeElement.type = 'password';
    // }

    // public toggleVisibility(): void {
    //     const inputEl = this.textbox.input.nativeElement;
    //     inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
    // }

    public form: FormGroup = new FormGroup({
        email: new FormControl(),
    });

    public login(): void {
        this.form.markAllAsTouched();
    }

    public clearForm(): void {
        this.form.reset();
    }
}
