import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodebookUpdateComponent } from './codebook-update.component';

describe('CodebookUpdateComponent', () => {
  let component: CodebookUpdateComponent;
  let fixture: ComponentFixture<CodebookUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodebookUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodebookUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
