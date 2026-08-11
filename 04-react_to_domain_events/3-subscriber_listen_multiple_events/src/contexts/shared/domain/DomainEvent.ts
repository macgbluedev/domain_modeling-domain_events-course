export class DomainEvent {
	public readonly occurredOn: Date;

	protected constructor(
		public readonly eventName: string,
		occurredOn?: Date, //the domain event required a 'date' because it refer to a past action
	) {
		this.occurredOn = occurredOn ?? new Date();
	}
}
