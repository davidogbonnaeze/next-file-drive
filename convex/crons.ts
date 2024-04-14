import { internal } from "./_generated/api";
import {cronJobs} from "convex/server";

const crons = cronJobs();

crons.interval(
    "delete any old files marked for deletion",
    { minutes: 1 },
    internal.files.deleteAllFiles
);

export default crons;