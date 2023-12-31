import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeTrendingComponent } from './home-trending.component';
import { HomeTrendingService } from './home-trending.service';
import { ItemDetailsService } from '../item-details/item-details.service';
import { AuthorDetailsService } from '../author-details/author-details.service';
import { of } from 'rxjs';

describe('HomeTrendingComponent', () => {
  let component: HomeTrendingComponent;
  let fixture: ComponentFixture<HomeTrendingComponent>;
  let mockHomeService: jasmine.SpyObj<HomeTrendingService>;
  let mockItemDetailsService: Partial<ItemDetailsService>;
  let mockAuthorDetailsService: Partial<AuthorDetailsService>;

  beforeEach(() => {
    // Crea il mock del servizio HomeTrendingService
    mockHomeService = jasmine.createSpyObj('HomeTrendingService', ['fetchTrending', 'cancelRequests']);
    mockHomeService.fetchTrending.and.returnValue(of({ works: [{ title: 'Item 1' }, { title: 'Item 2' }] }));

    mockItemDetailsService = {};
    mockAuthorDetailsService = {};

    TestBed.configureTestingModule({
      declarations: [HomeTrendingComponent],
      providers: [
        { provide: HomeTrendingService, useValue: mockHomeService },
        { provide: ItemDetailsService, useValue: mockItemDetailsService },
        { provide: AuthorDetailsService, useValue: mockAuthorDetailsService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch trending items on initialization', () => {
    component.ngOnInit();

    expect(mockHomeService.fetchTrending).toHaveBeenCalled();
    expect(component.itemResponseByTime).toEqual([{ title: 'Item 1' }, { title: 'Item 2' }]);
  });

  it('should call trending method on item click', () => {
    spyOn(component, 'trending');

    component.onItemClick('weekly');

    expect(component.trending).toHaveBeenCalled();
    expect(component.time).toBe('weekly');
  });

  it('should return the first element if value is an array', () => {
    const inputArray = [1, 2, 3];
    expect(component.getFirstValueIfArray(inputArray)).toBe(1);

    const inputStringArray = ['a', 'b', 'c'];
    expect(component.getFirstValueIfArray(inputStringArray)).toBe('a');
  });

  it('should return the value as is if it is not an array', () => {
    const inputValue = 42;
    expect(component.getFirstValueIfArray(inputValue)).toBe(42);

    const inputString = 'hello';
    expect(component.getFirstValueIfArray(inputString)).toBe('hello');

    const inputObject = { key: 'value' };
    expect(component.getFirstValueIfArray(inputObject)).toEqual({ key: 'value' });
  })});
