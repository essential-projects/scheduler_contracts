# Scheduler Contracts

These are the contracts for the [@essential-projects/scheduler_extension](https://github.com/essential-projects/scheduler_extension).

## What are the goals of this project?

The goal is to provide interfaces and constants for the [@essential-projects/scheduler_extension](https://github.com/essential-projects/scheduler_extension).

### Requirements

- Node > `10.15.0`

### Setup/Installation

Install the contracts:
```shell
npm install @essential-projects/scheduler_contracts
```

### How do I use this project?

Use the schedulerDiscoveryTag to register your SchedulerController, so the
scheduler extension can discover them

```TypeScript
import {MySchedulerController} from './my_scheduler_controller';
import {schedulerDiscoveryTag} from '@essential-projects/scheduler_contracts';

iocContainer.register('MySchedulerController', MySchedulerController)
  .tags(schedulerDiscoveryTag)
  .singleton();
}
```

### Authors/Contact information

1. [Heiko Mathes](mailto:heiko.mathes@5minds.de)
