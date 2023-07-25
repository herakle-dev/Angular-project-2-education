import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPageComponent } from './main-page.component';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';
import { ItemDetailsService } from '../item-details/item-details.service';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';
import { MainPageService } from './main-page.service';
import { Subject } from 'rxjs';
import { AuthorDetailsService } from '../author-details/author-details.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      providers: [
        SearchBarService,
        ItemDetailsService,
        PaginationService,
        MainPageService,
        AuthorDetailsService,
      ],
      imports:[HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the first element of the array if authorName is an array', () => {
    const authorName = ['Author 1', 'Author 2', 'Author 3'];
    const result = component.getAuthorName(authorName);
    expect(result).toBe('Author 1');
  });

  it('should return the authorName itself if it is not an array', () => {
    const authorName = 'Single Author';
    const result = component.getAuthorName(authorName);
    expect(result).toBe('Single Author');
  });
  it('should return the first author name when authorName is an array', () => {
    const authorName = ['Author 1', 'Author 2', 'Author 3'];
    const result = component.getAuthorName(authorName);
    expect(result).toBe('Author 1');
  });

  it('should return the author name when authorName is not an array', () => {
    const authorName = 'Single Author';
    const result = component.getAuthorName(authorName);
    expect(result).toBe('Single Author');
  });

  it('should return undefined when authorName is undefined', () => {
    const authorName = undefined;
    const result = component.getAuthorName(authorName);
    expect(result).toBeUndefined();
  });
  it('should call next on the cancelSignal$', () => {
    spyOn(component.cancelSignal$, 'next');
    component.cancelRequests();
    expect(component.cancelSignal$.next).toHaveBeenCalled();
  });
});
