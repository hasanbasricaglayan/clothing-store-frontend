import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/icategory';
import { CategoryStoreService } from 'src/app/services/category/category-store.service';

@Component({
	selector: 'app-categories-view',
	templateUrl: './categories-view.component.html',
	styleUrls: ['./categories-view.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesViewComponent implements OnInit {
	categories$: Observable<ICategory[]> | undefined;
	currentCategory: ICategory | undefined;

	constructor(private categoryStoreService: CategoryStoreService) { }

	showEditCategory(category: ICategory): void {
		this.currentCategory = category
	}

	hideEditCategory(): void {
		this.currentCategory = undefined
	}

	addCategory(form: NgForm): void {
		let category: ICategory = {
			name: form.value.addCategoryName
		}
		this.categoryStoreService.addCategory(category).subscribe(() => {
			form.resetForm()
		})
	}

	editCategory(form: NgForm): void {
		let category: ICategory = {
			name: form.value.editCategoryName
		}
		this.categoryStoreService.editCategory(this.currentCategory?.categoryId!, category).subscribe(() => {
			this.hideEditCategory()
		})
	}

	deleteCategory(categoryId: number): void {
		if (confirm("Etes-vous sûr de vouloir supprimer la catégorie ?"))
			this.categoryStoreService.deleteCategory(categoryId).subscribe()
	}

	ngOnInit(): void {
		this.categories$ = this.categoryStoreService.categories$
		this.categoryStoreService.getCategories().subscribe()
	}
}
