import DomainEvent from "../../domain/event/DomainEvent";

export default interface EventManager {
    publish(event : DomainEvent) : Promise<void>
}