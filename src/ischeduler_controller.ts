import {CronJob} from 'cron';
import {ISchedule} from './ischedule';

export interface ISchedulerController {
  jobs: Array<CronJob>;
  schedule: ISchedule;
}
