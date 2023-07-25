import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorDetailsComponent } from './author-details.component';
import { ItemDetailsService } from '../item-details/item-details.service';
import { of } from 'rxjs';

describe('AuthorDetailsComponent', () => {
  let component: AuthorDetailsComponent;
  let fixture: ComponentFixture<AuthorDetailsComponent>;
  let mockItemDetailsService: jasmine.SpyObj<ItemDetailsService>;

  beforeEach(() => {
    mockItemDetailsService = jasmine.createSpyObj('ItemDetailsService', ['getItemDetails']);

    TestBed.configureTestingModule({
      declarations: [AuthorDetailsComponent],
      providers: [{ provide: ItemDetailsService, useValue: mockItemDetailsService }]
    });

    fixture = TestBed.createComponent(AuthorDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should fetch and set authorInfo correctly', () => {
    const mockAuthorInfo = { name: 'John Doe', age: 30 };
    mockItemDetailsService.getItemDetails.and.returnValue(of(mockAuthorInfo));
    component.ngOnInit();
    expect(component.authorInfo).toEqual(mockAuthorInfo);
  });

  it('should correctly check if a value is an object', () => {
    expect(component.isObject({})).toBeTrue();
    expect(component.isObject([])).toBeTrue();
    expect(component.isObject(null)).toBeFalse();
    expect(component.isObject(123)).toBeFalse();
    expect(component.isObject('test')).toBeFalse();
  });
});
