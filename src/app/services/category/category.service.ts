import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/icategory';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {
	private baseURL: string = "https://localhost:7138/api/Categories"

	constructor(private http: HttpClient) { }

	getAll(): Observable<ICategory[]> {
		const URL = `${this.baseURL}`

		return this.http.get<ICategory[]>(URL)
	}

	getById(categoryId: number): Observable<ICategory> {
		const URL = `${this.baseURL}/${categoryId}`

		return this.http.get<ICategory>(URL)
	}

	add(category: ICategory): Observable<ICategory> {
		const URL = `${this.baseURL}`

		const options = {
			headers: new HttpHeaders({
				'content-type': 'application/json'
			})
		}

		return this.http.post<ICategory>(
			URL,
			JSON.stringify({
				Name: category.name
			}),
			options)
	}

	edit(categoryId: number, category: ICategory): Observable<ICategory> {
		const URL = `${this.baseURL}/${categoryId}`

		const options = {
			headers: new HttpHeaders({
				'content-type': 'application/json'
			})
		}

		return this.http.put<ICategory>(
			URL,
			JSON.stringify({
				Name: category.name
			}),
			options)
	}

	delete(categoryId: number): Observable<Object> {
		const URL = `${this.baseURL}/${categoryId}`

		const options = {
			headers: new HttpHeaders({
				'content-type': 'application/json'
			})
		}

		return this.http.delete(URL, options)
	}
}
