import { TestBed } from '@angular/core/testing';

import { FinSaasFormulaEditorService } from './fin-saas-formula-editor.service';

describe('FinSaasFormulaEditorService', () => {
  let service: FinSaasFormulaEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinSaasFormulaEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
