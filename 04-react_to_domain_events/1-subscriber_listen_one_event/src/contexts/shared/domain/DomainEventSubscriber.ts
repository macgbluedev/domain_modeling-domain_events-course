import { DomainEvent } from "./DomainEvent";
import { DomainEventName } from "./DomainEventName";

export interface DomainEventSubscriber<T extends DomainEvent> { //domain event sub contract is in domain layer, return a void because we have the premise that generate a side effect
	on(domainEvent: T): Promise<void>;

	subscribedTo(): DomainEventName<T>[];
}
