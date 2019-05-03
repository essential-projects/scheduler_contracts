import {CronCommand} from 'cron';

export interface ISchedule {
  registerJob(schedule: string | Date, job: CronCommand);
}
