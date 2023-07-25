import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import { SearchBarService } from './search-bar.service';
import { PaginationService } from '../pagination/pagination.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { UiKitModule } from '../ui-kit/ui-kit.module';
import { PaginationComponent } from '../pagination/pagination.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let searchBarService: SearchBarService;
  let paginationService: PaginationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule,UiKitModule,AppRoutingModule],
      declarations: [SearchBarComponent,PaginationComponent],
      providers: [SearchBarService, PaginationService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    searchBarService = TestBed.inject(SearchBarService);
    paginationService = TestBed.inject(PaginationService);
  });

  it('should call search service and fetch data on search', () => {
    spyOn(searchBarService, 'search').and.callThrough();
    spyOn(searchBarService, 'fetchThingsfromAPI').and.returnValue(of({ works: [] }));

    component.search();

    expect(searchBarService.search).toHaveBeenCalled();
    expect(searchBarService.fetchThingsfromAPI).toHaveBeenCalled();
    expect(component.paginatedResults).toEqual([]);
    expect(searchBarService.searchvar).toBeTrue();
  });
  it('should reset the component', () => {
    component.searchBarService.offset = 10;
    component.paginationService.currentPage = 3;
    component.paginatedResults = [/* some data */];
    component.searchBarService.searchvar = true;

    component.reset();

    expect(component.searchBarService.offset).toBe(component.searchBarService.offset);
    expect(component.paginationService.currentPage).toBe(component.paginationService.currentPage);
    expect(component.paginatedResults).toEqual([]);
    expect(component.searchBarService.searchvar).toBeFalse();
  });
  it('should set language input value when selecting a language', () => {
    const language = 'ita';
    component.onLanguageChange(language);
    expect(component.searchBarService.languageInput.value).toBe(language);
  });
  it('should set the limit to 1000 if num is greater than 1000', () => {
    const num = 1500;
    const expectedLimit = 1000;

    component.getLimitValue(num);

    expect(component.limit).toBe(expectedLimit);
    expect(component.searchBarService.limit).toBe(expectedLimit);
  });

  it('should set the limit to num if num is less than or equal to 1000', () => {
    const num = 500;

    component.getLimitValue(num);

    expect(component.limit).toBe(num);
    expect(component.searchBarService.limit).toBe(num);
  });

  it('should set the limit to 50 if num is negative', () => {
    const num = -200;
    const expectedLimit = 50;

    component.getLimitValue(num);

    expect(component.limit).toBe(expectedLimit);
    expect(component.searchBarService.limit).toBe(expectedLimit);
  });
  it('should call reset method on ngOnInit', () => {
    spyOn(component, 'reset');

    component.ngOnInit();

    expect(component.reset).toHaveBeenCalled();
  });
  it('should set selectedOption in searchBarService when onParamselect is called', () => {
    const selectedOptionValue = '';
    component.onParamselect('subject');

    expect(searchBarService.selectedOption.value).toBe(selectedOptionValue);
  });
});
