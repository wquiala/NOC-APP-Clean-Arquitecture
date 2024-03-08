import { CronJob } from "cron";

type CronTime = string | Date;

type Ontick = () => void;

//Ejecuta la tarea que esta dentro la funcion cada 3 segundos
export class CronService {
  public static createJob(cronTime: CronTime, ontick: Ontick) {
    /**
     * field          allowed values
-----          --------------
second         0-59
minute         0-59
hour           0-23
day of month   1-31
month          1-12 (or names, see below)
day of week    0-7 (0 or 7 is Sunday, or use names)

Cada * representa un campo de la tabla
     *  */
    //const job = new CronJob("*/3 * * * * *", () => {
    //const date = new Date();
    //console.log("3 second", date);
    // });
    const job = new CronJob(cronTime, ontick);
    job.start();

    return job;
  }
}
