import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinSaasFormulaEditorComponent } from './fin-saas-formula-editor.component';

describe('FinSaasFormulaEditorComponent', () => {
  let component: FinSaasFormulaEditorComponent;
  let fixture: ComponentFixture<FinSaasFormulaEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinSaasFormulaEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinSaasFormulaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
