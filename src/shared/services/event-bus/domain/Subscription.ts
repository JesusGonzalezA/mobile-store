export type Observer<T> = {
	next?: (value: T) => void
}
export type Unsubscribable = {
	unsubscribe(): void
}
type SubjectLike<T> = {
	subscribe(observer: Partial<Observer<T>>): Unsubscribable
}
export type Subscription<T> = Observer<T> & SubjectLike<T>
