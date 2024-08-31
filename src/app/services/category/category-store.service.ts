import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ICategory } from 'src/app/models/icategory';
import { CategoryService } from './category.service';

@Injectable({
	providedIn: 'root'
})
export class CategoryStoreService {
	private categories$$ = new BehaviorSubject<ICategory[]>([])
	readonly categories$ = this.categories$$.asObservable()
	private categories: ICategory[] = []

	constructor(private categoryService: CategoryService) { }

	getCategories(): Observable<ICategory[]> {
		return this.categoryService.getAll().pipe(
			tap((categories) => {
				this.categories = categories
				this.categories$$.next([...this.categories])
			})
		)
	}

	addCategory(category: ICategory): Observable<ICategory> {
		return this.categoryService.add(category).pipe(
			tap((category) => {
				this.categories = [...this.categories, category]
				this.categories$$.next([...this.categories])
			})
		)
	}

	editCategory(categoryId: number, category: ICategory): Observable<ICategory> {
		return this.categoryService.edit(categoryId, category).pipe(
			tap((category) => {
				this.categories = this.categories.map(c => c.categoryId === category.categoryId ? category : c)
				this.categories$$.next([...this.categories])
			})
		)
	}

	deleteCategory(categoryId: number): Observable<Object> {
		return this.categoryService.delete(categoryId).pipe(
			tap(() => {
				this.categories = this.categories.filter(category => category.categoryId !== categoryId)
				this.categories$$.next([...this.categories])
			})
		)
	}
}
