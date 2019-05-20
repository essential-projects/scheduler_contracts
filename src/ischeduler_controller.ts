import {CronCommand, CronJob} from 'cron';

export interface ISchedulerController {
  jobs: Array<CronJob>;
  registerJob(schedule: string | Date, job: CronCommand);
}
