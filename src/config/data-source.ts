import { Task } from 'src/tasks/task.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'taskmanagement',
  entities: [Task],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => console.log('hello'))
  .catch((error) => console.log(error));
