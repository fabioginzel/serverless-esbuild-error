import { ContainerBuilder, Reference } from 'node-dependency-injection'
import EventManagerSns from './infra/service/EventManagerSns';


const container = new ContainerBuilder()

container
  .register('eventManager', EventManagerSns);


container.compile();

export default container;