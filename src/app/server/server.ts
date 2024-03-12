import { BigQuery } from '@google-cloud/bigquery';

const privateKey = JSON.parse(process.env.private_key as string);
const projectId = process.env.project_id;

export const bq = new BigQuery({
  credentials: privateKey,
  projectId: projectId,
});
